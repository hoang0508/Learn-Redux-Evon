import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import HackerNews from "./components/hackerNews";

function App() {
  useEffect(() => {
    function* demoGenerator() {
      console.log("running");
      // yield 1;
      // yield 2;
      // yield 3;
      let id = 1;
      while (true) {
        yield id;
        id++;
      }
    }
    const gen = demoGenerator();
    console.log(gen.next());
  }, []);
  return <>{/* <HackerNews></HackerNews> */}</>;
}

export default App;
