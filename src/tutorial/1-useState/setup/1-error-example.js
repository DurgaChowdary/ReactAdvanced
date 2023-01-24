import React from 'react';

const ErrorExample = () => {
  let title = "Random Title"
  /* Even if the title is being updated on the button click and gets printed, 
  it doesn't get updated on the screen as re-rendering doesn't happen */
  const handleClick = () => {
    title = "Updated Title"
    console.log(title)
  }
  return <>
   <h2>{title}</h2>
   <button className="btn" onClick={handleClick}>Change Title</button>
   </>
};

export default ErrorExample;
