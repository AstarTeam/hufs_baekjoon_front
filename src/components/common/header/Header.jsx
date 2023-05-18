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
        <div className={styles["text-logo-container"]}>
          <Link to="/">
            <img className={styles.logo} src={logo} alt="로고" />
          </Link>
          <div className={styles["text-container"]}>
            <Link to="/" className={`${styles[homeColor]} ${styles.text}`}>
              HOME
            </Link>
            <Link
              to="/mypage"
              className={`${styles[mypageColor]} ${styles.text}`}
            >
              마이페이지
            </Link>
          </div>
        </div>
        <div className={styles["text-container-right"]}>
          <Link to="join" className={`${styles[joinColor]} ${styles.text}`}>
            회원가입
          </Link>
          <span className={styles.text}>|</span>
          <Link to="/login" className={`${styles[loginColor]} ${styles.text}`}>
            로그인
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
