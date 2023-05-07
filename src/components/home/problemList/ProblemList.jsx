import React, { useRef, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Table from "../../common/table/Table";
import PaginationBtn from "../../common/paginationBtn/PaginationBtn";
import SelectBox from "../../common/selectBox/SelectBox";
import Button from "../../home/button/Button";
import LevelIcon from "../levelIcon/LevelIcon";
import styles from "./problemList.module.css";

async function getProblemList() {
  const res = await axios(`/data/problems.json`);
  return res.data.problem_list;
}

function ProblemList() {
  const {
    isLoading,
    error,
    data: problems,
  } = useQuery(["problems"], getProblemList, { staleTime: 1000 * 60 * 5 });

  //페이지 버튼 클릭시 리스트 처음으로 스크롤
  const problemListRef = useRef(null);
  const scrollToList = () =>
    problemListRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

  const [page, setPage] = useState(1);
  const [selected, setSelected] = useState(selectList[0]); //정렬 방법
  const limit = 15;
  const offset = (page - 1) * limit; //시작점과 끝점을 구하는 offset

  const pageChangeHandler = page => {
    setPage(page);
    scrollToList();
  };
  const postDataHandler = data => {
    if (data) {
      let result = data.slice(offset, offset + limit);
      return result;
    }
  };

  const selectChangeHandler = item => setSelected(item);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className={styles.container} ref={problemListRef}>
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
  { Header: "문제 번호", accessor: "problem_num" },
  {
    Header: "문제 제목",
    accessor: "problem_title",
    Cell: ({ row, cell: { value } }) => (
      <a href={row.original.problem_link} target="_blank" rel="noreferrer">
        {value}
      </a>
    ),
  },
  {
    Header: "난이도",
    accessor: "problem_lev",
    Cell: ({ cell: { value } }) => <LevelIcon level={value} />,
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
