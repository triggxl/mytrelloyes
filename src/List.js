import React from 'react';
import CardComponent from './Card';
import './List.css';

const ListComponent = (props) => {
  return (
    <>
      <section id={props.index} className="List">
        <header className="List-cards">
          <h2>{props.header}</h2>
        </header>
        <div className="List-cards" id="list-cards">
          {props.cards ? props.cards.map((cardDetails, index) => {
            return <CardComponent title={cardDetails.title} content={cardDetails.content} id={cardDetails.id} deleteCard={props.deleteCard}/> 
          }): " "} 
        </div>
      </section>
    </>
  )
}

//Error: https://www.debuggr.io/react-map-of-undefined/#wrapping-up --> You're trying to use an array before checking that it is defined

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
