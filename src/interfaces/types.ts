import { ReactElement } from 'react';

export interface INavigationItem {
  icon: ReactElement;
  name: string;
  url: string;
}

export interface ITableProps<T> {
  title: string;
  addButtonText: string;
  onAddButtonClick: () => void;
  data: T[];
  rows: ITableCell<T>[];
  onRowClick?: (cell: T, index: number) => void;
  actionButtons?: ITableActionButton<T>[];
}

export interface ITableCell<T> {
  label?: string;
  key?: string;
  dataKey: string;
  render?: (row: T) => ReactElement;
  formattor?: (value: string) => string;
}

export interface ITableActionButton<T> {
  icon?: ReactElement;
  label: string;
  variant?: 'success' | 'danger' | 'warning' | 'default';
  onClick: (row: T, index: number) => void;
  disabled?: (row: T, index: number) => boolean;
}
