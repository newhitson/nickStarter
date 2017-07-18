import React from 'react';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';



import GreetingContainer from './greeting/greeting_container';
import SessionFormContainer from './session_form/session_form_container';


const App = () => (
  <div>
    <header>
      <h1>nickStarter</h1>
      <GreetingContainer />
    </header>
    <switch>
      <AuthRoute path="/login" component={SessionFormContainer} />
      <AuthRoute path="/signup" component={SessionFormContainer} />
    </switch>
  </div>
);

export default App;
