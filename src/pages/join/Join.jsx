import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  checkDuplicatedId,
  checkDuplicatedNickName,
  postJoin,
} from "../../api/auth";
import styles from "./join.module.css";

function Join() {
  /// 폼 state 관리
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");
  const [nickname, setNickname] = useState("");

  /// 유효성 검사
  const [isId, setIsId] = useState(false);
  const [isNickname, setIsNickname] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const [isConfirmedPassword, setIsConfirmedPassword] = useState(false);

  /// 중복검사
  const [isDuplicatedId, setIsDuplicatedId] = useState(false);
  const [isDuplicatedNickname, setIsDuplicatedNickname] = useState(false);

  const navigate = useNavigate();

  const checkId = async () => {
    if (isId) {
      const message = await checkDuplicatedId(id);
      if (message) {
        setIsDuplicatedId(true);
        alert(message);
      }
    } else {
      alert("유효하지 않은 아이디입니다");
    }
  };

  const checkNickname = async () => {
    if (isNickname) {
      const message = await checkDuplicatedNickName(id);
      if (message) {
        setIsDuplicatedNickname(true);
        alert(message);
      }
    } else {
      alert("유효하지 않은 닉네임입니다");
    }
  };

  const sendForm = async e => {
    e.preventDefault();
    //서버에 회원가입 폼을 전달
    if (checkForm()) {
      const message = await postJoin(id, password, nickname);
      if (message) {
        alert(message);
        setTimeout(() => navigate("/"), 500);
      }
    }
  };

  /// 폼 onchange 함수 (유효성 검사)
  const onChangeId = e => {
    setId(e.target.value);
    setIsDuplicatedId(false);
    console.log(e.target.value);

    const idExp = /^[a-zA-Z0-9]{2,10}$/;
    if (!idExp.test(e.target.value)) {
      setIsId(false);
    } else {
      setIsId(true);
    }
  };

  const onChangeNickname = e => {
    setNickname(e.target.value);
    setIsDuplicatedNickname(false);
    console.log(e.target.value);

    const nickNameExp = /^[ㄱ-ㅎ가-힣a-zA-Z0-9]{2,10}$/;
    if (!nickNameExp.test(e.target.value)) {
      setIsNickname(false);
    } else {
      setIsNickname(true);
    }
  };

  const onChangePassword = e => {
    setPassword(e.target.value);
    console.log(e.target.value);
    const passwordExp = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{6,12}$/;
    if (!passwordExp.test(e.target.value)) {
      setIsPassword(false);
    } else {
      setIsPassword(true);
    }
  };

  const onChangeConfirmedPassword = e => {
    setConfirmedPassword(e.target.value);
    if (password !== e.target.value) {
      setIsConfirmedPassword(false);
    } else {
      setIsConfirmedPassword(true);
    }
  };

  /// 폼 데이터 확인
  function checkForm() {
    if (!isId) {
      alert("유효한 아이디를 입력해주세요");
      return false;
    } else if (!isDuplicatedId) {
      alert("아이디 중복 검사를 진행해주세요");
      return false;
    } else if (!isNickname) {
      alert("유효한 닉네임을 입력해주세요");
      return false;
    } else if (!isDuplicatedNickname) {
      alert("닉네임 중복 검사를 진행해주세요");
      return false;
    } else if (!isPassword) {
      alert("유효한 비밀번호를 입력해주세요");
      return false;
    } else if (!isConfirmedPassword) {
      alert("비밀번호가 일치하지 않습니다");
      return false;
    } else return true;
  }

  return (
    <div className={styles["join-wrapper"]} onSubmit={sendForm}>
      <div className={styles["title-form-container"]}>
        <h2 className={styles.title}>JOIN</h2>
        <strong className={styles.subtitle}>
          더 다양한 서비스 이용을 위해 회원가입을 진행해 주세요.
        </strong>
        <form className={styles["form-container"]}>
          <label className={styles.label}>아이디</label>
          <div className={styles["input-container"]}>
            <input
              className={`${styles["form-input"]} ${styles.id}`}
              value={id}
              onChange={onChangeId}
              placeholder="2~10자 이내, 영문, 숫자 조합이어야 합니다."
              minLength={2}
              maxLength={12}
              required
            />
            <div className={styles["form-check-button"]} onClick={checkId}>
              중복확인
            </div>
          </div>
          {id !== "" && !isId && (
            <small className={styles.error}>
              *2~10자 이내의 영어 대소문자, 숫자만 입력해주세요.
            </small>
          )}
          <label className={styles.label}>닉네임</label>
          <div className={styles["input-container"]}>
            <input
              className={`${styles["form-input"]} ${styles.id}`}
              value={nickname}
              onChange={onChangeNickname}
              placeholder="2~10자 이내여야 합니다."
              minLength={2}
              maxLength={12}
              required
            />
            <div
              className={styles["form-check-button"]}
              onClick={checkNickname}
            >
              중복확인
            </div>
          </div>
          {nickname !== "" && !isNickname && (
            <small className={styles.error}>
              *2~10자 이내의 한글,영어 대소문자, 숫자만 입력해주세요.
            </small>
          )}
          <label className={styles.label}>비밀번호</label>
          <input
            className={styles["form-input"]}
            type="password"
            value={password}
            onChange={onChangePassword}
            placeholder="최소길이 6문자, 1개 이상의 영문 및 숫자가 포함되어야 합니다."
            required
          />
          {password !== "" && !isPassword && (
            <small className={styles.error}>
              *6-12자 이내의 1개 이상의 영문 대소문자 및 숫자를 입력해주세요.
            </small>
          )}
          <label className={styles.label}>비밀번호 확인</label>
          <input
            className={styles["form-input"]}
            type="password"
            value={confirmedPassword}
            onChange={onChangeConfirmedPassword}
            required
          />
          {!(password === confirmedPassword) && (
            <small className={styles.error}>
              *비밀번호가 일치하지 않습니다.
            </small>
          )}
          <button className={styles["form-button"]} type="submit">
            가입하기
          </button>
        </form>
      </div>
    </div>
  );
}

export default Join;
