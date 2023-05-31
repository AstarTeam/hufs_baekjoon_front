import React, { useRef, useState } from "react";
import styles from "./certificate.module.css";
import Button from "../button/Button";
import { getRandomNum, postCertificationForm } from "../../../api/myPage";

function CertificateForm({ userData }) {
  const selectFile = useRef("");
  const [randomNum, setRandomNum] = useState("");
  const [form, setForm] = useState({
    baekjoon_id: "",
    file: "",
  });

  console.log(form.file);

  const imageInputHandler = () => selectFile.current.click(); //input file를 동작하도록
  const handleChange = e => {
    const { name, value } = e.target;
    if (name === "file") {
      setForm({ ...form, [name]: e.target.files[0] }); //해당 파일을 서버에서 볼수 있을지
      return;
    }
    setForm({ ...form, [name]: value });
  };

  const handleRandomNumBtn = async () => {
    const res = await getRandomNum(userData.access_token, userData.user_id);
    setRandomNum(res);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (!randomNum) {
      alert("난수를 생성해 주세요.");
      return;
    }
    const message = await postCertificationForm(userData.access_token, form);
    alert(`${message} 인증은 매일 오후 10시에 확인할 수 있습니다.`);
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
            accept="image/*"
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
