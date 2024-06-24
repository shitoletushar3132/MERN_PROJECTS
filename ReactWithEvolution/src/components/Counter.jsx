import React from "react";
import { useState } from "react";

export default function Counter() {
  let [counter, setCounter] = useState(0);

  function increase() {
    setCounter((prevCounter) => prevCounter + 1);
  }

  return (
    <div>
      <h1>Counter = {counter}</h1>
      <button onClick={(increase)}>Click to increase</button>
    </div>
  );
}
