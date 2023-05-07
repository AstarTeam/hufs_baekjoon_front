import React from "react";
import styles from "./header.module.css";
import logo from "../../../assets/icons/logo_navy.svg";
import { useLocation, Link } from "react-router-dom";

function Header() {
  // 주소에 따라 Home, 마이페이지에 색 입히기
  const location = useLocation();
  const homeColor = location.pathname === "/" ? "blue" : "";
  const mypageColor = location.pathname === "/mypage" ? "blue" : "";
  const loginColor = location.pathname === "/login" ? "blue" : "";
  const joinColor = location.pathname === "/join" ? "blue" : "";

  return (
    <header className={styles.header}>
      <div className={styles["text-wrapper"]}>
        <p className={styles["text-logo-container"]}>
          <Link to="/">
            <img className={styles.logo} src={logo} alt="로고" />
          </Link>
          <p className={styles["text-container"]}>
            <p className={`${styles[homeColor]} ${styles.text}`}>
              <Link to="/">HOME</Link>
            </p>
            <p className={`${styles[mypageColor]} ${styles.text}`}>
              <Link to="/mypage">마이페이지</Link>
            </p>
          </p>
        </p>
        <p className={styles["text-container-right"]}>
          <p className={`${styles[joinColor]} ${styles.text}`}>
            <Link to="join">회원가입</Link>
          </p>
          <p className={styles.text}>|</p>
          <p className={`${styles[loginColor]} ${styles.text}`}>
            <Link to="/login">로그인</Link>
          </p>
        </p>
      </div>
    </header>
  );
}

export default Header;
