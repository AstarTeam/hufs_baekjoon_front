import axios from "axios";

//문제 리스트 받기
export async function getProblemList(page, type, num) {
  const url = `/data/problems${page - 1}.json`; //sampleUrl
  // const url = `/${type}/?page=${page - 1}&size=15`;
  const res = await axios(url);
  return res.data;
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
