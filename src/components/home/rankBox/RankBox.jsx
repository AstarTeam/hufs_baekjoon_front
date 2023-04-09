import React from "react";
import styles from "./rankbox.module.css";

function RankBox() {
  const dummyData = {
    hufsRank: 67,
    hufsTotalSolved: 4691,
    hufsWeekSolved: 15,
    frontName: "펍지",
    frontTotalSolved: 4714,
    frontWeekSolved: 23,
    behindName: "단국대학교",
    behindTotalSolved: 4539,
    behindWeekSolved: 30,
  };

  return (
    <div className={styles.container}>
      <article className={`${styles.box} ${styles.first}`}>
        <h3 className={styles.title}>
          현재 한국외국어대학교 순위는 <strong>{dummyData.hufsRank}</strong>
          &nbsp;위 입니다.
        </h3>
        <div className={styles.text}>
          <p>
            66위인 <span>펍지</span>를 따라잡기까지&nbsp;
            <strong>
              {dummyData.frontTotalSolved - dummyData.hufsTotalSolved}
            </strong>
            &nbsp;문제가 남았고,
          </p>
          <p>
            68위인 <span>단국대학교</span>에게 따라잡히기 까지&nbsp;
            <strong>
              {dummyData.hufsTotalSolved - dummyData.behindTotalSolved}
            </strong>
            &nbsp;문제가 남았습니다.
          </p>
        </div>
        <button className={styles.button}>전체 순위 보기</button>
      </article>
      <article className={`${styles.box} ${styles.second}`}>
        <h3 className={styles.title}>
          이번주 한국외국어대학교가 푼 문제는&nbsp;
          <strong>{dummyData.hufsWeekSolved}</strong>&nbsp;문제 입니다.
        </h3>
        <div className={styles.text}>
          <p>
            {dummyData.hufsRank - 1}위인 <span>펍지</span>는 이번주 총&nbsp;
            <strong>{dummyData.frontWeekSolved}</strong>&nbsp;문제를 풀었고,
          </p>
          <p>
            {dummyData.hufsRank + 1}위인 <span>단국대학교</span>는 이번주
            총&nbsp;
            <strong>{dummyData.behindWeekSolved}</strong>&nbsp; 문제를
            풀었습니다.
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
