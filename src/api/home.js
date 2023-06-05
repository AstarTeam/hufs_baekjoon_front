import axios from "axios";
import { BASE_URL } from "../utils/url";

//랭크 받기
export async function getRankData() {
  try {
    const res = await axios(`${BASE_URL}/ranking-info`);
    return res.data[0];
  } catch (e) {
    console.error(e);
  }
}

//문제 리스트 받기
export async function getProblemList(page, type, token) {
  try {
    const url = `${BASE_URL}/${type}${token ? "/token" : ""}?page=${
      page - 1
    }&size=15`;
    const config = token
      ? {
          url,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      : { url };
    const res = await axios(config);
    return res.data;
  } catch (e) {
    console.error(e);
    return { total: 0, problem_list: [] };
  }
}

//문제 검색
export async function getSearchProblem(problem_num, token) {
  try {
    const url = `${BASE_URL}/search${
      token ? "/token" : ""
    }?problem_num=${problem_num}`;
    const config = token
      ? {
          url,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      : { url };
    const res = await axios(config);
    const new_res = { total: 1, problem_list: token ? res.data : [res.data] };
    return new_res;
  } catch (e) {
    return { total: 0, problem_list: [] };
  }
}

//도전자수 갱신
export async function postChallenge(problem_num, token, state) {
  try {
    const url = state
      ? `${BASE_URL}/problem/unchallenge/${problem_num}`
      : `${BASE_URL}/problem/challenge/${problem_num}`;
    const res = await axios({
      method: "post",
      url,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data.message;
  } catch (e) {
    console.error(e);
  }
}

//추천 문제 받기
export async function getRecommended() {
  try {
    const url = `${BASE_URL}/recommend`;
    const res = await axios(url);

    return res.data;
  } catch (e) {
    console.error(e);
  }
}
