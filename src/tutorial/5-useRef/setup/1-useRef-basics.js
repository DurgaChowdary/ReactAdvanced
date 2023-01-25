import React, { useEffect, useRef } from 'react';

// Preserves value - useRef works a lot like useState. It preserves the values between updates, but doesn't trigger re-render
// DOES NOT trigger re-render
// target DOM nodes/elements

// Uncontrolled inputs in forms using useRef hook - You can use useRef to focus on the input
const UseRefBasics = () => {
  const refContainer = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Reff ", refContainer.current.value)
  }
  useEffect(() => {
    refContainer.current.focus()
  })
  return <>
    <form className='form' onSubmit={handleSubmit}>
      <div>
        <input type="text" ref={refContainer}/>
        <button type="submit" >Submit</button>
      </div>
    </form>
  </>
};

export default UseRefBasics;
