import React from 'react';
import { Link } from 'react-router-dom';


const sessionLinks = (clearErrors) => (
  <nav className="login-signup">
    <div className="auth_box">
    <Link to="/login"
          onClick={clearErrors}>Login</Link>
    </div>
    <div className="auth_box">
    <Link to="/signup"
          onClick={clearErrors}>Sign up!</Link>
    </div>
  </nav>
);

const personalGreeting = (currentUser, logout) => (
	<hgroup className="header-group">
    <h2 className="header-name">Your're logged in as {currentUser.username}!</h2>
    <button className="sign_up_button" onClick={logout}>Log Out</button>
	</hgroup>
);

const Greeting = ({ currentUser, logout, clearErrors }) => (
  currentUser ? personalGreeting(currentUser, logout) : sessionLinks(clearErrors)
);

export default Greeting;
