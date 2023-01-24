import React, { useState, useEffect } from 'react';

const ShowHide = () => {
  const [show, setShow] = useState(false)
  return <>
    <button className='btn' onClick={() => setShow(!show)}>
      Show/Hide
    </button>
    {show && <Item />}
  </>
};

const Item = () => {
  const [size, setSize] = useState(window.innerWidth)
  const changeSize = () => {
    setSize(window.innerWidth)
  }
  useEffect(() => {
    window.addEventListener('resize', changeSize)
    return () => {
      window.removeEventListener('resize', changeSize)
    }
  }, [])
  return <div style={{marginTop: '2rem'}}>
      <h1>Window Size : {size} px</h1>
  </div>
}

export default ShowHide;
