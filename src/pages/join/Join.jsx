import React from "react";
import styles from "./join.module.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Join() {
  /// 폼 state 관리
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const [idMessage, setIdMessage] = useState("값을 입력해주세요");
  const [nicknameMessage, setNicknameMessage] = useState("값을 입력해주세요");
  const [passwordMessage, setPasswordMessage] = useState("값을 입력해주세요");
  const [confirmedPasswordMessage, setConfirmedMessage] =
    useState("값을 입력해주세요");

  /// 유효성 검사
  const [isId, setIsId] = useState(false);
  const [isNickname, setIsNickname] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const [isConfirmedPassword, setIsConfirmedPassword] = useState(false);

  /// 중복검사
  const [isDuplicatedId, setIsDuplicatedId] = useState(false);
  const [isDuplicatedNickname, setIsDuplicatedNickname] = useState(false);

  const checkDuplicatedId = async () => {
    if (isId) {
      try {
        await axios({
          method: "get",
          url: `http://43.201.190.128:8000/unsolved_by_HUFS/user_create/user_name_check/{id}`,
        });
        setIsDuplicatedId(true);
        alert("사용 가능한 아이디입니다.");
      } catch (e) {
        console.log(e);
        alert("이미 존재하는 아이디입니다.");
      }
    } else {
      alert("유효하지 않은 아이디입니다");
    }
  };

  const checkDuplicatedNickname = async () => {
    if (isNickname) {
      try {
        await axios({
          method: "get",
          url: `http://43.201.190.128:8000/unsolved_by_HUFS/user_create/user_name_check/{nickname}`,
        });
        setIsDuplicatedId(true);
        alert("사용 가능한 닉네임입니다.");
      } catch (e) {
        console.log(e);
        alert("이미 존재하는 닉네임입니다.");
      }
    } else {
      alert("유효하지 않은 닉네임입니다");
    }
  };

  /// 폼 onchange 함수 (유효성 검사)
  const onChangeId = e => {
    setId(e.target.value);
    setIsDuplicatedId(false);
    console.log(e.target.value);

    const idExp = /^[a-zA-Z0-9]{2,10}$/;
    if (!idExp.test(e.target.value)) {
      setIdMessage("2~10자 이내의 영어 대소문자, 숫자만 입력해주세요.");
      setIsId(false);
    } else {
      setIdMessage("사용 가능한 아이디입니다.");
      setIsId(true);
    }
  };

  const onChangeNickname = e => {
    setNickname(e.target.value);
    setIsDuplicatedNickname(false);
    console.log(e.target.value);

    const nickNameExp = /^[ㄱ-ㅎ가-힣a-zA-Z0-9]{2,10}$/;
    if (!nickNameExp.test(e.target.value)) {
      setNicknameMessage(
        "2~10자 이내의 한글,영어 대소문자, 숫자만 입력해주세요."
      );
      setIsNickname(false);
    } else {
      setNicknameMessage("사용 가능한 닉네임입니다.");
      setIsNickname(true);
    }
  };

  const onChangePassword = e => {
    setPassword(e.target.value);
    console.log(e.target.value);
    const passwordExp = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{6,12}$/;
    if (!passwordExp.test(e.target.value)) {
      setPasswordMessage(
        "6~12자 이내의 1개 이상의 영문 대소문자 및 숫자를 입력해주세요."
      );
      setIsPassword(false);
    } else {
      setPasswordMessage("사용 가능한 비밀번호입니다.");
      setIsPassword(true);
    }
  };

  const onChangeConfirmedPassword = e => {
    setConfirmedPassword(e.target.value);
    if (password !== e.target.value) {
      setConfirmedMessage("비밀번호가 일치하지 않습니다.");
      setIsConfirmedPassword(false);
    } else {
      setConfirmedMessage("비밀번호가 일치합니다.");
      setIsConfirmedPassword(true);
    }
  };

  /// 폼 데이터 확인
  function checkForm() {
    if (!Boolean(isId)) {
      alert("유효한 아이디를 입력해주세요");
      return false;
    } else if (!Boolean(isDuplicatedId)) {
      alert("아이디 중복 검사를 진행해주세요");
      return false;
    } else if (!Boolean(isNickname)) {
      alert("유효한 닉네임을 입력해주세요");
      return false;
    } else if (!Boolean(isDuplicatedNickname)) {
      alert("닉네임 중복 검사를 진행해주세요");
      return false;
    } else if (!Boolean(isPassword)) {
      alert("유효한 비밀번호를 입력해주세요");
      return false;
    } else if (!Boolean(isConfirmedPassword)) {
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
          url: "http://43.201.190.128:8000/unsolved_by_HUFS/user_create/join/",
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
        console.log(e);
        alert("회원 가입 실패");
      }
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
              onChange={onChangeId}
              placeholder="2~10자 이내, 영문, 숫자 조합이어야 합니다."
            />
            <div
              className={styles["form-check-button"]}
              onClick={checkDuplicatedId}
            >
              중복확인
            </div>
          </div>
          <p className={styles.label}>{idMessage}</p>
          <p className={styles.label}>닉네임</p>
          <div className={styles["input-container"]}>
            <input
              className={`${styles["form-input"]} ${styles.id}`}
              value={nickname}
              onChange={onChangeNickname}
              placeholder="2~10자 이내여야 합니다."
            />
            <div
              className={styles["form-check-button"]}
              onClick={checkDuplicatedNickname}
            >
              중복확인
            </div>
          </div>
          <p className={styles.label}>{nicknameMessage}</p>
          <p className={styles.label}>비밀번호</p>
          <input
            className={styles["form-input"]}
            value={password}
            onChange={onChangePassword}
            placeholder="최소길이 6문자, 1개 이상의 영문 및 숫자가 포함되어야 합니다."
          />
          <p className={styles.label}>{passwordMessage}</p>
          <p className={styles.label}>비밀번호 확인</p>
          <input
            className={styles["form-input"]}
            value={confirmedPassword}
            onChange={onChangeConfirmedPassword}
          />
          <p className={styles.label}>{confirmedPasswordMessage}</p>
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
