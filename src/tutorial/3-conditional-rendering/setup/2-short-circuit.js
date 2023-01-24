import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator - Will give two possible values

const ShortCircuit = () => {
  const [text, setText] = useState('');
  // const firstValue = text || 'hello world'; // If text is truthy, returns first value. Else, second value
  // const secondValue = text && 'hello world'; // If text is truthy, returns second value. Else, first value
  const [isError, setIsError] = useState(false)
  return <>
    {/* <h1>{firstValue}</h1>
    <h1>{secondValue}</h1> */}
    <h1>{text || 'Default Value'}</h1>
    <button className='btn' onClick={() => setIsError(!isError)}>Toggle Error</button>
    {isError ? <h1>Error...</h1> : <h1>No Error...</h1>}

  </>
};

export default ShortCircuit;
