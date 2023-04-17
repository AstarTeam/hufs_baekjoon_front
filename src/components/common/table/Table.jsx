import React from "react";
import { useTable } from "react-table";
import styles from "./table.module.css";

function Table({ dataList, columnList }) {
  const data = React.useMemo(() => dataList, [dataList]);
  const columns = React.useMemo(() => columnList, [columnList]);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <table {...getTableProps()} className={styles.table}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()} className={styles.th}>
                {column.render("Header")}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()} className={styles.tr}>
              {row.cells.map(cell => {
                return (
                  <td {...cell.getCellProps()} className={styles.td}>
                    {cell.render("Cell")}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Table;
