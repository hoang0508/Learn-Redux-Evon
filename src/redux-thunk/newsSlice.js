import { createSlice, createAsyncThunk, createAction } from "@reduxjs/toolkit";
import requestGetNews from "../sagas/news/requests";

const setLoading = createAction("setLoading");

export const handleFetchNews = createAsyncThunk(
  "news/handleFetchNews",
  async (query, thunkAPI) => {
    const reponse = await requestGetNews(query);
    return reponse.data.hits;
  }
);

// fullfiled | pending | rejected

const initialState = {
  hits: [],
  loading: true,
  errorMessage: "",
  query: "",
};

const newSlice = createSlice({
  name: "news",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(handleFetchNews.fulfilled, (state, action) => {
      state.hits = action.payload;
      state.loading = false;
    });
    builder.addCase(handleFetchNews.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(handleFetchNews.rejected, (state, action) => {
      state.loading = false;
    });
    builder.addCase(setLoading, (state, action) => {
      state.loading = action.payload;
    });
  },
});

export default newSlice.reducer;
