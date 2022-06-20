import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
  },
  reducers: {
    increment: (state) => ({
      ...state,
      count: state.count + 1,
    }),
    decrement: (state) => ({
      ...state,
      count: state.count - 1,
    }),

    addamount: (state, action) => {
      console.log(action);
      return {
        ...state,
        count: state.count + action.payload,
      };
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, addamount } = counterSlice.actions;

export default counterSlice.reducer;
