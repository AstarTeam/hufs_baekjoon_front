import axios from "axios";

//문제 리스트 받기
export async function getProblemList(page, type, token) {
  // const url = `/data/problems${page - 1}.json`; //sampleUrl
  try {
    const url = `/${type}${token ? "/token" : ""}?page=${page - 1}&size=15`;
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
    const url = `search${token ? "/token" : ""}?problem_num=${problem_num}`;
    const config = token
      ? {
          url,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      : { url };
    const res = await axios(config);
    const new_res = { total: 1, problem_list: [res.data] };
    return new_res;
  } catch (e) {
    return { total: 0, problem_list: [] };
  }
}

//개인 순위 받기
export async function getRankList() {
  const url = "/fame";
  const res = await axios(url);

  const sortedData = res.data.userList
    .sort((a, b) => b.count - a.count)
    .map((item, index) => ({ ...item, rank: index + 1 }));
  return sortedData;
}

//도전자수 갱신
export async function postChallenge(problem_num, user_id) {
  const url = `/problem/${problem_num}/${user_id}/challenge `;
  const res = await axios.post(url);

  console.log(res.data);
}
