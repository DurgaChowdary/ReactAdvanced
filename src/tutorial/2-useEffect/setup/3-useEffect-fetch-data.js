import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';

const UseEffectFetchData = () => {
  const [users, setUsers] = useState([]);
  const getUsers = async() => {
    const response = await fetch(url)
    const users = await response.json()
    setUsers(users)
    //setUsers(users) when no dependency array is set -> useEffect runs after every render, and the useState preserves the value and re-renders. So this goes into an infinite loop.
  }
  // You can make this function async-await as it returns a Promise. You can set it up inside the callback function.
  useEffect(() => {
    getUsers()
  }, [])
  return <>
    <h3>Github Users</h3>
    {users.map((user) => {
      const {id, login, avatar_url, html_url} = user
      return(<ul className='users'><li key={id}>
        <img src={avatar_url}></img>
        <div>
          <h4>{login}</h4>
          <a href={html_url}>Profile</a>
        </div>
        </li></ul>)
    })}
  </>
};

export default UseEffectFetchData;
