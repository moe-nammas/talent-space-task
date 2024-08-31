import { ITableProps } from '@interfaces/types';
import TableHeader from './components/TableHeader';
import styles from './styles.module.scss';
import { useTable } from 'hooks/useTable';

const Table = <T,>({
  title,
  addButtonText,
  onAddButtonClick,
  data,
  rows,
  onRowClick,
  actionButtons,
}: ITableProps<T>) => {
  const { renderCell, handleSelectionAll, selectedRows, handleCellSelection } =
    useTable(data);

  return (
    <div className={styles['table-container']}>
      <TableHeader
        title={title}
        addButtonText={addButtonText}
        onAddButtonClick={onAddButtonClick}
        dataTotal={data.length}
      />
      <table className={styles['table-wrapper']}>
        {/* TABLE HEADERS */}
        <thead>
          <tr className={styles['table-header-row']}>
            {/* SELECT ALL */}
            <th style={{ width: '30px' }}>
              <input
                type='checkbox'
                className={styles['checkbox']}
                onChange={(e) => handleSelectionAll(e.target.checked)}
              />
            </th>
            {rows.map((column) => (
              <th key={column.key ?? column.dataKey}>
                {column.label ?? column.dataKey}
              </th>
            ))}
            {actionButtons && actionButtons?.length > 0 && (
              <th style={{ width: '30px' }}>Actions</th>
            )}
          </tr>
        </thead>
        {/* TABLE DATA */}
        <tbody>
          {data.length > 0 &&
            data.map((row, index) => (
              <tr
                className={styles['table-data-row']}
                key={index}
                onClick={(e) => {
                  if (onRowClick) {
                    e.stopPropagation();
                    onRowClick(row, index);
                  }
                }}
              >
                <td style={{ width: '30px' }}>
                  <input
                    type='checkbox'
                    className={styles['checkbox']}
                    checked={selectedRows[index]}
                    onChange={(e) => handleCellSelection(index, e)}
                  />
                </td>
                {rows.map((cell) => renderCell(cell, row))}
                {actionButtons && (
                  <div className={styles['action-btns-container']}>
                    {actionButtons?.map((item) => (
                      <td key={item.label}>
                        <button
                          disabled={
                            item?.disabled ? item?.disabled(row, index) : false
                          }
                          onClick={() => {
                            item.onClick(row, index);
                          }}
                          className={`${styles[`action-btn`]} ${
                            styles[`${item.variant}`]
                          }`}
                        >
                          {item.icon}
                          {item.label}
                        </button>
                      </td>
                    ))}
                  </div>
                )}
              </tr>
            ))}
        </tbody>
      </table>
      {data.length === 0 && (
        <div className={styles['no-data-available']}>No Data Available :(</div>
      )}
    </div>
  );
};

export default Table;
