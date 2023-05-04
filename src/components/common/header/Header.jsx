import React, { useState } from "react";
import styles from "./header.module.css";
import logo from "../../../assets/icons/logo_navy.svg";
import { useLocation, Link } from "react-router-dom";

function Header() {
  // 추가 CSSS 스타일 입히기
  const logoStyles = {
    width: "20rem",
    cursor: "pointer",
  };
  const RigntTextStyles = {
    width: "12rem",
  };

  // 주소에 따라 Home, 마이페이지에 색 입히기
  const location = useLocation();
  const [isHome, setIsHome] = useState(location.pathname === "/");
  const [isMypage, setIsMypage] = useState(location.pathname === "/mypage");
  const colorClass = isHome ? "blue" : "";

  return (
    <header className={styles.header}>
      <p className={styles["text-wrapper"]}>
        <p className={styles["text-logo-container"]}>
          <Link to="/">
            <img style={logoStyles} src={logo} alt="로고" />
          </Link>
          <p className={styles["text-container"]}>
            <p className={`${styles[colorClass]} ${styles.text}`}>
              <Link to="/">HOME</Link>
            </p>
            <p className={styles.text}>
              <Link to="/mypage">마이페이지</Link>
            </p>
          </p>
        </p>
        <p style={RigntTextStyles} className={styles["text-container"]}>
          <p className={styles.text}>
            <Link to="join">회원가입</Link>
          </p>
          <p className={styles.text}>|</p>
          <p className={styles.text}>
            <Link to="/login">로그인</Link>
          </p>
        </p>
      </p>
    </header>
  );
}

export default Header;
