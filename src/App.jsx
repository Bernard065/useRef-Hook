import React, { useRef } from "react";

const App = () => {
  const inputRef = useRef(null);

  const handleClick = () => {
    if (inputRef.current) {
      console.log(inputRef.current);
      inputRef.current.focus();
    }
  };
  return (<div>
    <input ref={inputRef} type="text" placeholder="Click the button to focus me" />
    <button onClick={handleClick}>Focus Me</button>
  </div>);
};

export default App;
