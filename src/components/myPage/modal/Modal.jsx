import React, { useRef } from "react";
import CloseIcon from "../../../assets/icons/close.svg";
import styles from "./modal.module.css";

function Modal({ onClose }) {
  const bgRef = useRef();

  const handleCloseModal = e => {
    if (e.target !== bgRef.current) return;
    onClose();
  };

  return (
    <div className={styles.background} ref={bgRef} onClick={handleCloseModal}>
      <article className={styles.content}>
        <button type="button" onClick={onClose}>
          <img
            src={CloseIcon}
            alt="모달 닫기 버튼"
            className={styles["close-button"]}
          />
        </button>
        <h3 className={styles.title}>백준 인증 이란?</h3>
        <small className={styles.describe}>
          * 백준 아이디가 유효한지 판별하기 위한 인증 방법입니다.
          <br /> 인증이 완료되면, <strong>나의 도전상태 기능</strong>을 사용할
          수 있으며,
          <strong>개인 랭킹</strong>에도 자신의 닉네임을 올릴 수 있습니다.
        </small>
        <ul className={styles.list}>
          <ol className={styles.item}>
            1. 홈페이지의 <strong>난수 생성 버튼</strong>을 눌러, 난수를
            받습니다.
            <img
              src={`${process.env.PUBLIC_URL}/images/randomNum.png`}
              alt=""
            />
          </ol>
          <ol className={styles.item}>
            2. <strong>백준 사이트에 로그인</strong> 후, 아무 문제나 선택하여
            소스코드 란에
            <strong> 생성한 난수를 입력</strong>후 제출합니다. (단, 언어는
            JAVA를 선택해 주세요.)
            <img
              src={`${process.env.PUBLIC_URL}/images/baekjoonSubmit.png`}
              alt=""
            />
          </ol>
          <ol className={styles.item}>
            3. 제출 결과에서 방금 푼 문제의 '언어'를 선택한뒤 나오는 페이지를
            아래와 같이 <strong>캡쳐</strong>해 주세요.
            <img
              src={`${process.env.PUBLIC_URL}/images/compileError.png`}
              alt=""
            />
            <small>* 캡쳐 사진 예시</small>
            <img src={`${process.env.PUBLIC_URL}/images/result.png`} alt="" />
          </ol>
          <ol className={styles.item}>
            4. 캡쳐한 사진을 <strong>인증 사진 업로드</strong>란에 업로드 한 뒤,
            백준 아이디를 입력 후 인증 제출 버튼을 눌러주세요.
            <img src={`${process.env.PUBLIC_URL}/images/submit.png`} alt="" />
          </ol>
          <ol className={styles.item}>
            5. 인증 확인은 <strong>매일 오후 10시</strong> 마다 이루어지며, 인증
            완료시 해당 페이지의 알림창 문구가 변경됩니다.
            <img src={`${process.env.PUBLIC_URL}/images/auth.png`} alt="" />
          </ol>
        </ul>
      </article>
    </div>
  );
}

export default Modal;
