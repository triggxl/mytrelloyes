import React from 'react';
import ReactDOM from 'react-dom';
import ListComponent from './List';
import renderer from 'react-test-renderer';

describe('List Component', () => {
  //wanting to pick something within ListComponent to add and remove an element to for smoke test
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ListComponent className="List-cards" />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('renders the UI as expected', () => {
    const tree = renderer
      .create(<ListComponent header = {'test header'}/>)
      .toJSON();
      console.log(tree);
      expect(tree).toMatchSnapshot();  
  });
  //also need to create a snapshot test (what could I test as an example?)
})



