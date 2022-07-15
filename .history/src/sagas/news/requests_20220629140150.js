import axios from "axios";

export default function requestGetNews(action) {
  return axios.request({
    method: "GET",
    url: "https://hn.algolia.com/api/v1/search?query=react",
  });
}
