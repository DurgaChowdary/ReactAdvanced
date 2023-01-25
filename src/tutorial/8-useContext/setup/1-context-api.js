import React, { useState, useContext } from 'react';
import { data } from '../../../data';


/* First, we need to create a context. Once we do this, we have access to two components - Provider and the Consumer 
With the introduction of useContext hook, we don't to create a Consumer. 
Provider acts as a distributor 
Introduce Context when there are more levels deep. You can set the Context one time globally.
*/

const PersonContext = React.createContext()


const ContextAPI = () => {
  const [people, setPeople] = useState(data);
  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id);
    });
  };
  return (
    <PersonContext.Provider value={{removePerson, people}}>
      <h3>Context API / useContext Hook</h3>
      <List />
    </PersonContext.Provider>
  );
};

const List = () => {
  const mainData = useContext(PersonContext)
  return (
    <>
      {mainData.people.map((person) => {
        return (
          <SinglePerson
            key={person.id}
            {...person}
          />
        );
      })}
    </>
  );
};

const SinglePerson = ({ id, name }) => {
  const {removePerson} = useContext(PersonContext)
  return (
    <div className='item'>
      <h4>{name}</h4>
      <button onClick={() => removePerson(id)}>remove</button>
    </div>
  );
};

export default ContextAPI;
