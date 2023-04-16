import React from "react";
import Table from "../table/Table";
import PaginationBtn from "../../common/paginationBtn/PaginationBtn";
import SelectBox from "../../common/selectBox/SelectBox";
import styles from "./problemList.module.css";

function ProblemList() {
  const selectList = [
    "도전중인 문제",
    "안푼 문제",
    "쉬운 순",
    "어려운 순",
    "도전자 많은 순",
    "도전자 적은 순",
  ];

  return (
    <div className={styles.container}>
      <div className={styles["title-wrapper"]}>
        <h3 className={styles["table-title"]}>한국외대 미해결 문제</h3>
        <SelectBox list={selectList} />
      </div>
      <div className={styles["table-wrapper"]}>
        <Table />
      </div>
      <PaginationBtn />
    </div>
  );
}

export default ProblemList;
