import { configureStore, combineReducers } from "@reduxjs/toolkit";
import logger from "redux-logger";

import counterSlice from "./counterSlice";
import globalSlice from "./globalSlice";

const reducer = combineReducers({
  counter: counterSlice,
  global: globalSlice,
});

const store = configureStore({
  // reducer
  reducer: reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
