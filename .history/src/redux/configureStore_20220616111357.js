import { createStore, combineReducers, applyMiddleware } from "redux";
import counterReducer from "./counter";
import thunk from "redux-thunk";

const reducer = combineReducers({
  // key: value
  counter: counterReducer,
});

// export default store;
export const store = createStore(reducer, applyMiddleware(thunk));
