import React, { useEffect, useRef, useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useAuthContext } from "../../../context/authContext";
import {
  getProblemList,
  getSearchProblem,
  postChallenge,
} from "../../../api/home";
import Table from "../../common/table/Table";
import PaginationBtn from "../../common/paginationBtn/PaginationBtn";
import SelectBox from "../../common/selectBox/SelectBox";
import Button from "../../home/button/Button";
import LevelIcon from "../levelIcon/LevelIcon";
import Loading from "../../common/loading/Loading";
import styles from "./problemList.module.css";
import SearchInput from "../../common/searchInput/SearchInput";

function ProblemList() {
  const inputRef = useRef();
  const problemListRef = useRef(null);

  const { userData } = useAuthContext();

  const [page, setPage] = useState(1);
  const [selected, setSelected] = useState(selectList[0]); //정렬 방법
  const [searchNum, setSearchNum] = useState(null);

  const queryKeys = !searchNum
    ? ["problems", page, selected.type]
    : ["problems", page, selected.type, searchNum];

  const {
    isLoading,
    error,
    data: problemList,
  } = useQuery(
    queryKeys,
    () => {
      if (searchNum) {
        return getSearchProblem(searchNum, userData?.access_token);
      } else {
        return getProblemList(page, selected.type, userData?.access_token);
      }
    },
    {
      staleTime: 1000 * 60 * 5,
    }
  );

  const totalPage = Math.floor(problemList?.total / 15);

  //prefetch
  const queryClient = useQueryClient();
  useEffect(() => {
    if (page < totalPage) {
      let nextPage = page + 1;
      queryClient.prefetchQuery(["problems", nextPage, selected.type], () =>
        getProblemList(nextPage, selected.type, userData?.access_token)
      );
    }
  }, [totalPage, page, queryClient, selected.type, userData?.access_token]);

  //페이지 버튼 클릭시 리스트 처음으로 스크롤
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
    setSearchNum(undefined);
    setPage(1);
  };

  //문제 번호 검색
  const handleSearchSubmit = async e => {
    e.preventDefault();
    setSearchNum(prev => inputRef.current.value);
  };

  if (isLoading) return <Loading />;
  if (error) return <p>{error}</p>;

  return (
    <div className={styles.container} ref={problemListRef}>
      <div className={styles["title-wrapper"]}>
        <h3 className={styles["table-title"]}>한국외대 미해결 문제</h3>
        <div className={styles["search-wrapper"]}>
          <SearchInput onSubmit={handleSearchSubmit} inputRef={inputRef} />
          <SelectBox
            list={
              !userData.access_token ? selectList : selectList_authenticated
            }
            onSelectChange={selectChangeHandler}
            selected={selected}
          />
        </div>
      </div>
      <div className={styles["table-wrapper"]}>
        <Table
          dataList={problemList.problem_list}
          columnList={columnList}
          type="problemList"
        />
      </div>
      <PaginationBtn
        page={page}
        limit={15}
        totalNum={problemList.total}
        onPageChange={pageChangeHandler}
      />
    </div>
  );
}

export default ProblemList;

const selectList = [
  { type: "unsolved-by-HUFS", label: "정렬 방식" },
  { type: "problem-list-ordered-by-lev", label: "쉬운 순" },
  { type: "problem-list-ordered-by-lev-desc", label: "어려운 순" },
  { type: "problem-list-ordered-by-challengers-desc", label: "도전자 많은 순" },
  { type: "problem-list-ordered-by-challengers", label: "도전자 적은 순" },
];

const selectList_authenticated = [
  ...selectList,
  { type: "problem-list-challenging", label: "도전중인 문제" },
  { type: "problem-list-not-challenged", label: "안푼 문제" },
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
    accessor: "is_user_challenged",
    Cell: ({ row, cell: { value } }) => (
      <Button
        label={`${value ? "도전 중" : "아직 안품"}`}
        color={`${value ? "blue" : "gray"}`}
        problemNum={row.original.problem_num}
        state={value}
        onClick={postChallenge}
      />
    ),
  },
  {
    Header: "외대 도전자 수",
    accessor: "problem_challengers",
    Cell: ({ cell: { value } }) => (value ? value : 0),
  },
];
