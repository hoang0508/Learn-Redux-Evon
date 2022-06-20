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
  const dispatch = useDispatch();
  const [darkMode, setDarkMode] = useDarkMode();
  console.log("🚀 ~ file: App.js ~ line 14 ~ App ~ darkMode", darkMode);

  useEffect(() => {
    dispatch(toggleDarkMode(darkMode));
  }, [darkMode]);

  const handleToggleDarkMode = () => {
    setDarkMode(!darkMode);
    dispatch(toggleDarkMode(darkMode));
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
