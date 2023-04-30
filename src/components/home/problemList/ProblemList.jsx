import React, { useState, useEffect } from "react";
import Table from "../../common/table/Table";
import PaginationBtn from "../../common/paginationBtn/PaginationBtn";
import SelectBox from "../../common/selectBox/SelectBox";
import styles from "./problemList.module.css";
import silver1 from "../../../assets/icons/level/silver1.svg";
import Button from "../../home/button/Button";
import { sortDoingNow, sortNotStarted } from "../../../utils/problemSort";

function ProblemList() {
  const selectList = [
    { id: 0, label: "정렬 방식" },
    { id: 1, label: "도전중인 문제" },
    { id: 2, label: "안푼 문제" },
    { id: 3, label: "쉬운 순" },
    { id: 4, label: "어려운 순" },
    { id: 5, label: "도전자 많은 순" },
    { id: 6, label: "도전자 적은 순" },
  ];

  const [problems, setProblems] = useState(dummyData); //전체 문제 데이타 - api를 통해 받아와야 함
  const [sortedProblems, setSortedProblems] = useState(dummyData); //정렬된 문제 데이타

  const [page, setPage] = useState(1);
  const [selected, setSelected] = useState(selectList[0]);
  const limit = 10;
  const offset = (page - 1) * limit; //시작점과 끝점을 구하는 offset

  const pageChangeHandler = page => setPage(page);
  const postDataHandler = data => {
    if (data) {
      let result = data.slice(offset, offset + limit);
      return result;
    }
  };
  const sortDataHandler = problems => {
    let sorted = problems;
    if (selected.id === 1) sorted = sortDoingNow(problems);
    else if (selected.id === 2) sorted = sortNotStarted(problems);
    setSortedProblems(sorted);
    setPage(1);
  };
  const selectChangeHandler = item => setSelected(item);

  useEffect(() => {
    sortDataHandler(problems);
  }, [selected.id]);

  return (
    <div className={styles.container}>
      <div className={styles["title-wrapper"]}>
        <h3 className={styles["table-title"]}>한국외대 미해결 문제</h3>
        <SelectBox
          list={selectList}
          onSelectChange={selectChangeHandler}
          selected={selected}
        />
      </div>
      <div className={styles["table-wrapper"]}>
        <Table
          dataList={postDataHandler(sortedProblems)}
          columnList={columnList}
        />
      </div>
      <PaginationBtn
        page={page}
        limit={limit}
        totalNum={sortedProblems.length}
        onPageChange={pageChangeHandler}
      />
    </div>
  );
}

export default ProblemList;

const columnList = [
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
    Cell: ({ cell: { value } }) => (
      <Button
        label={`${value ? "도전 중" : "아직 안품"}`}
        color={`${value ? "blue" : "gray"}`}
        value={value}
      />
    ),
  },
  { Header: "외대 도전자 수", accessor: "challengerNum" },
];

const dummyData = [
  {
    id: 1000,
    title: "A+B",
    difficulty: "silver1",
    myState: true,
    challengerNum: 1,
  },
  {
    id: 1001,
    title: "A+B",
    difficulty: "silver2",
    myState: false,
    challengerNum: 12,
  },
  {
    id: 1002,
    title: "A+B",
    difficulty: "silver5",
    myState: false,
    challengerNum: 3,
  },
  {
    id: 1003,
    title: "A+B",
    difficulty: "silver4",
    myState: true,
    challengerNum: 1,
  },
  {
    id: 1004,
    title: "A+B",
    difficulty: "silver2",
    myState: true,
    challengerNum: 13,
  },
  {
    id: 1005,
    title: "A+B",
    difficulty: "silver4",
    myState: false,
    challengerNum: 12,
  },
  {
    id: 1006,
    title: "A+B",
    difficulty: "silver1",
    myState: true,
    challengerNum: 23,
  },
  {
    id: 1007,
    title: "A+B",
    difficulty: "silver1",
    myState: false,
    challengerNum: 3,
  },
  {
    id: 1008,
    title: "A+B",
    difficulty: "silver1",
    myState: true,
    challengerNum: 3,
  },
  {
    id: 1009,
    title: "A+B",
    difficulty: "silver1",
    myState: false,
    challengerNum: 12,
  },
  {
    id: 1010,
    title: "A+B",
    difficulty: "silver1",
    myState: false,
    challengerNum: 13,
  },
  {
    id: 1011,
    title: "A+B",
    difficulty: "silver1",
    myState: false,
    challengerNum: 23,
  },
  {
    id: 1012,
    title: "A+B",
    difficulty: "silver1",
    myState: false,
    challengerNum: 12,
  },
  {
    id: 1013,
    title: "A+B",
    difficulty: "silver1",
    myState: false,
    challengerNum: 123,
  },
  {
    id: 1014,
    title: "A+B",
    difficulty: "silver1",
    myState: false,
    challengerNum: 123,
  },
  {
    id: 1015,
    title: "A+B",
    difficulty: "silver1",
    myState: false,
    challengerNum: 123,
  },
  {
    id: 1016,
    title: "A+B",
    difficulty: "silver1",
    myState: false,
    challengerNum: 123,
  },
  {
    id: 1017,
    title: "A+B",
    difficulty: "silver1",
    myState: false,
    challengerNum: 123,
  },
  {
    id: 1018,
    title: "A+B",
    difficulty: "silver1",
    myState: false,
    challengerNum: 123,
  },
  {
    id: 1019,
    title: "A+B",
    difficulty: "silver1",
    myState: false,
    challengerNum: 123,
  },
  {
    id: 1020,
    title: "A+B",
    difficulty: "silver1",
    myState: false,
    challengerNum: 123,
  },
  {
    id: 1021,
    title: "A+B",
    difficulty: "silver1",
    myState: false,
    challengerNum: 123,
  },
  {
    id: 1022,
    title: "A+B",
    difficulty: "silver1",
    myState: false,
    challengerNum: 123,
  },
  {
    id: 1023,
    title: "A+B",
    difficulty: "silver1",
    myState: false,
    challengerNum: 123,
  },
  {
    id: 1024,
    title: "A+B",
    difficulty: "silver1",
    myState: false,
    challengerNum: 123,
  },
  {
    id: 1025,
    title: "A+B",
    difficulty: "silver1",
    myState: false,
    challengerNum: 123,
  },
];
