import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import HackerNews from "./components/hackerNews";

function App() {
  return (
    <>
      <HackerNews></HackerNews>
    </>
  );
}

export default App;
