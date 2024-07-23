import React, { useEffect, useRef, useState } from "react";

const PreviousState = () => {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef();

  useEffect(() => {
    prevCountRef.current = count;
  }, [count]);

  const prevCount = prevCountRef.current;

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Current Count: {count}</h1>
      <h2>Previous Count: {prevCount}</h2>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default PreviousState;
