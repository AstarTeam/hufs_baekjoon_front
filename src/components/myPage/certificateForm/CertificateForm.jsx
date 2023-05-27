import React, { useRef, useState } from "react";
import styles from "./certificate.module.css";
import Button from "../button/Button";
import axios from "axios";

async function getRandomNum() {
  const url = "/data/randomNum.json";
  const res = await axios(url);
  return res.data.random_num.num;
}

function CertificateForm() {
  const selectFile = useRef("");
  const [randomNum, setRandomNum] = useState("");
  const [form, setForm] = useState({
    baekjoon_id: "",
    file: "",
  });

  const imageInputHandler = e => selectFile.current.click(); //input file를 동작하도록
  const handleChange = e => {
    const { name, value } = e.target;
    if (name === "file") {
      setForm({ ...form, [name]: e.target.files[0] }); //해당 파일을 서버에서 볼수 있을지
      return;
    }
    setForm({ ...form, [name]: value });
  };

  const handleRandomNumBtn = async () => {
    const res = await getRandomNum();
    setRandomNum(res);
  };

  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles["title-wrapper"]}>
        <h3 className={styles["content-title"]}>백준 아이디 인증</h3>
        <Button type="submit" label="인증 제출" color="blue" />
      </div>
      <div className={styles["content-wrapper"]}>
        <div className={styles.input}>
          <label htmlFor="baekjoon_id">백준 아이디</label>
          <input
            id="baekjoon_id"
            name="baekjoon_id"
            type="text"
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.input}>
          <label htmlFor="random_num">난수</label>
          <input id="random_num" type="text" value={randomNum} disabled />
          <Button label="난수 받기" color="gray" onClick={handleRandomNumBtn} />
        </div>
        <div className={styles.input}>
          <label htmlFor="file">인증 사진 업로드</label>
          <input
            id="file"
            type="file"
            name="file"
            alt="인증 사진"
            accept=".jpg"
            ref={selectFile}
            onChange={handleChange}
            className={styles["image-input"]}
            required
          />
          <Button label="사진 선택" color="gray" onClick={imageInputHandler} />
        </div>
      </div>
    </form>
  );
}

export default CertificateForm;
