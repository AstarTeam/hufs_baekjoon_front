import axios from "axios";
import qs from "qs";

//로그인
export async function postLogin(data) {
  try {
    const res = await axios({
      method: "POST",
      url: "/login",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded", // x-www-form-urlencoded 타입 선언
      },
      data: qs.stringify(data),
    });
    if (res.data.access_token) {
      return res.data;
    }
  } catch (e) {
    alert(e.response.data.detail);
    console.error(e);
  }
}

//아이디 중복 확인
export async function checkDuplicatedId(id) {
  try {
    const res = await axios(`/user-create/user-id-check/${id}`);
    return res.data.message;
  } catch (e) {
    alert(e.response.data.detail);
  }
}

//닉네임 중복 확인
export async function checkDuplicatedNickName(nickname) {
  try {
    const res = await axios(`/user-create/user-name-check/${nickname}`);
    return res.data.message;
  } catch (e) {
    alert(e.response.data.detail);
    console.error(e);
  }
}

//회원가입
export async function postJoin(id, password, nickname) {
  try {
    const res = await axios({
      method: "post",
      url: "/user-create/join",
      data: {
        user_id: id,
        user_pw: password,
        user_name: nickname,
      },
    });
    return res.data.message;
  } catch (e) {
    alert("회원 가입 실패");
  }
}
