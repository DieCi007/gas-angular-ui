import { ComponentRef, EventEmitter, InjectionToken } from '@angular/core';
import { OverlayRef } from '@angular/cdk/overlay';

export interface IModalRef<T> {
  overlayRef: OverlayRef;
  componentRef: ComponentRef<T>;
}

export interface IModalOptions {
  size?: ModalSize;
  hasBackdrop?: boolean;
  panelClass?: string;
}

export enum ModalSize {
  SMALL = 'SMALL',
  MEDIUM = 'MEDIUM',
  LARGE = 'LARGE',
  FULL = 'FULL',
  HALF = 'HALF',
  AUTO = 'AUTO'
}

export interface IModalData {
  [MData: string]: any;
}

export interface IModalInjectionData extends IModalData {
  overlayRef: OverlayRef;
}

export interface IDefaultModalData {
  title?: string;
  primaryText?: string;
  secondaryText?: string;
  html?: string;
  actions?: IModalAction[];
}

export interface IDefaultModalInjectionData extends IDefaultModalData {
  overlayRef: OverlayRef;
}

export interface IModalAction {
  buttonLabel: string;
  buttonColor: 'primary' | 'secondary' | 'danger' | string;
}

export interface IErrorResponse {
  error: string;
  message: string;
}

export interface IAction extends IModalAction {
  click?: EventEmitter<MouseEvent>;
}

export const MODAL_DATA = new InjectionToken('MODAL_DATA');
