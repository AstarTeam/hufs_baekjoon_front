import React, { useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { deleteUser, getMyInfo, putMyName } from "../../../api/myPage";
import { checkDuplicatedNickName } from "../../../api/auth";
import Button from "../button/Button";
import Loading from "../../common/loading/Loading";
import styles from "./myInfoForm.module.css";
import { useAuthContext } from "../../../context/authContext";

function MyInfoForm() {
  const { userData, onLogout } = useAuthContext();

  //기존 나의 정보 받아오기
  const client = useQueryClient();
  const { isLoading, error, data } = useQuery(
    ["myInfo", userData.access_token],
    () => getMyInfo(userData.access_token),
    {
      onSuccess: data => setNickName(data.user_name), //데이터 받아오는 것을 성공하면, state에 저장한다.
      staleTime: 1000 * 60 * 5,
    }
  );

  const [nickName, setNickName] = useState(data?.user_name ?? "");
  const [checkedName, setCheckedName] = useState(false); //닉네임 중복확인

  const handleChange = e => setNickName(e.target.value);

  const handleDuplicatedNickName = async () => {
    const message = await checkDuplicatedNickName(nickName);
    if (message) {
      setCheckedName(true);
      alert(message);
    } else {
      setCheckedName(false);
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (!checkedName) {
      alert("닉네임 중복확인을 해주세요💥");
      return;
    }
    const message = await putMyName(userData.access_token, nickName);
    alert(message);
    setCheckedName(false);
    client.invalidateQueries(["myInfo", userData.access_token]);
  };

  const handleDeleteUser = async e => {
    if (!window.confirm("모든 정보가 삭제됩니다. 정말 탈퇴 하시겠습니까?")) {
      return;
    } else {
      const message = await deleteUser(userData.access_token);
      if (message) {
        alert("탈퇴가 완료되었습니다.");
        onLogout();
      } else {
        alert("다시한번 시도해 주세요.");
      }
    }
  };

  if (isLoading) return <Loading />;
  if (error) return <p>{error}</p>;

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles["title-wrapper"]}>
        <h3 className={styles["content-title"]}>내 정보</h3>
        <Button type="submit" label="수정 완료" color="blue" />
      </div>
      <div className={styles["content-wrapper"]}>
        <div className={styles["left-wrapper"]}>
          <div className={styles.input}>
            <label htmlFor="user_id">아이디</label>
            <input
              id="user_id"
              type="text"
              value={data.user_id ?? ""}
              disabled
            />
          </div>
          <div className={styles.input}>
            <label htmlFor="baekjoon_id">백준 아이디</label>
            <input
              id="baekjoon_id"
              type="text"
              value={data.user_baekjoon_id ?? ""}
              disabled
            />
          </div>
        </div>
        <div className={styles["right-wrapper"]}>
          <div className={styles.input}>
            <label htmlFor="count">푼 문제 수</label>
            <input
              id="count"
              type="text"
              value={data.user_solved_count ?? ""}
              disabled
            />
          </div>
          <div className={styles.input}>
            <label htmlFor="rank">등수</label>
            <input
              id="rank"
              type="text"
              value={data.user_rank ?? ""}
              disabled
            />
          </div>
        </div>
        <div className={styles.input}>
          <label htmlFor="user_name">닉네임</label>
          <input
            id="user_name"
            name="user_name"
            type="text"
            value={nickName}
            onChange={handleChange}
            minLength={2}
            maxLength={10}
            required
          />
          <Button
            label="중복 확인"
            color="gray"
            onClick={handleDuplicatedNickName}
          />
        </div>
      </div>
      <button
        type="button"
        className={styles["leave-button"]}
        onClick={handleDeleteUser}
      >
        회원 탈퇴하기
      </button>
    </form>
  );
}

export default MyInfoForm;
