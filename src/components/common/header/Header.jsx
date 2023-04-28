import React, { useState } from "react";
import styles from "./header.module.css";
import logo from "../../../assets/icons/logo_navy.svg";
import { useLocation, useNavigate } from "react-router-dom";

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

  // 클릭에 따른 주소 이동
  const navigate = useNavigate();
  const goLogIn = () => {
    navigate("/login");
  };
  const goHome = () => {
    navigate("/");
  };
  const goJoin = () => {
    navigate("/join");
  };
  const goMypage = () => {
    navigate("/mypage");
  };

  return (
    <header className={styles.header}>
      <p className={styles["text-wrapper"]}>
        <p className={styles["text-logo-container"]}>
          <img style={logoStyles} src={logo} alt="로고" onClick={goHome} />
          <p className={styles["text-container"]}>
            <p
              className={`${styles[colorClass]} ${styles.text}`}
              onClick={goHome}
            >
              HOME
            </p>
            <p className={styles.text} onClick={goMypage}>
              마이페이지
            </p>
          </p>
        </p>
        <p style={RigntTextStyles} className={styles["text-container"]}>
          <p className={styles.text} onClick={goJoin}>
            회원가입
          </p>
          <p className={styles.text}>|</p>
          <p className={styles.text} onClick={goLogIn}>
            로그인
          </p>
        </p>
      </p>
    </header>
  );
}

export default Header;
