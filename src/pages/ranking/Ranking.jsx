import React from "react";
import PersonRankList from "../../components/ranking/personRankList/PersonRankList";
import styles from "./ranking.module.css";

function Ranking() {
  return (
    <main className={styles.container}>
      <h2 className={styles.title}>개인 랭킹</h2>
      <div className={styles.wrapper}>
        <PersonRankList />
      </div>
    </main>
  );
}

export default Ranking;
