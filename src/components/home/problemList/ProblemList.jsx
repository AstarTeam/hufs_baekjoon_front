import React, { useState } from "react";
import Table from "../../common/table/Table";
import PaginationBtn from "../../common/paginationBtn/PaginationBtn";
import SelectBox from "../../common/selectBox/SelectBox";
import styles from "./problemList.module.css";
import silver1 from "../../../assets/icons/level/silver1.svg";
import Button from "../../home/button/Button";

function ProblemList() {
  const selectList = [
    "도전중인 문제",
    "안푼 문제",
    "쉬운 순",
    "어려운 순",
    "도전자 많은 순",
    "도전자 적은 순",
  ];

  const [page, setPage] = useState(1);
  const limit = 10;
  const offset = (page - 1) * limit; //시작점과 끝점을 구하는 offset

  const pageChangeHandler = page => setPage(page);
  const postDataHandler = data => {
    if (data) {
      let result = data.slice(offset, offset + limit);
      return result;
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles["title-wrapper"]}>
        <h3 className={styles["table-title"]}>한국외대 미해결 문제</h3>
        <SelectBox list={selectList} />
      </div>
      <div className={styles["table-wrapper"]}>
        <Table dataList={postDataHandler(dummyData)} columnList={columnList} />
      </div>
      <PaginationBtn
        page={page}
        limit={limit}
        totalNum={dummyData.length}
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
    Cell: () => <Button label="아직 안품" color="gray" />,
  },
  { Header: "외대 도전자 수", accessor: "challengerNum" },
];

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
  {
    id: 1002,
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
  {
    id: 1002,
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
  {
    id: 1002,
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
  {
    id: 1002,
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
  {
    id: 1002,
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
  {
    id: 1002,
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
  {
    id: 1002,
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
  {
    id: 1002,
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
  {
    id: 1002,
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
  {
    id: 1002,
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
  {
    id: 1002,
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
  {
    id: 1002,
    title: "A+B",
    difficulty: "silver1",
    myState: false,
    challengerNum: 123,
  },
];
