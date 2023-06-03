import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getRecommended } from "../../../api/home";
import Table from "../../common/table/Table";
import Loading from "../../common/loading/Loading";
import LevelIcon from "../levelIcon/LevelIcon";
import styles from "./recommend.module.css";

function Recommend() {
  // const {
  //   isLoading,
  //   error,
  //   data: recommend,
  // } = useQuery(["recommend"], getRecommended, {
  //   staleTime: 1000 * 60 * 5,
  // });

  // if (isLoading) return <Loading />;
  // if (error) return <p>{error}</p>;

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>오늘의 랜덤 추천 문제</h3>
      <div className={styles["table-wrapper"]}>
        <Table
          dataList={dummyData.slice(0, 3)}
          columnList={columnList}
          type="personRank1"
        />
        <Table
          dataList={dummyData.slice(3)}
          columnList={columnList}
          type="personRank2"
        />
      </div>
    </div>
  );
}

export default Recommend;

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
];

const dummyData = [
  {
    problem_num: 13578,
    problem_title: "Rouba-Monte",
    problem_lev: 12,
    problem_link: "https://www.acmicpc.net/problem/13578",
  },
  {
    problem_num: 18527,
    problem_title: "All Kill",
    problem_lev: 26,
    problem_link: "https://www.acmicpc.net/problem/18527",
  },
  {
    problem_num: 12801,
    problem_title: "중계 신호",
    problem_lev: 24,
    problem_link: "https://www.acmicpc.net/problem/12801",
  },
  {
    problem_num: 12951,
    problem_title: "경기 결과",
    problem_lev: 17,
    problem_link: "https://www.acmicpc.net/problem/12951",
  },
  {
    problem_num: 19843,
    problem_title: "수면 패턴",
    problem_lev: 5,
    problem_link: "https://www.acmicpc.net/problem/19843",
  },
  {
    problem_num: 16390,
    problem_title: "Sheba’s Amoebas",
    problem_lev: 9,
    problem_link: "https://www.acmicpc.net/problem/16390",
  },
];
