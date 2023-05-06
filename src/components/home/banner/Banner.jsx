import React from "react";
import BannerBox from "../bannerBox/BannerBox";
import styles from "./banner.module.css";

function Banner({ rank }) {
  const {
    hufsRank,
    hufsTotalSolved,
    frontName,
    frontTotalSolved,
    behindName,
    behindTotalSolved,
  } = rank;

  return (
    <section className={styles.banner}>
      <div className={styles.container}>
        <BannerBox
          rank={hufsRank - 1}
          name={frontName}
          correct={frontTotalSolved}
        />
        <BannerBox
          rank={hufsRank}
          name="한국외국어대"
          correct={hufsTotalSolved}
          main={true}
        />
        <BannerBox
          rank={hufsRank + 1}
          name={behindName}
          correct={behindTotalSolved}
        />
      </div>
    </section>
  );
}

export default Banner;
