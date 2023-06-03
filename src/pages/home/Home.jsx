import React from "react";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Banner from "../../components/home/banner/Banner";
import RankBox from "../../components/home/rankBox/RankBox";
import ProblemList from "../../components/home/problemList/ProblemList";
import styles from "./home.module.css";
import Loading from "../../components/common/loading/Loading";

async function getRankData() {
  const res = await axios(`/data/rank.json`);
  return res.data.rank;
}

function Home() {
  const {
    isLoading,
    error,
    data: rank,
  } = useQuery(["rank"], getRankData, { staleTime: 1000 * 60 * 5 });

  if (isLoading) return <Loading />;
  if (error) return <p>{error}</p>;

  return (
    <main className={styles.container}>
      <h2 className={`${styles.title} ${styles["max-width"]}`}>
        외대 백준 순위 현황
      </h2>
      <Banner rank={rank} />
      <div className={`${styles["contents-wrapper"]} ${styles["max-width"]}`}>
        <RankBox rank={rank} />
        <ProblemList />
      </div>
    </main>
  );
}

export default Home;
