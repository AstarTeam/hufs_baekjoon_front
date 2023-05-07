import React from "react";
import styles from "./join.module.css";

function Join() {
  return (
    <div className={styles["join-wrapper"]}>
      <form className={styles["form-container"]}>
        <p className={styles.title}>JOIN</p>
        <p className={styles.subtitle}>
          더 다양한 서비스 이용을 위해 회원가입을 진행해 주세요.
        </p>
        <p className={styles.label}>아이디</p>
        <input className={styles["form-input"]} placeholder="아이디" />
        <input className={styles["form-input"]} placeholder="비밀번호" />
        <button className={styles["form-button"]} type="submit">
          로그인
        </button>
      </form>
    </div>
  );
}

export default Join;
