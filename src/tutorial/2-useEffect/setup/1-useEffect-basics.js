import React, { useState, useEffect } from 'react';

/* useEffect hook is another vital React hook that is used to tdeal with side effects.
   Side effects is anything outside of the component - Changing the document title, setting event listeners etc.
   By default runs after every re-render
   There is a cleanup function
   Second parameter - Dependency List */

const UseEffectBasics = () => {
  const [count, setCount] = useState(0)
  const [value, setValue] = useState(10)

  // We can't have the conditional statement outside the hooks, but we ca have them within the callack function to consitionally render
  // Dependency List - [] -> useEffect runs on the initial render.
  // Dependency List -[count] -> Only when the count variable changes/updates
  // We can have multiple useEffects hooks
  useEffect(() => {
    if(count > 1 ) {
      console.log("In Use Effect")
      document.title = "Updated React App " + count.toString()
    }
    }, [count])
  useEffect(() => {
    console.log("Only runs the first time")
    }, [])
    
  return <>
    <h3>{count}</h3>
    <button className='btn' onClick={() => setCount(count+1)}>Increment Count</button>
    <button className='btn' onClick={() => setValue(value-1)}>Decrement Count</button>
  </>
};

export default UseEffectBasics;
