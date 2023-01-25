import React, { useState, useReducer, useEffect } from 'react';
import Modal from './Modal';
import { data } from '../../../data';
// reducer function

/* useReducer hook is used when we have a more complicated setup as per the state. 
  This will add more structure to the code. A simple To-Do, can use useState though.
  In order to change anything in the state, we'd need to dispatch values
  Need to return a new state/update state
  What you dispatch in the function will be seen as an action here in the reducer
*/
const reducer = (state, action) => {
  // actions - What we are trying to do
  if(action.type === "ADD_ITEM") {
    const newPeople = [...state.people, action.payload]
    console.log("newPeople ", newPeople)
    return {...state, people: newPeople, isModalOpen: true, modalContent: "Item added"} 
  }
  else if(action.type === "NO_VALUE") {
    return {...state, isModalOpen: true, modalContent: 'Please enter a name'}
  }
  else if(action.type === "REMOVE_ITEM") {
    const newPeople = state.people.filter((person) => {return person.id !== action.id})
    console.log("newPeople ", newPeople)
    return {...state, people: newPeople, isModalOpen: true, modalContent: 'Please enter a name'}
  }
   else if(action.type === "CLOSE_MODAL") {
    return {...state, isModalOpen: false, modalContent: ''}
  }
  else {
    throw new Error("No valid dispatch type")
  }
}
// You have to create a default state - an object where we have multiple properties.
// useReducer is being used as we only want to update these values on dispatch and everything can be handled in one place.
const initialState = {
  people: [],
  isModalOpen: false,
  modalContent: 'basic'
}

const Index = () => {
  const [name, setName] = useState("")
  // When we invoke useReducer, we get state values and the dispatch function. Reducer function is something that takes an old state and taken an action to give a new state.
  const [state, dispatch] = useReducer(reducer, initialState)
  
  const handleSubmit = (e) => {
    e.preventDefault()
    if(name) {
      // dispatch needs to be passed wih an object with a property type
      const newName = {id:new Date().getTime().toString(), name}
      dispatch({type: 'ADD_ITEM', payload: newName})
      setName('')
    }
    else{
      dispatch({"type": "NO_VALUE"})
    }
  }
  const removeItem = (id) => {
    dispatch({"type" : "REMOVE_ITEM", id})
  }
  const closeModal = () => {
    dispatch({type: "CLOSE_MODAL"})
  }

  return <>
    {state.isModalOpen && (<Modal closeModal={closeModal} modalContent={state.modalContent}/>)}
    <form className="form" onSubmit={handleSubmit}>
      <input type="text" name="" id="" value={name} onChange={(e) => setName(e.target.value)}/>
      <button className='btn' type="submit">Add Item</button>
    </form>
    {state.people.map((person) => {
      const {id, name} = person
      return <div key={id} className="item">
        <h5>{name}</h5>
        <button onClick={() => removeItem(id)}>Remove</button>
        </div>
    })}
  </>
};

export default Index;
