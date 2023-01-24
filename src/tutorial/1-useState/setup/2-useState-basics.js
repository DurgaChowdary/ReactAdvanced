import React, { useState } from 'react';

const UseStateBasics = () => {
  // useState() returns ar array [stateValue, function]). useState can take a default value
  // Hooks can't be called conditionally (the initialization). It needs to be in the component body
  const [text, setText] = useState("Default Text")
  const handleClick = () => {
    if(text === "Default Text") {
      setText("Changed Value")
    }
    else {
      setText("Default Text")
    }
  }
  return <>
  <h2>{text}</h2>
  <button className="btn" onClick={handleClick}> Click Me </button>
  </>
};

export default UseStateBasics;
