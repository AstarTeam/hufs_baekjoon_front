import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getRankList } from "../../../api/ranking";
import Table from "../../common/table/Table";
import hufsRank from "../../../assets/icons/hufs_rank.svg";
import Loading from "../../common/loading/Loading";
import styles from "./personRankList.module.css";

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
        <span>로그인</span> 및 <span>백준 인증</span>을 완료하여 명예의 전당에
        내 이름을 남겨보세요 :)
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
