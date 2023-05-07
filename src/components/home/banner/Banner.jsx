import React from "react";
import BannerBox from "../bannerBox/BannerBox";
import styles from "./banner.module.css";

function Banner({ rank }) {
  const {
    hufs_rank,
    hufs_now_solved,
    high_rank_name,
    high_rank_now_solved,
    low_rank_name,
    low_rank_now_solved,
  } = rank;

  return (
    <section className={styles.banner}>
      <div className={styles.container}>
        <BannerBox
          rank={hufs_rank - 1}
          name={high_rank_name}
          correct={high_rank_now_solved}
        />
        <BannerBox
          rank={hufs_rank}
          name="한국외국어대"
          correct={hufs_now_solved}
          main={true}
        />
        <BannerBox
          rank={hufs_rank + 1}
          name={low_rank_name}
          correct={low_rank_now_solved}
        />
      </div>
    </section>
  );
}

export default Banner;
