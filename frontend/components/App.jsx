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
import ProjectFormContainer from './project_form/project_form_container';
import ProjectNavContainer from './project_nav/project_nav_container';
import ProjectPageContainer from './project_page/project_page_container';
import NavContainer from './nav/nav_container';
import CategoriesContainer from './categories/categories_container';
import CategoryContainer from './category/category_container';



const App = () => (
  <div>
    <header>
      <nav className= "top_nav">
        <nav className= "top_nav_left">
          <NavContainer />
        </nav>
        <nav className="top_nav_middle">
          <a href=""><img src="https://fontmeme.com/permalink/170718/0b45c2e790d7ac2f0d6e769ed432209a.png" alt="kickstarter-font" /></a>
          <a href=""><img src="https://fontmeme.com/permalink/170719/dc6be872d1ee5e4dba5598ccae1bd265.png" alt="kickstarter-font" /></a>
        </nav>
        <nav className= "top_nav_right">
        <GreetingContainer />
        </nav>
      </nav>
    </header>
    <switch>
      <AuthRoute path="/login" component={SessionFormContainer} />
      <AuthRoute path="/signup" component={SessionFormContainer} />
    </switch>
    <Route exact path='/' component={ ProjectNavContainer} />
    <ProtectedRoute path='/new' component={ ProjectFormContainer} />
    <Route exact path='/project/:projectId' component={ ProjectPageContainer} />
    <Route exact path='/categories' component={CategoriesContainer} />
    <Route exact path='/category/:categoryId' component={CategoryContainer}/>
  </div>
);

export default App;
