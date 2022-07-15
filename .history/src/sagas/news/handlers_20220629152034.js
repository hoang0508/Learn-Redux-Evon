import { call, put } from "redux-saga/effects";
import { setLoading, setNews } from "./newsSlice";
import requestGetNews from "./requests";

export default function* handleGetNews(action) {
  console.log(
    "🚀 ~ file: handlers.js ~ line 6 ~ function*handleGetNews ~ action",
    action
  );
  try {
    const response = yield call(requestGetNews);
    const { hits } = response?.data;
    yield put(setNews(hits));
    yield put(setLoading(false));
  } catch (error) {
    console.log(error);
  }
}
