import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import HackerNews from "./components/hackerNews";

function App() {
  useEffect(() => {
    function* demoGenerator() {
      yield 1;
      yield 2;
      yield 3;
    }
    const gen = demoGenerator();
    console.log(gen);
  }, []);
  return <>{/* <HackerNews></HackerNews> */}</>;
}

export default App;
