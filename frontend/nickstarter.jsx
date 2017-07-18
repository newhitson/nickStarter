import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';


document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  // just for testing
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  // just for testing
  const root = document.getElementById('root');
  ReactDOM.render(<h1>Welcome to nickStarter</h1>, root);
});
