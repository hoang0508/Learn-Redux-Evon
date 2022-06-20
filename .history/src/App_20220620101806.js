import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import Counter from "./components/Counter";
import useDarkMode from "./hooks/useDarkMode";
import { toggleDarkMode } from "./redux-tookit/globalSlice";
import Test from "./test";
import Card from "./uis/Card";

function App() {
  // const count = useSelector((state) => state.counter.count);

  return (
    <>
      {/* <h2>This is count : {count}</h2> */}
      <Card />
      <Counter />
      <Test />
    </>
  );
}

export default App;
