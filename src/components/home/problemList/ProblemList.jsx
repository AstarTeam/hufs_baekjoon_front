import React, { useEffect, useRef, useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import Table from "../../common/table/Table";
import PaginationBtn from "../../common/paginationBtn/PaginationBtn";
import SelectBox from "../../common/selectBox/SelectBox";
import Button from "../../home/button/Button";
import LevelIcon from "../levelIcon/LevelIcon";
import styles from "./problemList.module.css";
import Loading from "../../common/loading/Loading";

async function getProblemList(page, type, num) {
  const url = `/data/problems${page - 1}.json`; //sampleUrl
  // const url = `/${type}/?page=${page - 1}&size=15`;
  const res = await axios(url);
  return res.data;
}

function ProblemList() {
  const [page, setPage] = useState(1);
  const [selected, setSelected] = useState(selectList[0]); //정렬 방법

  const { isLoading, error, data } = useQuery(
    ["problems", page, selected.type],
    () => getProblemList(page, selected.type, 1),
    {
      staleTime: 1000 * 60 * 5,
    }
  );
  const totalPage = Math.floor(data?.total / 15);

  //prefetch
  const queryClient = useQueryClient();
  useEffect(() => {
    if (page < totalPage) {
      let nextPage = page + 1;
      queryClient.prefetchQuery(["problems", nextPage, selected.type], () =>
        getProblemList(nextPage, selected.type, nextPage)
      );
    }
  }, [totalPage, page, queryClient, selected.type]);

  //페이지 버튼 클릭시 리스트 처음으로 스크롤
  const problemListRef = useRef(null);
  const scrollToList = () =>
    problemListRef.current.scrollIntoView({
      block: "start",
    });

  const pageChangeHandler = page => {
    scrollToList();
    setPage(page);
  };

  const selectChangeHandler = item => {
    setSelected(item);
    setPage(1);
  };

  if (isLoading) return <Loading />;
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
        <Table
          dataList={data.problem_list}
          columnList={columnList}
          type="problemList"
        />
      </div>
      <PaginationBtn
        page={page}
        limit={15}
        totalNum={data.total}
        onPageChange={pageChangeHandler}
      />
    </div>
  );
}

export default ProblemList;

const selectList = [
  { type: "unsolved_by_HUFS", label: "정렬 방식" },
  { type: "try", label: "도전중인 문제" },
  { type: "not_try", label: "안푼 문제" },
  { type: "problem_list_ordered_by_lev", label: "쉬운 순" },
  { type: "problem_list_ordered_by_lev_desc", label: "어려운 순" },
  { type: "problem_list_ordered_by_challengers_desc", label: "도전자 많은 순" },
  { type: "problem_list_ordered_by_challengers", label: "도전자 적은 순" },
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
