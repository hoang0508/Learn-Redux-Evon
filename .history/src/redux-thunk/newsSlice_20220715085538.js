import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import requestGetNews from "../sagas/news/requests";

const handleFetchNews = createAsyncThunk(
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
    });
  },
});
