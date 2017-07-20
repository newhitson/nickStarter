import React from 'react';
import ReactDOM from 'react-dom';

import Root from './components/root';
import configureStore from './store/store';


// TESTING START
import { login, signup, logout} from './actions/session_actions';
import { receiveAllProjects, receiveSingleProject} from './actions/projects_actions';
// TESTING END

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  // TESTING START
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.login = login;
  window.signup = signup;
  window.logout = logout;
  window.receiveAllProjects = receiveAllProjects;
  window.receiveSingleProject = receiveSingleProject;
  // TESTING END

  const root = document.getElementById('root');
   ReactDOM.render(<Root store={ store }/>, root);
});
