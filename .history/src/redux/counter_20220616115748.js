import { fetchCount } from "../components/counterAPI";

const INCREMENT = "increment";
const DECREMENT = "decrement";
const ADDAMOUNT = "addamount";

const initialState = {
  count: 0,
};

export const increment = () => ({
  type: INCREMENT,
});

export const decrement = () => ({
  type: DECREMENT,
});

export const addamount = (payload) => ({
  type: ADDAMOUNT,
  payload: payload,
});

export const incrementAsync = (payload) => {
  return async (dispatch) => {
    const reponse = await fetchCount(payload);

    dispatch(addamount(reponse.data));
  };
};

export const incrementIfOdd = (payload) => {
  return (dispatch, getState) => {
    const currentValue = getState().counter.count;

    if (currentValue % 2 === 1) {
      dispatch(addamount(payload));
    }
  };
};

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };

    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
      };

    case ADDAMOUNT:
      return {
        ...state,
        count: state.count + action.payload,
      };

    default:
      return state;
  }
}

export default counterReducer;
