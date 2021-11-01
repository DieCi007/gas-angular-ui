import { EventEmitter, Injectable, Injector } from '@angular/core';
import { ComponentType, GlobalPositionStrategy, Overlay, OverlayRef } from '@angular/cdk/overlay';
import { tap } from 'rxjs/operators';
import { ComponentPortal } from '@angular/cdk/portal';
import { IAction, IDefaultModalData, IErrorResponse, IModalData, IModalOptions, IModalRef, MODAL_DATA, ModalSize } from '../model/modal';
import { DefaultModalComponent } from '../component/default-modal/default-modal.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private overlayReference: OverlayRef[] = [];
  contactMail: string;

  constructor(private overlay: Overlay) {
  }

  createFromComponent<T>(component: ComponentType<T>, props: IModalData, onBackdropClick?: () => void,
                         options: IModalOptions = {hasBackdrop: true, size: ModalSize.AUTO}, closeAll: boolean = true): IModalRef<T> {
    if (closeAll) {
      this.closeAllModals();
    }
    const index = this.overlayReference.length;

    const positionStrategy = new GlobalPositionStrategy().centerHorizontally().centerVertically();

    const overlayRef = this.overlay.create({
      height: options?.size ? getModalSize(options.size).height : 300,
      width: options?.size ? getModalSize(options.size).width : 500,
      hasBackdrop: !!options?.hasBackdrop,
      positionStrategy,
      panelClass: options?.panelClass ?? '',
    });
    overlayRef.backdropClick().pipe(
      tap(() => {
        if (onBackdropClick) {
          return onBackdropClick();
        }
        this.closeModal(index);
      })
    ).subscribe();

    const portal = new ComponentPortal(
      component,
      null,
      createInjector(Object.assign(props, {overlayRef}))
    );
    const componentRef = overlayRef.attach(portal);
    this.overlayReference.push(overlayRef);

    return {overlayRef, componentRef};
  }

  openDefaultModal(props: IDefaultModalData, onBackdropClick?: () => void,
                   options: IModalOptions = {hasBackdrop: true, size: ModalSize.LARGE}, closeAll: boolean = true): IAction[] {
    if (!props || !props.actions) {
      return null;
    }
    const actions: IAction[] = props.actions;
    actions.map(a => {
      a.click = new EventEmitter<MouseEvent>();
      return a;
    });
    this.createFromComponent(DefaultModalComponent, props, onBackdropClick, options, closeAll);
    return actions;
  }

  handleError(error: IErrorResponse): IAction[] {
    return this.openDefaultModal({
      title: `Errore`,
      html: '<div style="font-size: 1.1rem; font-weight: 500; padding: .5rem; text-align: center">' +
        'Abbiamo incontrato un problema. Se l\'errore persiste ' +
        '<a href=mailto:"' + this.contactMail + '">contatta l\'amministratore</a> indicando l\'errore:</div>' +
        '<div style="text-align: center; ' +
        'letter-spacing: 1.2px; padding: 0 .5rem">' + error.error + ': ' + error.message + '</div>',
      actions: [{
        buttonColor: 'secondary',
        buttonLabel: 'Indietro',
      }]
    });
  }

  private closeModal(index): void {
    if (this.overlayReference[index]) {
      this.overlayReference[index].dispose();
    }
  }

  private closeAllModals(): void {
    this.overlayReference.forEach(of => of.dispose());
  }
}

const getModalSize = (size: ModalSize): { width: string | number; height: string | number } => {
  switch (size) {
    case ModalSize.SMALL:
      return {width: '30%', height: '30%'};
    case ModalSize.MEDIUM:
      return {width: '350px', height: 'auto'};
    case ModalSize.LARGE:
      return {width: '500px', height: 'auto'};
    case ModalSize.FULL:
      return {width: '100%', height: '100%'};
    case ModalSize.HALF:
      return {width: '50%', height: '50%'};
    case ModalSize.AUTO:
      return {width: 'auto', height: 'auto'};
    default:
      return {width: 300, height: 500};
  }
};

const createInjector = (props: IModalData): Injector => {
  const tokens = new WeakMap();
  tokens.set(MODAL_DATA, props);
  return Injector.create({
    providers: [{
      provide: MODAL_DATA,
      useValue: props
    }]
  });
};


