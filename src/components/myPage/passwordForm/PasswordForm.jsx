import React from "react";
import styles from "./passwordForm.module.css";
import Button from "../button/Button";

function PasswordForm() {
  return (
    <div className={styles["content-wrapper"]}>
      <div className={styles["title-wrapper"]}>
        <h3 className={styles["content-title"]}>비밀번호 변경</h3>
        <Button type="submit" label="수정 완료" color="blue" />
      </div>
      <form className={styles.form}>
        <div className={`${styles.input}`}>
          <label htmlFor="id">아이디</label>
          <input id="id" type="text" value="gildong" disabled />
        </div>
        <div className={`${styles.input}`}>
          <label htmlFor="new_password">새로운 비밀번호</label>
          <input id="new_password" type="password" />
        </div>
        <div className={`${styles.input}`}>
          <label htmlFor="new_password_check">새로운 비밀번호(확인)</label>
          <input id="new_password_check" type="password" />
        </div>
      </form>
    </div>
  );
}

export default PasswordForm;
