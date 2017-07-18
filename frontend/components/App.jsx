import React from 'react';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';



import GreetingContainer from './greeting/greeting_container';
import SessionFormContainer from './session_form/session_form_container';


const App = () => (
  <div>
    <header>
      <h1>nickStarter</h1>
      <GreetingContainer />
    </header>
    <switch>
      <Route path="/login" component={SessionFormContainer} />
      <Route path="/signup" component={SessionFormContainer} />
    </switch>
  </div>
);

export default App;
