import React from "react";
import styles from "./rankbox.module.css";

function RankBox({ rank }) {
  const {
    hufsRank,
    hufsTotalSolved,
    hufsWeekSolved,
    frontName,
    frontTotalSolved,
    frontWeekSolved,
    behindName,
    behindTotalSolved,
    behindWeekSolved,
  } = rank;

  return (
    <div className={styles.container}>
      <article className={`${styles.box} ${styles.first}`}>
        <h3 className={styles.title}>
          현재 한국외국어대학교 순위는 <strong>{hufsRank}</strong>
          &nbsp;위 입니다.
        </h3>
        <div className={styles.text}>
          <p>
            {hufsRank - 1}위인 <span>{frontName}</span>를 따라잡기까지&nbsp;
            <strong>{frontTotalSolved - hufsTotalSolved}</strong>
            &nbsp;문제가 남았고,
          </p>
          <p>
            {hufsRank + 1}위인 <span>{behindName}</span>에게 따라잡히기
            까지&nbsp;
            <strong>{hufsTotalSolved - behindTotalSolved}</strong>
            &nbsp;문제가 남았습니다.
          </p>
        </div>
        <a
          href="https://www.acmicpc.net/ranklist/school"
          target="_blank"
          rel="noreferrer"
        >
          <button className={styles.button}>전체 순위 보기</button>
        </a>
      </article>
      <article className={`${styles.box} ${styles.second}`}>
        <h3 className={styles.title}>
          이번주 한국외국어대학교가 푼 문제는&nbsp;
          <strong>{hufsWeekSolved}</strong>&nbsp;문제 입니다.
        </h3>
        <div className={styles.text}>
          <p>
            {hufsRank - 1}위인 <span>{frontName}</span>는 이번주 총&nbsp;
            <strong>{frontWeekSolved}</strong>&nbsp;문제를 풀었고,
          </p>
          <p>
            {hufsRank + 1}위인 <span>{behindName}</span>는 이번주 총&nbsp;
            <strong>{behindWeekSolved}</strong>&nbsp; 문제를 풀었습니다.
          </p>
        </div>
        <p className={styles.text}>
          한국외국어대학교의 백준 랭킹 상승을 위해 한문제 더 풀어주세요!
        </p>
      </article>
    </div>
  );
}

export default RankBox;
