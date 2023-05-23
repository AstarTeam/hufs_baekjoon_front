import React, { useRef } from "react";
import styles from "./certificate.module.css";
import Button from "../button/Button";

function CertificateForm() {
  const selectFile = useRef("");

  const imageInputHandler = e => selectFile.current.click();
  // const imageChangeHandler = e => console.log(e.target.files[0]);

  return (
    <div className={styles["content-wrapper"]}>
      <div className={styles["title-wrapper"]}>
        <h3 className={styles["content-title"]}>백준 아이디 인증</h3>
        <Button type="submit" label="인증 제출" color="blue" />
      </div>
      <form className={styles.form}>
        <div className={styles.input}>
          <label htmlFor="baekjoon_id">백준 아이디</label>
          <input id="baekjoon_id" type="text" />
        </div>
        <div className={styles.input}>
          <label htmlFor="random_num">난수</label>
          <input id="random_num" type="text" />
          <Button label="난수 받기" color="gray" />
        </div>
        <div className={styles.input}>
          <label htmlFor="image">인증 사진 업로드</label>
          <input
            id="image"
            type="file"
            alt="인증 사진"
            accept=".jpg"
            ref={selectFile}
            // onChange={imageChangeHandler}
            className={styles["image-input"]}
          />
          <Button label="사진 선택" color="gray" onClick={imageInputHandler} />
        </div>
      </form>
    </div>
  );
}

export default CertificateForm;
