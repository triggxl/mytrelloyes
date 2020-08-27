import React from 'react';
import CardComponent from './Card';
import './List.css';

const ListComponent = (props) => {
  return (
    <>
      <section className="List">
        <header>
          <div className="List-cards"></div>
        </header>
      </section>
      <h2>{props.header}</h2>
      {props.cards.map(cardDetails => {
        return <CardComponent title={cardDetails.title} content={cardDetails.content} />
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
