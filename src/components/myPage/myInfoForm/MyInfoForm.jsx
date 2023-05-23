import React from "react";
import styles from "./myInfoForm.module.css";
import Button from "../button/Button";

function MyInfoForm() {
  return (
    <div className={styles["content-wrapper"]}>
      <div className={styles["title-wrapper"]}>
        <h3 className={styles["content-title"]}>내 정보</h3>
        <Button type="submit" label="수정 완료" color="blue" />
      </div>
      <form className={styles.form}>
        <div className={styles["left-wrapper"]}>
          <div className={`${styles.input}`}>
            <label htmlFor="id">아이디</label>
            <input id="id" type="text" value="gildong" disabled />
          </div>
          <div className={`${styles.input}`}>
            <label htmlFor="baekjoon_id">백준 아이디</label>
            <input id="baekjoon_id" type="text" value="gildong" disabled />
          </div>
        </div>
        <div className={styles["right-wrapper"]}>
          <div className={`${styles.input}`}>
            <label htmlFor="count">푼 문제 수</label>
            <input id="count" type="text" value="1" disabled />
          </div>
          <div className={`${styles.input}`}>
            <label htmlFor="rank">등수</label>
            <input id="rank" type="text" value="1" disabled />
          </div>
        </div>
        <div className={styles.input}>
          <label htmlFor="nickname">닉네임</label>
          <input id="nickname" type="text" />
          <Button label="중복 확인" color="gray" />
        </div>
      </form>
    </div>
  );
}

export default MyInfoForm;
