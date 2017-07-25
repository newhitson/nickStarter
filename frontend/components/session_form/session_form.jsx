import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleGuestLogin = this.handleGuestLogin.bind(this);
    this.removeErrors = this.removeErrors.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    // if (nextProps.loggedIn) {
    //   this.props.history.push('/');
    // }
    // luke says this isnt needed because of authroutes? removed on 7.19.17
  }

  removeErrors(){
    this.props.clearErrors();
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm({user});
  }

  handleGuestLogin(e) {
    e.preventDefault();
    let user = {username: "BobbyTables", password: "password"};
    this.props.guestLogin({user})
    .then(res => this.props.history.push('/'));
  }

  navTitle() {
    if (this.props.formType === 'login') {
      return <h1 className="log_in_text">Log in</h1>;
    } else {
      return <h1 className="log_in_text">Sign up</h1>;
    }
  }

  renderErrors() {
    return(
      <ul className="auth_errors">
        {this.props.errors.map((error, i) => (
          <li className="auth_error" key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }
  newTo(){
    if (this.props.formType === 'login' ){
    return(
      <span className="sign_up_span">New to Nickstarter?
      <Link className="sign_up_link"
            to="/signup"
            onClick={this.removeErrors}> Sign up!</Link>
      </span>
    );
    }
  }

  haveAccount(){
    if (this.props.formType === 'signup' ){
    return(
      <div className="have-account-box">
      <span className="have_account_span">Have an account?
      <Link className="sign_up_link"
            onClick={this.removeErrors}
            to="/login"> Log in</Link>
      </span>
      </div>
    );
    }
  }

  includeEmail() {
    if (this.props.formType === 'signup' ){
    return(
      <label>
        <input type="text"
          placeholder="E-mail"
          value={this.state.email}
          onChange={this.update('email')}
          className="login-input"
        />
      </label>
    );
    }
  }


  render() {
    return (
      <div className="login-form-container">
        {this.haveAccount()}
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <br/>
          {this.navTitle()}
          {this.renderErrors()}
          <div className="login-form">
            <br/>
            <label>
              <input type="text"
                placeholder="Username"
                value={this.state.username}
                onChange={this.update('username')}
                className="login-input"
              />
            </label>
            <br/>
            <label>
              <input type="password"
                placeholder="Password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input"
              />
            </label>
            <br/>
            { this.includeEmail() }
            <br/>
            <input className="session_submit_button2"
                   type="submit"
                   value="Submit" />
            <input onClick={this.handleGuestLogin}
                   className="session_guest_button"
                   type="submit"
                   value="Guest sign in" />
            <br/>
            { this.newTo() }
          </div>
        </form>
      </div>
    );
  }
}

export default SessionForm;
