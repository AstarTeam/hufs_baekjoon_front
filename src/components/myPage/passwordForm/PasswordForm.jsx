import React, { useState } from "react";
import { useAuthContext } from "../../../context/authContext";
import { putPassword } from "../../../api/myPage";
import Button from "../button/Button";
import styles from "./passwordForm.module.css";

function PasswordForm() {
  const { userData } = useAuthContext();

  const initialValue = {
    new_password: "",
    new_password_check: "",
  };
  const [form, setForm] = useState(initialValue);

  let wrongPasswordRegexp =
    form.new_password !== "" &&
    !form.new_password.match("^(?=.*[a-zA-Z])(?=.*[0-9]).{6,20}$");
  let wrongPasswordMatch =
    form.new_password_check !== "" &&
    form.new_password !== form.new_password_check;

  const handleSubmit = async e => {
    e.preventDefault();
    if (wrongPasswordMatch || wrongPasswordRegexp) {
      alert("비밀번호를 확인해 주세요.");
      return;
    }
    const message = await putPassword(userData.access_token, form.new_password);
    alert(message);
    setForm(initialValue);
  };

  const changeHandler = e => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles["title-wrapper"]}>
        <h3 className={styles["content-title"]}>비밀번호 변경</h3>
        <Button type="submit" label="수정 완료" color="blue" />
      </div>
      <div className={styles["content-wrapper"]}>
        <div className={styles.input}>
          <label htmlFor="id">아이디</label>
          <input
            id="id"
            type="text"
            name="id"
            defaultValue={userData.user_id}
            disabled
          />
        </div>
        <div className={styles.input}>
          <label htmlFor="new_password">새로운 비밀번호</label>
          <input
            id="new_password"
            name="new_password"
            type="password"
            value={form.new_password}
            onChange={changeHandler}
            placeholder="최소길이 6문자, 숫자 및 영문 1개이상 포함"
            minLength={6}
            maxLength={20}
            required
          />
          {wrongPasswordRegexp && (
            <small className={styles.error}>
              * 최소길이 6문자, 숫자 및 영문 1개이상 포함되어야 합니다.
            </small>
          )}
        </div>
        <div className={styles.input}>
          <label htmlFor="new_password_check">새로운 비밀번호(확인)</label>
          <input
            id="new_password_check"
            name="new_password_check"
            type="password"
            value={form.new_password_check}
            onChange={changeHandler}
            placeholder="비밀번호 확인"
            minLength={6}
            maxLength={20}
            required
          />
          {wrongPasswordMatch && (
            <small className={styles.error}>
              * 비밀번호가 일치하지 않습니다.
            </small>
          )}
        </div>
      </div>
    </form>
  );
}

export default PasswordForm;
