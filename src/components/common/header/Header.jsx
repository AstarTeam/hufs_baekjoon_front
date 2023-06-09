import React from "react";
import styles from "./header.module.css";
import logo from "../../../assets/icons/logo_navy.svg";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../../context/authContext";

function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  const { userData, onLogout } = useAuthContext();

  const homeColor = location.pathname === "/" ? "blue" : "";
  const rankingColor = location.pathname === "/ranking" ? "blue" : "";
  const mypageColor = location.pathname === "/mypage" ? "blue" : "";
  const loginColor = location.pathname === "/login" ? "blue" : "";
  const joinColor = location.pathname === "/join" ? "blue" : "";

  const handleMyPageClick = () => {
    if (userData.access_token) {
      navigate("/mypage");
    } else {
      alert("로그인이 필요한 페이지 입니다 :)");
      navigate("/login");
      return;
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles["text-logo-container"]}>
          <Link to="/">
            <img className={styles.logo} src={logo} alt="로고" />
          </Link>
          <div className={styles["text-container"]}>
            <Link to="/" className={`${styles[homeColor]} ${styles.link}`}>
              HOME
            </Link>
            <Link
              to="/ranking"
              className={`${styles[rankingColor]} ${styles.link}`}
            >
              개인 랭킹
            </Link>
            <span
              className={`${styles[mypageColor]} ${styles.link}`}
              onClick={handleMyPageClick}
            >
              마이페이지
            </span>
          </div>
        </div>
        <div className={styles["text-container-right"]}>
          {userData.access_token ? (
            <>
              <div className={styles.text}>{userData.user_id}</div>
              <span className={styles.text}>|</span>
              <div className={styles.link} onClick={onLogout}>
                로그아웃
              </div>
            </>
          ) : (
            <>
              <Link to="join" className={`${styles[joinColor]} ${styles.link}`}>
                회원가입
              </Link>
              <span className={styles.text}>|</span>
              <Link
                to="/login"
                className={`${styles[loginColor]} ${styles.link}`}
              >
                로그인
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
