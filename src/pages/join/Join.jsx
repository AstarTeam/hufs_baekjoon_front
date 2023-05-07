import React from "react";
import styles from "./join.module.css";

function Join() {
  return (
    <div className={styles["join-wrapper"]}>
      <div className={styles["title-form-container"]}>
        <p className={styles.title}>JOIN</p>
        <p className={styles.subtitle}>
          더 다양한 서비스 이용을 위해 회원가입을 진행해 주세요.
        </p>
        <form className={styles["form-container"]}>
          <p className={styles.label}>아이디</p>
          <input className={`${styles["form-input"]} ${styles.id}`} />
          <button className={styles["form-check-button"]}>중복확인</button>
          <p className={styles.label}>닉네임</p>
          <input className={styles["form-input"]} />
          <p className={styles.label}>비밀번호</p>
          <input className={styles["form-input"]} />
          <p className={styles.label}>비밀번호 확인</p>
          <input className={styles["form-input"]} />
          <p className={styles.label}>이메일</p>
          <input className={`${styles["form-input"]} ${styles.email}`} />
          <button className={styles["form-check-button"]}>메일인증</button>
          <button className={styles["form-button"]} type="submit">
            가입하기
          </button>
        </form>
      </div>
    </div>
  );
}

export default Join;
