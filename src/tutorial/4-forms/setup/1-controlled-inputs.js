import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange
/* Controlled Component - If the dform data in a component is controlled by the React component itself, then it is called a controlled component.
In Uncontrolled components, the data is handled by the DOM itself. */

// React will complain if you add a value in the input type but without an onChange listener

const ControlledInputs = () => {
  const [firstName, setName] = useState('');
  const [email, setEmail] = useState('');
  const [people, setPeople] = useState([]);

  const handleSubmit = (e) => {
    // Saying the browser to not reload on form submit, and we will take care of the same.
    e.preventDefault()
    if(firstName && email) {
      const person = {
        firstName,
        email
      }
      console.log(person)

      setPeople((people) => {
        return [...people, person]
      })
      console.log(people)
      setName('')
      setEmail('')
    }
  }
  // value property to reference to a state variable and an onChange to trigger the change - value property co-exists with the onChange listener
  return <>
  <article>
    <form className='form' onSubmit={handleSubmit}>
      <div className='form-control'>
        <label htmlFor="firstName">Name : </label>
        <input type="text" id="firstname" name="firstName" value={firstName} onChange={(e) => setName(e.target.value)}/>
      </div>
      <div className='form-control'>
        <label htmlFor="email">Email : </label>
        <input type="text" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
      </div>
      <button type="submit"> Add Person </button>
    </form>
    {people.map((person, index) => {
      const {firstName, email} = person
      return(<div key={index} className="item">{firstName} : {email}</div>)
    })}
  </article>

  </>
};

export default ControlledInputs;
