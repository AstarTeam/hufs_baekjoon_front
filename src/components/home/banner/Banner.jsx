import React from "react";
import BannerBox from "../bannerBox/BannerBox";
import styles from "./banner.module.css";

function Banner() {
  return (
    <section className={styles.banner}>
      <div className={styles.container}>
        <BannerBox rank="66" name="펍지" correct="4714" />
        <BannerBox rank="67" name="한국외국어대" correct="4691" main={true} />
        <BannerBox rank="68" name="단국대학교" correct="4539" />
      </div>
    </section>
  );
}

export default Banner;
