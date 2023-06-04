import axios from "axios";
import { BASE_URL } from "../utils/url";

//개인 순위 받기
export async function getRankList() {
  const url = `${BASE_URL}/fame`;
  const res = await axios(url);

  const sortedData = res.data.userList
    .sort((a, b) => b.count - a.count)
    .map((item, index) => ({ ...item, rank: index + 1 }));
  return sortedData;
}
