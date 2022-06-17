import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./App.css";

function App() {
  const count = useSelector((state) => state.counter.count);
  return (
    <>
      <h2>This is count : {count}</h2>
      {/* <Counter count={count} setCount={setCount} /> */}
    </>
  );
}

export default App;
