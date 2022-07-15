import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import createSagaMiddleware from "@redux-saga/core";
import { reducer } from "./reducer";
import rootSaga from "./rootSaga";

// const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: reducer,
  // middleware: (gDM) => gDM().concat(logger, sagaMiddleware),
  middleware: (gDM) => gDM().concat(logger),
});
// sagaMiddleware.run(rootSaga);

export default store;