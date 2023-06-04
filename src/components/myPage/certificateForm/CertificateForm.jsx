import React, { useRef, useState } from "react";
import { useAuthContext } from "../../../context/authContext";
import { getRandomNum, postCertificationForm } from "../../../api/myPage";
import Button from "../button/Button";
import styles from "./certificate.module.css";
import Portal from "../../common/Portal";
import Modal from "../modal/Modal";

function CertificateForm() {
  const { userData, updateAuth } = useAuthContext();

  const selectFile = useRef("");
  const [randomNum, setRandomNum] = useState("");
  const [form, setForm] = useState({
    baekjoon_id: "",
    file: "",
  });
  const [onModal, setOnModal] = useState(false);

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
    if (message) {
      alert(`${message} 인증은 매일 오후 10시에 확인할 수 있습니다.`);
      updateAuth();
    } else {
      alert("인증을 실패했습니다. 다시한번 시도해 주세요.");
    }
  };

  const handleModal = () => setOnModal(prev => !prev);

  let alertContent;
  if (userData.user_auth === 2) {
    alertContent = (
      <p className={styles.alert}>
        * 인증이 신청되었습니다. 매일 오후 10시에 업데이트 됩니다.
      </p>
    );
  } else if (userData.user_auth === 1) {
    alertContent = (
      <p className={`${styles.alert} ${styles.green}`}>
        * 인증 완료된 사용자 입니다.
      </p>
    );
  } else {
    alertContent = (
      <p className={`${styles.alert} ${styles.red}`}>
        * 백준 인증이 필요한 사용자 입니다.
      </p>
    );
  }

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit}>
        {alertContent}
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
            <Button
              label="난수 받기"
              color="gray"
              onClick={handleRandomNumBtn}
            />
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
            <Button
              label="사진 선택"
              color="gray"
              onClick={imageInputHandler}
            />
          </div>
        </div>
        <button type="button" className={styles.question} onClick={handleModal}>
          백준 인증이란?
        </button>
      </form>
      <Portal>{onModal && <Modal onClose={handleModal} />} </Portal>
    </>
  );
}

export default CertificateForm;
