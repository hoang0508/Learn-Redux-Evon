import { createSlice } from "@reduxjs/toolkit";

const globalSlice = createSlice({
  name: "global",
  initialState: {
    darkMode: false,
    showSidebar: true,
  },
  reducers: {
    toggleDarkMode: (state, actions) => ({
      ...state,
      darkMode: actions.payload,
    }),
    toggleSidebar: (state, actions) => ({
      ...state,
      showSidebar: actions.payload,
    }),
  },
  extraReducers: {},
});

export const { toggleDarkMode, toggleSidebar } = globalSlice.actions;
export default globalSlice.reducer;
