import React from 'react';
import ListComponent from './List';
import './App.css';
import CardComponent from './Card';

class App extends React.Component {
  //gives us access to parent component React.Component including setState
  constructor(props){
    super(props)
    this.state = {
      lists: [
        {
          id: '1',
          header: 'First list',
          cardIds: [ 'a', 'b', 'e', 'f', 'g', 'j', 'l', 'm' ],
        },
        {
          id: '2',
          header: 'Second list',
          cardIds: ['b', 'c', 'd', 'f', 'h', 'i', 'k'],
        },
        {
          id: '3',
          header: 'Third list',
          cardIds: [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm' ],
        },
        {
          id: '4',
          header: 'Fourth list',
          cardIds: [ 'l', 'm' ],
        },
      ],
      allCards: {
        'a': { id: 'a', title: 'First card', content: 'lorem ipsum' },
        'b': { id: 'b', title: 'Second card', content: 'lorem ipsum' },
        'c': { id: 'c', title: 'Third card', content: 'lorem ipsum' },
        'd': { id: 'd', title: 'Fourth card', content: 'lorem ipsum' },
        'e': { id: 'e', title: 'Fifth card', content: 'lorem ipsum' },
        'f': { id: 'f', title: 'Sixth card', content: 'lorem ipsum' },
        'g': { id: 'g', title: 'Seventh card', content: 'lorem ipsum' },
        'h': { id: 'h', title: 'Eighth card', content: 'lorem ipsum' },
        'i': { id: 'i', title: 'Ninth card', content: 'lorem ipsum' },
        'j': { id: 'j', title: 'Tenth card', content: 'lorem ipsum' },
        'k': { id: 'k', title: 'Eleventh card', content: 'lorem ipsum' },
        'l': { id: 'l', title: 'Twelfth card', content: 'lorem ipsum' },
        'm': { id: 'm', title: 'Thirteenth card', content: 'lorem ipsum' },
      },
    }
  }
 omit = (obj, keyToOmit) => {
  let {[keyToOmit]: _, ...rest} = obj;
  return rest;
}
//9/15 fundamentals of array methods, event handlers (JS fundamentals review)
//binding allow you to reference the parent function where the function was created 'allows fx to be called where it was created (arrow syntax handles binding for you), event handlers
handleDeleteCard = (cardId) => {
  console.log(cardId);
  const { lists, allCards } = this.state;

  const newLists = lists.map(list => ({
    ...list,
    //grab only cardIds
    cardIds: list.cardIds.filter(id => {
      console.log(id); 
      return id !== cardId})
  }));
  console.log(newLists)
  //9/15 1905: log if uncorrect figure out why, if correct figure out why your state isn't updating
  //(whatToOmit, returnsNewObject)
  const newCards = this.omit(allCards, cardId);
  console.log(newCards)
  this.setState({
      lists: newLists,
      allCards: newCards
  })
};
 handleAddRandomCard () {
  const newRandomCard = () => {
    const id = Math.random().toString(36).substring(2, 4)
      + Math.random().toString(36).substring(2, 4);
    return {
      id,
      title: `Random Card ${id}`,
      content: 'lorem ipsum',
    }
  }
  this.setState({lists: newRandomCard})
 }
 render() {
  return (
      <>
        <header>
          <h1 className="App-list"></h1>
          <div className="App-list">
            {this.props.store.lists.map((listItem, index)=> {
              const cardDetailsArray = listItem.cardIds.map(cardLetter => {
                // returning card details in the allCards object
                return this.props.store.allCards[cardLetter]; 
              })
              //creating props to pass to ListComponent
              return <ListComponent deleteCard={this.handleDeleteCard} header={listItem.header} cards={cardDetailsArray}/>
            })}
          </div>
        </header>
      </>
  )
 }
}

export default App;

/*
1. create new component file 
  ex: ContactCard.js
2. create component instances to use 
  ex: <ContactCard />
3. add import to file where component is used in order to access new instances
4. create props or "attributes" for each instance, unique to the dynamic information you are trying to pass
  <ContactCard name="Mr. Wiskerson" imgURL= "www.cat.com" phone="9824938438" email=""/>
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