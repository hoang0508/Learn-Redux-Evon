import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import Counter from "./components/Counter";
import HackerNews from "./components/hackerNews";
import useDarkMode from "./hooks/useDarkMode";
import { toggleDarkMode } from "./redux-tookit/globalSlice";
import Test from "./test";
import ButtonToggle from "./uis/ButtonToggle";
import Card from "./uis/Card";
import Sidebar from "./uis/Sidebar";

function App() {
  // const count = useSelector((state) => state.counter.count);

  return (
    <>
      <HackerNews></HackerNews>
    </>
  );
}

export default App;
