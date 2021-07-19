import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { fromEvent, Observable, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, tap } from 'rxjs/operators';

@Component({
  selector: 'g-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit, OnDestroy {

  resizeObservable$: Observable<Event>;
  resizeSubscription$: Subscription;
  isSidebarOpen = false;
  @Input() position: 'left' | 'bottom' = 'left';

  get sideBarSize(): string {
    return this._sideBarSize;
  }

  @Input() set sideBarSize(value: string) {
    this._sideBarSize = value;
    this.defaultSidebarWith = value;
  }

  private _sideBarSize = window.innerWidth > 812 ? '300px' : '200px';
  private defaultSidebarWith;

  ngOnInit(): void {
    this.resizeObservable$ = fromEvent(window, 'resize');
    this.resizeSubscription$ = this.resizeObservable$.pipe(
      debounceTime(1000),
      distinctUntilChanged(),
      tap(evt => {
        this._sideBarSize = evt.target['innerWidth'] < 812 ?
          '200px' : this.defaultSidebarWith;
      })
    ).subscribe();
  }

  ngOnDestroy(): void {
    this.resizeSubscription$.unsubscribe();
  }

  toggle(): void {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  get sidebarWidth(): string {
    if (this.position === 'bottom') {
      return '100%';
    }
    return this.isSidebarOpen ? this.sideBarSize : '0';
  }

  get sidebarHeight(): string {
    if (this.position === 'left') {
      return '100%';
    }
    return this.isSidebarOpen ? this.sideBarSize : '0';
  }

  get sidebarMargin(): string {
    if (this.position === 'bottom') {
      return '0';
    }
    return this.isSidebarOpen ? this.sideBarSize : '0';
  }

}
