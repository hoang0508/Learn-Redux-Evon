import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import HackerNews from "./components/hackerNews";
import { getNews } from "./sagas/news/newsSlice";

function App() {
  return (
    <>
      <HackerNews></HackerNews>
    </>
  );
}

export default App;
