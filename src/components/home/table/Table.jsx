import React from "react";
import { useTable } from "react-table";
import styles from "./table.module.css";
import silver1 from "../../../assets/icons/level/silver1.svg";
import Button from "../button/Button";

function Table() {
  const data = React.useMemo(() => dummyData, []);
  const columns = React.useMemo(
    () => [
      { Header: "문제 번호", accessor: "id" },
      { Header: "문제 제목", accessor: "title" },
      {
        Header: "난이도",
        accessor: "difficulty",
        Cell: () => <img src={silver1} alt="silver1" className={styles.icon} />,
      },
      {
        Header: "나의 도전 상태",
        accessor: "myState",
        Cell: () => <Button label="아직 안품" color="gray" />,
      },
      { Header: "외대 도전자 수", accessor: "challengerNum" },
    ],
    []
  );

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

const dummyData = [
  {
    id: 1000,
    title: "A+B",
    difficulty: "silver1",
    myState: false,
    challengerNum: 123,
  },
  {
    id: 1001,
    title: "A+B",
    difficulty: "silver1",
    myState: false,
    challengerNum: 123,
  },
  {
    id: 1002,
    title: "A+B",
    difficulty: "silver1",
    myState: false,
    challengerNum: 123,
  },
];
