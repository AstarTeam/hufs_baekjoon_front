import React, { useState } from "react";
import styles from "./header.module.css";
import logo from "../../../assets/icons/logo_navy.svg";
import { useLocation } from "react-router-dom";

function Header() {
  // 추가 CSSS 스타일 입히기
  const logoStyles = {
    width: "20rem",
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
          <img style={logoStyles} src={logo} alt="로고" />
          <p className={styles["text-container"]}>
            <p className={`${styles[colorClass]} ${styles.text}`}>HOME</p>
            <p className={styles.text}>마이페이지</p>
          </p>
        </p>
        <p style={RigntTextStyles} className={styles["text-container"]}>
          <p className={styles.text}>회원가입</p>
          <p className={styles.text}>|</p>
          <p className={styles.text}>로그인</p>
        </p>
      </p>
    </header>
  );
}

export default Header;
