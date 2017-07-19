import React from 'react';
import { Link } from 'react-router-dom';


const sessionLinks = () => (
  <nav className="login-signup">
    <div className="auth_box">
    <Link to="/login">Login</Link>
    </div>
    <div className="auth_box">
    <Link to="/signup">Sign up!</Link>
    </div>
  </nav>
);

const personalGreeting = (currentUser, logout) => (
	<hgroup className="header-group">
    <h2 className="header-name">Hi, {currentUser.username}!</h2>
    <button className="header-button" onClick={logout}>Log Out</button>
	</hgroup>
);

const Greeting = ({ currentUser, logout }) => (
  currentUser ? personalGreeting(currentUser, logout) : sessionLinks()
);

export default Greeting;
