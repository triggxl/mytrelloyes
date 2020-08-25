import React from 'react';
import ListComponent from './List';

const CardComponent = props => {
  return (
    <>
      <div className="Card">
        <h3>{props.title}</h3>
        <p>{props.content}</p>
      </div>
    </>
  )
}

export default CardComponent;

/* 
I'm having trouble figuring out the remaining objectives for this assignment. 
Will you help me write out some pseudo code for what I have left to include?

write functions to return the HTML. 
Pass variables as props, 
and HTML elements as children
*/