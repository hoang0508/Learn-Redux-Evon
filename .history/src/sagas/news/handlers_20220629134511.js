import { call } from "redux-saga/effects";
import requestGetNews from "./requests";

export default function* handleGetUser(action) {
  try {
    const response = yield call(requestGetNews);
    const { hits } = response.data;
  } catch (error) {
    console.log(error);
  }
}
