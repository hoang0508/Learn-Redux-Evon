import { createSlice } from "@reduxjs/toolkit";

export const incrementAsync2 = createAsyncThunk('increment', 
  async (payload) => {
    const reponse = await fetchCount(payload);
    return ((reponse.data));
  }
         
);

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
  extraReducers: {

  }
});

export const { toggleDarkMode, toggleSidebar } = globalSlice.actions;
export default globalSlice.reducer;
