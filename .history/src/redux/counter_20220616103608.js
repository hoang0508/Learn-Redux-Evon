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

export const addamount = () => ({
  type: ADDAMOUNT,
});

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
        count: state.count,
      };

    default:
      return state;
  }
}

export default counterReducer;
