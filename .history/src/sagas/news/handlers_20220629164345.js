import { call, put, select } from "redux-saga/effects";
import { setLoading, setNews } from "./newsSlice";
import requestGetNews from "./requests";

export default function* handleGetNews({ payload, type }) {
  try {
    const newQuery = yield select((state) => state.news.newQuery);
    console.log(
      "🚀 ~ file: handlers.js ~ line 8 ~ function*handleGetNews ~ newQuery",
      newQuery
    );

    yield put(setLoading(true));
    const response = yield call(requestGetNews, payload);
    const { hits } = response?.data;
    yield put(setNews(hits));
    yield put(setLoading(false));
  } catch (error) {
    console.log(error);
  }
}
