import { ITableCell } from '@interfaces/types';
import { ReactElement, useState } from 'react';

export function useTable<T>(data: T[]) {
  const [selectedRows, setSelectedRows] = useState<boolean[]>(
    data.map(() => false)
  );

  const renderCell = (cell: ITableCell<T>, row: T): ReactElement => {
    if (cell.render)
      return <td key={cell.key ?? cell.dataKey}>{cell.render(row)}</td>;
    return (
      <td key={cell.key ?? cell.dataKey}>
        {cell?.formattor
          ? // @ts-ignore
            cell.formattor(row[cell.dataKey])
          : // @ts-ignore
            row[cell.dataKey]}
      </td>
    );
  };

  const handleSelectionAll = (state: boolean) => {
    setSelectedRows((prevArray) => prevArray.map(() => state));
  };

  const handleCellSelection = (
    index: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    e.stopPropagation();
    setSelectedRows((prevArray) =>
      prevArray.map((item, i) => (i === index ? e.target.checked : item))
    );
  };

  const areAllSelected = () => {
    return selectedRows.every((row) => row);
  };

  return {
    renderCell,
    handleSelectionAll,
    selectedRows,
    handleCellSelection,
    areAllSelected,
  };
}
