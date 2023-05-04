import React from "react";
import styles from "./login.module.css";

function LogIn() {
  return (
    <div className={styles["login-wrapper"]}>
      <form className={styles["form-container"]}>
        <p className={styles.title}>LOGIN</p>
        <p className={styles.subtitle}>아이디와 비밀번호를 입력해주세요.</p>
        <input className={styles["form-input"]} placeholder="아이디" />
        <input className={styles["form-input"]} placeholder="비밀번호" />
        <button className={styles["form-button"]} type="submit">
          로그인
        </button>
        <p className={styles.text}>Home | 회원가입</p>
      </form>
    </div>
  );
}

export default LogIn;
