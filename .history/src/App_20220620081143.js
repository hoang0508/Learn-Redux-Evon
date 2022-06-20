import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./App.css";
import Counter from "./components/Counter";
import Card from "./uis/Card";

function App() {
  // const count = useSelector((state) => state.counter.count);
  return (
    <>
      {/* <h2>This is count : {count}</h2>
      <Counter /> */}
      <Card />
    </>
  );
}

export default App;
