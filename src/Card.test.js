import React from 'react';
import ReactDOM from 'react-dom';
import CardComponent from './Card';
import renderer from 'react-test-renderer';

describe('Card Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
      ReactDOM.render(<CardComponent />, div);
      ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI as expected', () => {
    const tree = renderer
      .create(<CardComponent title ="test title"/>)
      .toJSON();
      console.log(tree);
      expect(tree).toMatchSnapshot();  
  });
  
})
