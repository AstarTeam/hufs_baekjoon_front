import React from "react";
import styles from "./join.module.css";
import { useState, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Join() {
  /// 폼 state 관리
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");
  const [nickname, setNickname] = useState("");

  /// 폼 데이터 확인
  function checkForm() {
    if (!Boolean(id)) {
      alert("아이디를 입력해주세요");
      return false;
    } else if (!Boolean(nickname)) {
      alert("닉네임을 입력해주세요");
      return false;
    } else if (!Boolean(password)) {
      alert("비밀번호를 입력해주세요");
      return false;
    } else if (!Boolean(confirmedPassword)) {
      alert("비밀번호를 확인해주세요");
      return false;
    } else if (password !== confirmedPassword) {
      alert("비밀번호가 일치하지 않습니다");
      return false;
    } else return true;
  }

  const navigate = useNavigate();
  const sendForm = async () => {
    //서버에 회원가입 폼을 전달
    if (checkForm()) {
      try {
        await axios({
          method: "post",
          url: "http://43.201.190.128:8000/unsolved_by_HUFS/",
          data: {
            user_id: id,
            user_pw: password,
            user_name: nickname,
          },
        });
        alert(
          "회원가입이 완료되었습니다. 매일 오후 10시에 회원가입이 승인됩니다."
        );
        setTimeout(() => {
          navigate("/");
        }, 500);
      } catch (e) {
        alert("이미 존재하는 아이디입니다.");
      }
    } else {
      console.log(id, nickname, password, confirmedPassword);
    }
  };

  return (
    <div className={styles["join-wrapper"]}>
      <div className={styles["title-form-container"]}>
        <p className={styles.title}>JOIN</p>
        <p className={styles.subtitle}>
          더 다양한 서비스 이용을 위해 회원가입을 진행해 주세요.
        </p>
        <form className={styles["form-container"]}>
          <p className={styles.label}>아이디</p>
          <div className={styles["input-container"]}>
            <input
              className={`${styles["form-input"]} ${styles.id}`}
              value={id}
              onChange={e => setId(e.target.value)}
              placeholder="2~10자 이내, 영문, 숫자 조합이어야 합니다."
            />
            <div className={styles["form-check-button"]}>중복확인</div>
          </div>
          <p className={styles.label}>닉네임</p>
          <div className={styles["input-container"]}>
            <input
              className={`${styles["form-input"]} ${styles.id}`}
              value={nickname}
              onChange={e => setNickname(e.target.value)}
              placeholder="2~10자 이내여야 합니다."
            />
            <div className={styles["form-check-button"]}>중복확인</div>
          </div>
          <p className={styles.label}>비밀번호</p>
          <input
            className={styles["form-input"]}
            value={password}
            onChange={e => setPassword(e.target.value)}
            placeholder="최소길이 6문자, 1개 이상의 영문 및 숫자가 포함되어야 합니다."
          />
          <p className={styles.label}>비밀번호 확인</p>
          <input
            className={styles["form-input"]}
            value={confirmedPassword}
            onChange={e => setConfirmedPassword(e.target.value)}
          />
          <div
            className={styles["form-button"]}
            type="submit"
            onClick={sendForm}
          >
            가입하기
          </div>
        </form>
      </div>
    </div>
  );
}

export default Join;
