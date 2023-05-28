import React from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Table from "../../common/table/Table";
import Loading from "../../common/loading/Loading";
import hufsRank from "../../../assets/icons/hufs_rank.svg";
import styles from "./personRankList.module.css";

async function getRankList() {
  const url = "/fame";
  const res = await axios(url);

  const sortedData = res.data.userList
    .sort((a, b) => b.count - a.count)
    .map((item, index) => ({ ...item, rank: index + 1 }));
  return sortedData;
}

function PersonRankList() {
  const {
    isLoading,
    error,
    data: rankers,
  } = useQuery(["fame"], getRankList, {
    staleTime: 1000 * 60 * 5,
  });

  if (isLoading) return <Loading />;
  if (error) return <p>{error}</p>;

  return (
    <div className={styles.container}>
      <img src={hufsRank} alt="HUFS 명예의 전당" />
      <p className={styles.describe}>
        등수를 높이기 위해 한문제 더 풀어보세요 :)
      </p>
      <div className={styles["table-wrapper"]}>
        <Table
          dataList={rankers.slice(0, 5)}
          columnList={columnList}
          type="personRank1"
        />
        <Table
          dataList={rankers.slice(5)}
          columnList={columnList}
          type="personRank2"
        />
      </div>
    </div>
  );
}

export default PersonRankList;

const columnList = [
  {
    Header: "등수",
    accessor: "rank",
    Cell: ({ cell: { value } }) => (
      <span
        className={`${styles.rank} ${styles[`rank${value}`]}`}
      >{`#${value}`}</span>
    ),
  },
  { Header: "닉네임", accessor: "name" },
  { Header: "푼 문제 수", accessor: "count" },
];

// const dummyData1 = [
//   { rank: 1, name: "내가 백준 최고다", count: 4 },
//   { rank: 2, name: "외대 최강", count: 2 },
//   { rank: 3, name: "노어 23학번", count: 2 },
//   { rank: 4, name: "하하", count: 1 },
//   { rank: 5, name: "안녕하세요", count: 1 },
// ];
// const dummyData2 = [
//   { rank: 6, name: "백준 왕초보", count: 1 },
//   { rank: 7, name: "미컴 12", count: 1 },
//   { rank: 8, name: "외대짱", count: 1 },
//   { rank: 9, name: "여름", count: 1 },
//   { rank: 10, name: "안녕", count: 1 },
// ];
