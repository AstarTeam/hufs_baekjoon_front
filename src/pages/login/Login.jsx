import React from "react";
import { Link } from "react-router-dom";
import styles from "./login.module.css";

function Login() {
  return (
    <div className={styles["login-wrapper"]}>
      <form className={styles["form-container"]}>
        <h2 className={styles.title}>LOGIN</h2>
        <p className={styles.subtitle}>아이디와 비밀번호를 입력해주세요.</p>
        <input className={styles["form-input"]} placeholder="아이디" />
        <input className={styles["form-input"]} placeholder="비밀번호" />
        <button className={styles["form-button"]} type="submit">
          로그인
        </button>
        <div className={styles["text-container"]}>
          <Link to="/" className={styles.text}>
            Home
          </Link>
          <span className={styles.text}>|</span>
          <Link to="/join" className={styles.text}>
            회원가입
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
