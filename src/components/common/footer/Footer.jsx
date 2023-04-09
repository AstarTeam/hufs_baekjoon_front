import React from "react";
import styles from "./footer.module.css";
import logo from "../../../assets/icons/logo_gray.svg";
import github from "../../../assets/icons/github.svg";
import Button from "./Button";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles["text-container"]}>
          <img src={logo} alt="로고" />
          <div>
            <strong className={styles.title}>
              A*팀의 오픈소스 프로젝트 입니다 :)
            </strong>
            <p className={styles.text}>
              한국외국어대 융복합 SW 종합설계 A6팀 <br />
              문규민, 전명관, 이주형, 김보람, 장정아
            </p>
            <small className={styles.copyright}>
              © 2023, All Rights Reserved
            </small>
          </div>
        </div>

        <div className={styles["button-container"]}>
          <Button
            label="Github"
            icon={github}
            link="https://github.com/orgs/AstarTeam/repositories"
          />
          <Button label="Baekjoon 사이트" link="https://www.acmicpc.net/" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
