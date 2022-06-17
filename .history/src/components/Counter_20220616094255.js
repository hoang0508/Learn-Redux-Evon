import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "../redux/counter";

const Counter = (props) => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  const handleIncrement = () => {
    // setCount(() => count + 1);
    dispatch(increment());
  };
  // const decrement = () => {
  //   setCount(() => count - 1);
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
        {/* <button
          className="inline-block border-gray-200 p-2 border"
          onClick={decrement}
        >
          Decrement
        </button> */}
      </div>
    </div>
  );
};

export default Counter;
