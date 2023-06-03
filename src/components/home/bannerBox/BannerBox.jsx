import React from "react";
import styles from "./bannerBox.module.css";

function BannerBox({ main, rank, name, correct }) {
  return (
    <div className={`${styles.container} ${main && styles.main}`}>
      <p className={styles.rank}>
        <span>{rank}</span>위
      </p>
      <strong className={`${styles.name} txt-ellipsie`}>{name}</strong>
      <p className={styles.correct}>맞은 문제 수 : {correct}</p>
    </div>
  );
}

export default BannerBox;
