import React from "react";
import Banner from "../../components/home/banner/Banner";
import RankBox from "../../components/home/rankBox/RankBox";
import ProblemList from "../../components/home/problemList/ProblemList";
import styles from "./home.module.css";

function Home() {
  return (
    <div className={styles.container}>
      <h2 className={`${styles.title} ${styles["max-width"]}`}>
        외대 백준 순위 현황
      </h2>
      <Banner />
      <div className={`${styles["contents-wrapper"]} ${styles["max-width"]}`}>
        <RankBox />
        <ProblemList />
      </div>
    </div>
  );
}

export default Home;
