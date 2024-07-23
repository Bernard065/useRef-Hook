import React, { useEffect, useRef, useState } from "react";

const MutableValues = () => {
  const [count, setCount] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setCount((prevCount) => prevCount + 2);
      console.log(timerRef.current);
    }, 1000);

    return () => {
      clearInterval(timerRef.current);
      
    };
  }, []);

  return (
    <div>
      <h1>Timer: {count}</h1>
      <button onClick={() => clearInterval(timerRef.current)}>
        Stop Timer
      </button>
    </div>
  );
};

export default MutableValues;
