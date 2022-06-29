import { configureStore, combineReducers } from "@reduxjs/toolkit";
import logger from "redux-logger";

import counterSlice from "./counterSlice";
import globalSlice from "./globalSlice";

import createSagaMiddleware from "redux-saga";

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const reducer = combineReducers({
  counter: counterSlice,
  global: globalSlice,
});

const store = configureStore({
  // reducer
  reducer: reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(logger, sagaMiddleware),
});

export default store;
