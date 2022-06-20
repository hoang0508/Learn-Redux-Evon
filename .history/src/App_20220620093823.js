import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import Counter from "./components/Counter";
import useDarkMode from "./hooks/useDarkMode";
import { toggleDarkMode } from "./redux-tookit/globalSlice";
import Card from "./uis/Card";

function App() {
  // const count = useSelector((state) => state.counter.count);
  const globalOptions = useSelector((state) => state.global);

  return (
    <>
      {/* <h2>This is count : {count}</h2> */}
      <Card />
      <Counter />
    </>
  );
}

export default App;
