import React, { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({name:"Durga", age: 27, message:"Random Message"})
  const changeMessage = () => {
    // When you are using an object, you need to use a Spread operator to copy the old values and then update the new values.
    setPerson({...person, "message" : "Updated message"})
  }
  return <>
     <h3>{person.name}</h3>
     <h3>{person.age}</h3>
     <h3>{person.message}</h3>
     <button className='btn' onClick={changeMessage}>Change Message</button>
  </>
};

export default UseStateObject;
