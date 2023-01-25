import React, { useState } from 'react';
import {data} from "../../../data"

// more components
// fix - context api, redux (for more complex cases)

/* Prop Drilling - It is not an official term - It is a side effect when you have multiple components and when you
have to start passing state from the top to the bottom of the tree. 
Ideally we will have to pass removePerson from the top most component to the last Component, while the List component doesn't require it. */

const PropDrilling = () => {
  const [people, setPeople] = useState(data)
  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter(person => {return person.id != id})
    })
  }
  return <>
    <section>
      <h3>Prop Drilling</h3>
      <List people={people} removePerson={removePerson}/>
    </section>
  </>
};

const List = ({people, removePerson}) => {
  console.log(people, removePerson)
  return <>
    {people.map((person) => {
      return <Person key={person.id} {...person} removePerson={removePerson}/>
    })}
  </>
} 

const Person = ({id, name, removePerson}) => {
  return <div key={id} className='item'>
    <h4>{name}</h4>
    <button onClick={() => removePerson(id)}>Remove</button>
  </div>
}

export default PropDrilling;
