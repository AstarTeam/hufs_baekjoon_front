import React from "react";
import styles from "./leftNav.module.css";

function LeftNav({ onChangeNav, checked }) {
  return (
    <ul className={styles.nav}>
      <li
        className={`${styles.tab} ${checked === "myInfo" && styles.checked}`}
        onClick={() => onChangeNav("myInfo")}
      >
        내 정보
      </li>
      <li
        className={`${styles.tab} ${checked === "password" && styles.checked}`}
        onClick={() => onChangeNav("password")}
      >
        비밀번호 수정
      </li>
      <li
        className={`${styles.tab} ${
          checked === "certificate" && styles.checked
        }`}
        onClick={() => onChangeNav("certificate")}
      >
        백준 아이디 인증
      </li>
    </ul>
  );
}

export default LeftNav;
