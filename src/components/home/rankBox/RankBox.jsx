import React from "react";
import styles from "./rankbox.module.css";

function RankBox({ rank }) {
  const {
    hufs_rank,
    hufs_now_solved,
    hufs_pre_solved,
    high_rank_name,
    high_rank_now_solved,
    high_rank_pre_solved,
    low_rank_name,
    low_rank_now_solved,
    low_rank_pre_solved,
  } = rank;

  return (
    <div>
      <article className={`${styles.box} ${styles.first}`}>
        <h3 className={styles.title}>
          현재 한국외국어대학교 순위는 <strong>{hufs_rank}</strong>
          &nbsp;위 입니다.
        </h3>
        <div className={styles.text}>
          <p>
            {hufs_rank - 1}위인 <span>{high_rank_name}</span>를
            따라잡기까지&nbsp;
            <strong>{high_rank_now_solved - hufs_now_solved}</strong>
            &nbsp;문제가 남았고,
          </p>
          <p>
            {hufs_rank + 1}위인 <span>{low_rank_name}</span>에게 따라잡히기
            까지&nbsp;
            <strong>{hufs_now_solved - low_rank_now_solved}</strong>
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
          {/* <strong>{hufs_now_solved - hufs_pre_solved}</strong>&nbsp;문제 입니다. */}
          <strong>11</strong>&nbsp;문제 입니다.
        </h3>
        <div className={styles.text}>
          <p>
            {hufs_rank - 1}위인 <span>{high_rank_name}</span>는 이번주 총&nbsp;
            {/* <strong>{high_rank_now_solved - high_rank_pre_solved}</strong>
            &nbsp;문제를 풀었고, */}
            <strong>32</strong>&nbsp;문제를 풀었고,
          </p>
          <p>
            {hufs_rank + 1}위인 <span>{low_rank_name}</span>는 이번주 총&nbsp;
            {/* <strong>{low_rank_now_solved - low_rank_pre_solved}</strong>&nbsp;
            문제를 풀었습니다. */}
            <strong>9</strong>&nbsp; 문제를 풀었습니다.
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
