import React from 'react';
import STORE from './Store';

const ListComponent = (props) => {
  return (
    <>
      <h2>{props.listItem.header}</h2>
      {props.listItem.cardIds.map((cardIds)=> {
        return <STORE key={cardIds} />
      })}
    </>
  )
}

/*
Q: I'm having trouble creating and passing props between components 
benefits of using class component vs component
*/

export default ListComponent;