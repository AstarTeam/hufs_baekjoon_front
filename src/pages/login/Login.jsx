import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../context/authContext";
import { useQueryClient } from "@tanstack/react-query";
import styles from "./login.module.css";

function Login() {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });
  const { onLogin } = useAuthContext();
  const client = useQueryClient();

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(form => ({ ...form, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    onLogin(form);
    client.invalidateQueries(["problems"]);
  };

  return (
    <div className={styles.container} onSubmit={handleSubmit}>
      <form className={styles["form-container"]}>
        <h2 className={styles.title}>LOGIN</h2>
        <p className={styles.subtitle}>아이디와 비밀번호를 입력해주세요.</p>
        <input
          className={styles["form-input"]}
          name="username"
          placeholder="아이디"
          autoComplete="off"
          onChange={handleChange}
          required
        />
        <input
          className={styles["form-input"]}
          name="password"
          type="password"
          placeholder="비밀번호"
          onChange={handleChange}
          required
        />
        <button className={styles["form-button"]} type="submit">
          로그인
        </button>
        <div className={styles["text-container"]}>
          <Link to="/" className={styles.link}>
            Home
          </Link>
          <span className={styles.text}>|</span>
          <Link to="/join" className={styles.link}>
            회원가입
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Login;
