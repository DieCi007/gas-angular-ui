import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, tap } from 'rxjs/operators';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IButtonClickData, ISortInfo, ITableButtonData, ITableHeaderData, SortType } from './model';
import { BreakpointService } from '../../core/service/breakpoint.service';



@Component({
  selector: 'g-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent<T> implements OnInit, OnDestroy {

  @Input() headerData: ITableHeaderData[];
  @Input() expandedHeaderData: ITableHeaderData[];
  @Input() buttonData: ITableButtonData[];
  @Input() data: T[];
  @Input() noDataMessage = 'No items to display';
  @Input() cardMode = false;
  @Input() maxHeightPC = '50rem';
  @Input() maxHeightMobile = '38rem';
  @Input() changeAtPx = 812;
  @Input() buttonHeaderName = 'Actions';
  @Input() headerColor: 'primary' | 'secondary' | string = 'primary';
  @Input() hoverColor: 'primary' | 'secondary' = 'secondary';
  @Input() sort: ISortInfo;
  @Input() filterable = false;
  @Output() buttonClick = new EventEmitter<IButtonClickData<T>>();
  @Output() sortChange = new EventEmitter<ISortInfo>();
  @Output() filterChange = new EventEmitter<string>();

  mobileStyle = false;
  private bp$: Subscription;
  filterForm: FormGroup = this.fb.group({
    filter: ['']
  });
  private filterSubscription: Subscription;

  constructor(
    private bp: BreakpointService,
    private fb: FormBuilder
  ) {
  }


  ngOnInit(): void {
    this.bp$ = this.bp.customMaxWidth(this.changeAtPx).pipe(
      distinctUntilChanged(),
      tap(bp => bp.matches ? this.mobileStyle = true :
        this.mobileStyle = false),
    ).subscribe();
    this.filterSubscription = this.filterForm.valueChanges.pipe(
      map(r => r.filter),
      debounceTime(400),
      distinctUntilChanged(),
      tap(f => {
        if (this.filterable) {
          this.filterChange.emit(f);
        }
      })
    ).subscribe();
  }

  ngOnDestroy(): void {
    this.bp$.unsubscribe();
    this.filterSubscription.unsubscribe();
  }

  activateAccordion(accordion: HTMLTableDataCellElement): void {
    if (this.expandedHeaderData?.length > 0) {
      if (accordion.style.display === 'table-cell') {
        accordion.style.display = 'none';
      } else {
        accordion.style.display = 'table-cell';
      }
    }
  }

  get allHeaderData(): ITableHeaderData[] {
    let data = [...this.headerData];
    if (this.expandedHeaderData) {
      data = [...data, ...this.expandedHeaderData];
    }
    return data;
  }

  onButtonClick(event: MouseEvent, id: string, el: T): void {
    event.preventDefault();
    event.stopPropagation();
    this.buttonClick.emit({
      buttonId: id,
      rowData: el
    });
  }

  onSortChange(property: string): void {
    if (property === this.sort?.field) {
      return this.sortChange.emit({
        field: property,
        type: this.sort.type === SortType.ASC ? SortType.DESC : SortType.ASC
      });
    }
    this.sortChange.emit({
      field: property,
      type: SortType.ASC
    });
  }
}
