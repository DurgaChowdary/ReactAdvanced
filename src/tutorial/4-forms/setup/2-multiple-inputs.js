import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange
// dynamic object keys

/* If you 10 different state values, you wouldn't want to create 10 different state values and functions to handle them. */
const ControlledInputs = () => {
  const [people, setPeople] = useState([]);
  const [person, setPerson] = useState({firstName:'', email:'', age:''});

  const handleChange = (e) => {
    // Whenever I call my handleChange, we check for the name of the element and then use the value of the input
    // Dynamic Object properties - [var] : value
    const name = e.target.name
    const value = e.target.value
    setPerson({...person, [name]: value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(person.firstName && person.email && person.age) {
      const newPerson = {...person, id:new Date().getTime().toString()}
      setPeople([...people, newPerson])
      setPerson({firstName:'', email:'', age:''})
    }
  }
  return (
    <>
      <article>
        <form className='form' onSubmit={handleSubmit}>
          <div className='form-control'>
            <label htmlFor='firstName'>Name : </label>
            <input
              type='text'
              id='firstName'
              name='firstName'
              value={person.firstName}
              onChange={handleChange}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='email'>Email : </label>
            <input
              type='email'
              id='email'
              name='email'
              value={person.email}
              onChange={handleChange}
            />
          </div>
          <div className='form-control'>
            <label htmlFor='age'>Age : </label>
            <input
              type='age'
              id='age'
              name='age'
              value={person.age}
              onChange={handleChange}
            />
          </div>
          <button type='submit' onClick={handleSubmit}>add person</button>
        </form>
        {people.map((person, index) => {
          const { id, firstName, email, age } = person;
          return (
            <div className='item' key={id}>
              <h4>{firstName}</h4>
              <p>{email}</p>
               <p>{age}</p>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default ControlledInputs;
