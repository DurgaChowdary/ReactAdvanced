import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';

// In a function, we can have no return - returns an error as it will be undefined.
// We can have multiple returns based on conditions
const MultipleReturns = () => {
  const [user, setUser] = useState('default user')
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    fetch(url)
    .then((resp) => {
      if(resp.status >= 200 && resp.status <= 299){
        return resp.json()
      }
      else{
        setIsLoading(false)
        setIsError(true)
        throw new Error(resp.statusText)
      }
    })
    .then((user) => {
      const {login} = user
      setUser(login)
      setIsLoading(false)
    })
    .catch((error) => {
      setIsError(true)
      setIsLoading(false)
    })
  }, [])
  if(isLoading) {
    return <div>
      <h1>Loading...</h1>
    </div>
  }
  if(isError) {
    return <div>
      <h1>Error...</h1>
    </div>
  }
  else {
    return <div>
      <h1>{user}</h1>
    </div>
  }
};

export default MultipleReturns;
