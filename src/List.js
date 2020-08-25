import React from 'react';
import STORE from './Store';
import CardComponent from './Card';

const ListComponent = (props) => {
  return (
    <>
      <h2>{props.listItem.header}</h2>
      {props.listItem.cardIds.map(cardIds=> {
        return <CardComponent />
      })}
    </>
  )
}

/*
Q: I'm having trouble creating and passing props between components 
benefits of using class component vs component
*/

export default ListComponent;