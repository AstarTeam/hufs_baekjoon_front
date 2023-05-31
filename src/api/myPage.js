import axios from "axios";

//내정보 받아오기
export async function getMyInfo(token) {
  console.log("fetching...", token);
  // const url = "/data/myProfile.json"; //임시 url
  const url = "/my-page/read";
  const res = await axios({
    url,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
}

//닉네임 수정
export async function putMyName(token, user_name) {
  try {
    const url = `/my-page/update/name?_update_name=${user_name}`;
    const res = await axios({
      method: "put",
      url,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data.message;
  } catch (e) {
    console.log(e);
  }
}

//비밀번호 수정
export async function putPassword(token, newPassword) {
  try {
    const url = `/my-page/update/password?_update_pw=${newPassword}`;
    const res = await axios({
      method: "put",
      url,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data.message;
  } catch (e) {
    console.log(e);
  }
}

//난수 받기
export async function getRandomNum(token, userId) {
  console.log(token, userId);
  const url = `/my-page/rand/${userId}`;
  // const url = "/data/randomNum.json"; 임시 url
  const res = await axios({
    url,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data.rand;
}

//백준 아이디 인증 받기
export async function postCertificationForm(token, form) {
  const url = `/my-page/auth?boj_id=${form.baekjoon_id}`;
  const res = await axios({
    method: "post",
    url,
    data: { file: form.file },
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data.message;
}
