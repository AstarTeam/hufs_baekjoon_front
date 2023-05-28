import React, { useState } from "react";
import styles from "./myPage.module.css";
import LeftNav from "../../components/myPage/leftNav/LeftNav";
import MyInfoForm from "../../components/myPage/myInfoForm/MyInfoForm";
import PasswordForm from "../../components/myPage/passwordForm/PasswordForm";
import CertificateForm from "../../components/myPage/certificateForm/CertificateForm";
import { useAuthContext } from "../../context/authContext";

function Mypage() {
  const [checkedNav, setCheckedNav] = useState("myInfo");
  const { userData } = useAuthContext(); //하위 컴포넌트에서 contextAPI가 사용 안되는 오류 발생

  const changeNavHandler = item => setCheckedNav(item);

  let content;
  if (checkedNav === "myInfo") {
    content = <MyInfoForm userData={userData} />;
  } else if (checkedNav === "password") {
    content = <PasswordForm userData={userData} />;
  } else if (checkedNav === "certificate") {
    content = <CertificateForm userData={userData} />;
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
