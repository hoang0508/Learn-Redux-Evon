import { call, put } from "redux-saga/effects";
import { setNews } from "./newsSlice";
import requestGetNews from "./requests";

export default function* handleGetUser(action) {
  try {
    const response = yield call(requestGetNews);
    const { hits } = response.data;
    console.log(
      "🚀 ~ file: handlers.js ~ line 9 ~ function*handleGetUser ~ hits",
      hits
    );
    yield put(setNews(hits));
  } catch (error) {
    console.log(error);
  }
}
