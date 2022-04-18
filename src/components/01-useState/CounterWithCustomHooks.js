import React from "react";
import { useCounter } from "../customHooks/useCounter";
export const CounterWithCustomHooks = () => {
  const { state, increment, decrement } = useCounter();

  return (
    <>
      <h1>Counter with Hooks: {state}</h1>
      <hr />

      <button onClick={() => increment(2)} className="btn">
        +
      </button>
      <button onClick={() => decrement(1)} className="btn">
        -
      </button>
    </>
  );
};
