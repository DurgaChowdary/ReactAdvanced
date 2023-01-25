import React, { useState, useEffect } from 'react'
import { useFetch } from './2-useFetch'

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
/* Custom hooks help us to reuse the functionality. We are not talking about HTML elements like Components. We are talking about functionality - Calling APIs, accessing the data store etc.*/

const url = 'https://course-api.com/javascript-store-products'

const Example = () => {
  const {loading, products} = useFetch(url)
  
  console.log(products)
  return (
    <div>
      <h2>{loading ? 'loading...' : 'data'}</h2>
    </div>
  )
}

export default Example
