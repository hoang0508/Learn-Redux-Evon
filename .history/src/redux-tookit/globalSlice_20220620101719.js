import { createSlice } from "@reduxjs/toolkit";

const globalSlice = createSlice({
  name: "global",
  initialState: {
    darkMode: false,
  },
  reducers: {
    toggleDarkMode: (state, actions) => ({
      ...state,
      darkMode: actions.payload,
    }),
  },
});

export const { toggleDarkMode } = globalSlice.actions;
export default globalSlice.reducer;
