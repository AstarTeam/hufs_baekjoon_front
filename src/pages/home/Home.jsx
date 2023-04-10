import React from "react";
import Banner from "../../components/home/banner/Banner";
import RankBox from "../../components/home/rankBox/RankBox";
import Table from "../../components/home/table/Table";
import styles from "./home.module.css";

function Home() {
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
            <p>선택 박스</p>
          </div>
          <Table />
        </div>
      </div>
    </div>
  );
}

export default Home;
