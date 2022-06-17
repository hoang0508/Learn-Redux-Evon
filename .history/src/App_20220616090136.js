import React, { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h2>This is count {count}</h2>
      <Counter count={count} setCount={setCount} />
    </>
  );
}

export default App;
