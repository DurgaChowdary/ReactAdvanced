import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth)
  const checkSize = () => {
    setSize(window.innerWidth)
  }
  // When you go to the developer tools and open the event listeners, there would have been multiple of them created on each re-render - This will cause a memory leak
  // So it's important to remove or clean up these side effect
  // Before  anything happens, i.e; set up a new event listener, the cleanup function is called. Clean up functions will be extremely important when the components needs to appear and dissappear
  useEffect(() => {
    console.log("useEffect")
    window.addEventListener('resize', checkSize)
    return () => {
      console.log("Clean-up")
      window.removeEventListener('resize', checkSize)
    }
  },[size])
  return <>
    <h3>Size of the window is : {size} PX</h3>
  </>
};

export default UseEffectCleanup;
