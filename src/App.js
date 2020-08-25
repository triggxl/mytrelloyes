import React from 'react';
import CardComponent from './Card';
import STORE from './Store';
import ListComponent from './List';

const App = (props) => {
  console.log(props.store);
  return (
      <div>
        {props.store.lists.map((listItem)=> {
          //passing props for entire list item && store (index.js)
          return <ListComponent header={listItem.header} cards={props.store.cards} />
        })}
        <CardComponent />
        {/* <STORE /> */}
      </div>
  )
}

export default App;