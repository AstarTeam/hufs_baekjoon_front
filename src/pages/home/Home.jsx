import React from "react";
import Banner from "../../components/home/banner/Banner";
import RankBox from "../../components/home/rankBox/RankBox";
import Table from "../../components/home/table/Table";
import styles from "./home.module.css";
import SelectBox from "../../components/common/selectBox/SelectBox";

function Home() {
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
      <h2 className={`${styles.title} ${styles["max-width"]}`}>
        외대 백준 순위 현황
      </h2>
      <Banner />
      <div className={`${styles["max-width"]}`}>
        <div className={styles["rank-container"]}>
          <RankBox />
        </div>
        <div className={styles["table-wrapper"]}>
          <div>
            <h3 className={styles["table-title"]}>한국외대 미해결 문제</h3>
            <SelectBox list={selectList} />
          </div>
          <Table />
        </div>
      </div>
    </div>
  );
}

export default Home;
