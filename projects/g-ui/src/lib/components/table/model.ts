export interface ITableHeaderData {
  name: string;
  sortable?: boolean;
  property: string;
  isBold?: boolean;
  dateFormat?: string;
  render?: (row) => string;
}

export interface ITableButtonData {
  id: string;
  type: TableButtonType;
  color?: 'primary' | 'danger' | 'secondary' | string;
  label?: string;
  icon?: string;
  tooltip?: string;
}

export enum TableButtonType {
  LABELED = 'LABELED',
  ICON = 'ICON'
}

export interface ISortInfo {
  type: SortType;
  field: string;
}

export interface IButtonClickData<T> {
  buttonId: string;
  rowData: T;
}

export enum SortType {
  ASC = 'ASC',
  DESC = 'DESC'
}

