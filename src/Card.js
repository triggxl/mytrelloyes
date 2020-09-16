import React from 'react';
import './Card.css';

const CardComponent = props => { 
  return ( 
    <> 
      <div className="Card"> 
        <h3>{props.title}</h3> 
        <p>{props.content}</p>
        {/* passing deleteCard from app as CBfx to say 'hey delete the title and content of this selected list'  */}
        <button onClick={()=> props.deleteCard(props.id)}>Delete</button>
      </div> 
    </> 
    ) 
}

export default CardComponent;

/* 
The Card component should render markup matching the design.html: a div with a class of 'Card' containing an h3 for the card's title and a p element for the card's content.
The Card component accepts 2 props: title and content.
title is a string of the card's title.
content is a string of the card's content.
These props will be passed in for each Card from the List component.
*/

/*
write functions to return the HTML. 
Pass variables as props, 
and HTML elements as children
*/