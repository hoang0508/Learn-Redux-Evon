import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import Counter from "./components/Counter";
import useDarkMode from "./hooks/useDarkMode";
import { toggleDarkMode } from "./redux-tookit/globalSlice";
import Card from "./uis/Card";

function App() {
  // const count = useSelector((state) => state.counter.count);
  const globalOptions = useSelector((state) => state.global);
  const dispatch = useDispatch();
  console.log(
    "🚀 ~ file: App.js ~ line 10 ~ App ~ globalOptions",
    globalOptions
  );
  const [darkMode, setDarkMode] = useDarkMode();

  const handleToggleDarkMode = () => {
    // dispatch(toggleDarkMode());
    setDarkMode(!darkMode);
  };

  return (
    <>
      {/* <h2>This is count : {count}</h2>
      <Counter /> */}
      <Card />
      <button onClick={handleToggleDarkMode}>Toggle dark mode</button>
    </>
  );
}

export default App;
