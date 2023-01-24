import React, {useState} from 'react';
import { data } from '../../../data';

const UseStateArray = () => {
  const [people, setPeople] = useState(data)
  const handleDelete = (id) => {
    const newPeople = people.filter((person) => {
      return person.id !== id
    })
    setPeople(newPeople)
  }
  return(<>
    {people.map((person) => {
        const {id, name} = person;
        return(<div key={id} className="item">{name}
        <button className='btn' onClick={() => handleDelete(id)}>Delete {name}</button>
        </div>)
      })
    }
    <button className='btn' onClick={() => {setPeople([])}}>Delete People</button>
  </>)
};

export default UseStateArray;
