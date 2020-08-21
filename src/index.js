import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import STORE from './Store';

ReactDOM.render(
  <React.StrictMode>
    <App store={STORE}/>
  </React.StrictMode>,
  document.getElementById('root')
);