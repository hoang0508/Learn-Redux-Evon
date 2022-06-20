import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../redux-tookit/counterSlice";
import { addamount } from "../redux/counter";
// import {
//   addamount,
//   decrement,
//   increment,
//   incrementAsync,
//   incrementIfOdd,
// } from "../redux/counter";

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

  // increment addAmount
  const handleAddAmount = () => {
    dispatch(addamount(Number(incrementAmount)));
  };

  // // increment async
  // const handleIncrementAsync = () => {
  //   dispatch(incrementAsync(Number(incrementAmount)));
  // };

  //
  // const handleIncrementIfOdd = () => {
  //   dispatch(incrementIfOdd(Number(incrementAmount)));
  // };
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
          type="number"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button
          onClick={handleAddAmount}
          className="inline-block border-gray-200 p-2 border bg-blue-500 text-white"
        >
          Add Amount
        </button>
      </div>
      {/*
      <div>
        <button
          onClick={handleIncrementAsync}
          className="inline-block border-gray-200 p-2 border bg-green-500 text-white"
        >
          Add Async
        </button>
      </div>
      <div>
        <button
          onClick={handleIncrementIfOdd}
          className="inline-block border-gray-200 p-2 border bg-purple-500 text-white"
        >
          Add If odd
        </button>
      </div> */}
    </div>
  );
};

export default Counter;
