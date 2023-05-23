import React, { useState } from "react";
import styles from "./myPage.module.css";
import LeftNav from "../../components/myPage/leftNav/LeftNav";
import MyInfoForm from "../../components/myPage/myInfoForm/MyInfoForm";
import PasswordForm from "../../components/myPage/passwordForm/PasswordForm";
import CertificateForm from "../../components/myPage/certificateForm/CertificateForm";

function Mypage() {
  const [checkedNav, setCheckedNav] = useState("myInfo");

  const changeNavHandler = item => setCheckedNav(item);

  let content;
  if (checkedNav === "myInfo") {
    content = <MyInfoForm />;
  } else if (checkedNav === "password") {
    content = <PasswordForm />;
  } else if (checkedNav === "certificate") {
    content = <CertificateForm />;
  }

  return (
    <main className={styles.container}>
      <h2 className={styles.title}>마이페이지</h2>
      <div className={styles.wrapper}>
        <LeftNav onChangeNav={changeNavHandler} checked={checkedNav} />
        {content}
      </div>
    </main>
  );
}

export default Mypage;
