import React, { useState } from 'react';

const UseStateCounter = () => {
  const [count, setCount] = useState(0)
  // setCount is asynchronous. Whenever you click it is only going to think the value is ols value.
  // setState is an asynchronous function and the updates will not be seen immediately.
  const increment = () => {
    setTimeout(() => {
      // setCount[count+1]
      // This gets the updated value, not the one that was called 2 seconds ago. So if you click on the button 10 times continuously, it will consider the right values.
      setCount((prevState) => {
        return prevState + 1;
      })
    }, 2000)
  }
  return <>
    <section style={{margin:'4rem 0'}}>
      <h2>Regular Counter</h2>
      <h1>{count}</h1>
      <button className='btn' onClick={() => setCount(count+1)}>Increment</button>
      <button className='btn' onClick={() => setCount(count-1)}>Decrement</button>
      <button className='btn' onClick={() => setCount(0)}>Reset</button>
    </section>

     <section style={{margin:'4rem 0'}}>
      <h2>Complex Counter</h2>
      <h1>{count}</h1>
      <button className='btn' onClick={increment}>Increment Later</button>
    </section>
  </>
};

export default UseStateCounter;
