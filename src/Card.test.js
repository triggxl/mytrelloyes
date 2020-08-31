import React from 'react';
import ReactDOM from 'react-dom';
import CardComponent from './Card';

describe('Card Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CardComponent />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  
})
