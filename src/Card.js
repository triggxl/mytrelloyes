import React from 'react';
import ListComponent from './List';

const CardComponent = props => {
  return (
    <>
      <div className="Card">
        <h3>{props.title}</h3>
        <p>{props.content}</p>
        <ListComponent />
      </div>
    </>
  )
}

export default CardComponent;

/* 
write functions to return the HTML. 
Pass variables as props, 
and HTML elements as children
*/