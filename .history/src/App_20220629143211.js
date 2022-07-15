import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getNews } from "./sagas/news/newsSlice";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: "demo",
    });
  }, [dispatch]);
  return <></>;
}

export default App;
