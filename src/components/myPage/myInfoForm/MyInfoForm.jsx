import React, { useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import Button from "../button/Button";
import Loading from "../../common/loading/Loading";
import styles from "./myInfoForm.module.css";

async function getMyInfo() {
  console.log("fetching...");
  const url = "/data/myProfile.json"; //임시 url
  const res = await axios(url);
  return res.data;
}

async function putMyName(newData) {
  const url = "/my_page/update/name/";
  await axios.put(url, newData);
}

function MyInfoForm() {
  //기존 나의 정보 받아오기
  const { isLoading, error, data } = useQuery(["myInfo"], getMyInfo, {
    onSuccess: data => setForm({ ...data.myInfo }), //데이터 받아오는 것을 성공하면, state에 저장한다.
    staleTime: 1000 * 60 * 5,
  }); //로그인 key 추가 필요

  //새로운 닉네임 업데이트
  const mutation = useMutation({
    mutationFn: () => putMyName(form),
  });

  const [form, setForm] = useState({
    user_id: data?.myInfo.user_id ?? "",
    user_name: data?.myInfo.user_name ?? "",
  });
  const [checkedName, setCheckedName] = useState(false); //닉네임 중복확인

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(form => ({ ...form, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!checkedName) {
      alert("닉네임 중복확인을 해주세요💥");
      return;
    }
    mutation.mutate(form);
  };

  console.log(form);

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
              value={data.myInfo.user_id ?? ""}
              disabled
            />
          </div>
          <div className={styles.input}>
            <label htmlFor="baekjoon_id">백준 아이디</label>
            <input
              id="baekjoon_id"
              type="text"
              value={data.myInfo.baekjoon_id ?? ""}
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
              value={data.myInfo.count ?? ""}
              disabled
            />
          </div>
          <div className={styles.input}>
            <label htmlFor="rank">등수</label>
            <input
              id="rank"
              type="text"
              value={data.myInfo.rank ?? ""}
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
            value={form?.user_name}
            onChange={handleChange}
            minLength={2}
            maxLength={10}
            required
          />
          <Button label="중복 확인" color="gray" />
        </div>
      </div>
    </form>
  );
}

export default MyInfoForm;
