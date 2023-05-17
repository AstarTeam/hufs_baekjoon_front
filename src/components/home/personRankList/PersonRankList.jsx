import React from "react";
import hufsRank from "../../../assets/icons/hufs_rank.svg";
import Table from "../../common/table/Table";
import styles from "./personRankList.module.css";

function PersonRankList() {
  return (
    <div className={styles.container}>
      <img src={hufsRank} alt="HUFS 명예의 전당" />
      <p className={styles.describe}>
        등수를 높이기 위해 한문제 더 풀어보세요 :)
      </p>
      <div className={styles["table-wrapper"]}>
        <Table
          dataList={dummyData1}
          columnList={columnList}
          type="personRank1"
        />
        <Table
          dataList={dummyData2}
          columnList={columnList}
          type="personRank2"
        />
      </div>
    </div>
  );
}

export default PersonRankList;

const dummyData1 = [
  { rank: 1, nick_name: "내가 백준 최고다", num: 4 },
  { rank: 2, nick_name: "외대 최강", num: 2 },
  { rank: 3, nick_name: "노어 23학번", num: 2 },
  { rank: 4, nick_name: "하하", num: 1 },
  { rank: 5, nick_name: "안녕하세요", num: 1 },
];
const dummyData2 = [
  { rank: 6, nick_name: "백준 왕초보", num: 1 },
  { rank: 7, nick_name: "미컴 12", num: 1 },
  { rank: 8, nick_name: "외대짱", num: 1 },
  { rank: 9, nick_name: "여름", num: 1 },
  { rank: 10, nick_name: "안녕", num: 1 },
];

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
  { Header: "닉네임", accessor: "nick_name" },
  { Header: "푼 문제 수", accessor: "num" },
];
