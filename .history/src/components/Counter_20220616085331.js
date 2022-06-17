import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(() => count + 1);
  };
  const decrement = () => {
    setCount(() => count - 1);
  };
  return (
    <div className="flex flex-col items-center p-5 bg-white shadow">
      <h2>Count: {count}</h2>
      <div className="flex justify-center items-center gap-x-5">
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
    </div>
  );
};

export default Counter;
