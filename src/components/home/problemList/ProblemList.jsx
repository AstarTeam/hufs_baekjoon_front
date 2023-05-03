import React, { useState } from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
// import { sortDoingNow, sortNotStarted } from "../../../utils/problemSort";
import Table from "../../common/table/Table";
import PaginationBtn from "../../common/paginationBtn/PaginationBtn";
import SelectBox from "../../common/selectBox/SelectBox";
import Button from "../../home/button/Button";
import styles from "./problemList.module.css";
// import LevelIcon from "../levelIcon/LevelIcon";

function ProblemList() {
  const {
    isLoading,
    error,
    data: problems,
  } = useQuery(
    ["problems"],
    async () => {
      console.log("fetching...");
      return axios.get("/data/problems.json").then(res => res.data.problems);
    },
    { staleTime: 1000 * 60 * 5 }
  );

  // const [sortedProblems, setSortedProblems] = useState([]); //정렬된 문제 데이타

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
  // const sortDataHandler = problems => {
  //   let sorted = problems;
  //   if (selected.id === 1) sorted = sortDoingNow(problems);
  //   else if (selected.id === 2) sorted = sortNotStarted(problems);
  //   setSortedProblems(sorted);
  //   setPage(1);
  // };
  const selectChangeHandler = item => setSelected(item);

  // useEffect(() => {
  //   sortDataHandler(problems);
  // }, [selected.id]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

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
        <Table dataList={postDataHandler(problems)} columnList={columnList} />
      </div>
      <PaginationBtn
        page={page}
        limit={limit}
        totalNum={problems.length}
        onPageChange={pageChangeHandler}
      />
    </div>
  );
}

export default ProblemList;

const selectList = [
  { id: 0, label: "정렬 방식" },
  { id: 1, label: "도전중인 문제" },
  { id: 2, label: "안푼 문제" },
  { id: 3, label: "쉬운 순" },
  { id: 4, label: "어려운 순" },
  { id: 5, label: "도전자 많은 순" },
  { id: 6, label: "도전자 적은 순" },
];

const columnList = [
  { Header: "문제 번호", accessor: "id" },
  { Header: "문제 제목", accessor: "title" },
  {
    Header: "난이도",
    accessor: "difficulty",
    // Cell: ({ cell: { value } }) => <LevelIcon level={value} />,
    Cell: ({ cell: { value } }) => <div>{value}</div>,
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
  {
    Header: "외대 도전자 수",
    accessor: "challengerNum",
    Cell: () => 0,
  },
];
