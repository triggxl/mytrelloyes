import React from 'react';
import STORE from './Store';
import CardComponent from './Card';

const ListComponent = (props) => {
  return (
    <>
      <STORE {allCards.title}/>
      <h2>{props.listItem.header}</h2>
      {props.listItem.cardIds.map(cardId => {
        console.log(props);
        return <CardComponent cardId={cardId}/>
      })}
    </>
  )
}


export default ListComponent;

/*
"deletion debugging"
The List component should render markup matching the design.html: a section with a class of 'List', containing a header and div with class 'List-cards'.
The List component accepts 2 props: header and cards.
header is a string of the header of the card to render.
cards is an array of card objects. Each object should have a title and content.
These props will be passed in for each List from the App component.
The List should render a Card component for each of the cards in the cards array prop.
Each instance of the Card component should be passed 2 props (and a key). The 2 props are title and content.
The title prop is a string for the Card's title.
The content prop is a string of the Card's content.
*/

/*
Q: I'm having trouble creating and passing props between components 
benefits of using class component vs component
*/
