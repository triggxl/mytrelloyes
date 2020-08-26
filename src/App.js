import React from 'react';
import CardComponent from './Card';
import STORE from './Store';
import ListComponent from './List';

const App = props => {
  console.log(props.store);
  return (
      <div>
        {/* mapping through variable listItem and returning ListComponent with props of listItem, cards, and key */}
        {props.store.lists.map((listItem)=> {
          //passing props for entire list item && store (index.js)
          //.find to pass down to list component to grab cards in cards array
          return <ListComponent listItem={listItem} cards={props.store.allCards} key={listItem.id} />
        })}
        {/* <CardComponent />
        <STORE /> */}
      </div>
  )
}

export default App;

/*
1. create new component file ex: ContactCard.js
2. create component instances to use <ContactCard />
3. add import to file where component is used in order to access new instances
4. create props or "attributes" for each instance, unique to the dynamic information you are trying to pass
  <ContactCard name="Mr. Wiskerson" imgURL: "www.cat.com" phone:"9824938438 email: ""/>
5. add function parameter (props) to file where props will be passed
*/
/*
The App component should render markup matching the design.html: the main element, a header with the h1 and a div with class 'App-list'.
The App component will accept 1 prop, store.
The store prop is an object with 2 keys: lists and allCards.
lists is an array of objects.
allCards is an object where each key is a card's ID and the value is the card object with a title and content.
You'll be given a dummy STORE object to pass to your App.
The App should render a List component for each of the items in the store.lists array.
Each instance of the List component should be passed 2 props (and a key). The 2 props are header and cards.
The header prop is a string for the List's header.
The cards prop will be an array of card objects.
You'll need to combine the cardIds array for the list with the allCards object.
*/