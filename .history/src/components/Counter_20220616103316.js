import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../redux/counter";

const Counter = (props) => {
  const [incrementAmount, setIncrementAmount] = useState(2);
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  const handleIncrement = () => {
    // setCount(() => count + 1);
    dispatch(increment());
  };
  const handleDecrement = () => {
    // setCount(() => count - 1);
    dispatch(decrement());
  };
  return (
    <div className="flex flex-col items-center p-5 bg-white shadow w-[400px] mx-auto mt-10">
      <h2 className="mb-5">Count: {count}</h2>
      <div className="flex justify-center items-center gap-x-5">
        <button
          className="inline-block border-gray-200 p-2 border"
          onClick={handleIncrement}
        >
          Increment
        </button>
        <button
          className="inline-block border-gray-200 p-2 border"
          onClick={handleDecrement}
        >
          Decrement
        </button>
      </div>
      <div className="mt-3">
        <input
          className="border border-gray-200 p-3"
          type="text"
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button className="inline-block border-gray-200 p-2 border bg-blue-500 text-white">
          Add Amount
        </button>
      </div>
    </div>
  );
};

export default Counter;
