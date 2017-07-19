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
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/');
    }
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    console.log(user);
    this.props.processForm({user});
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
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
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
      <Link className="sign_up_link" to="/signup"> Sign up!</Link>
      </span>
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
              <input type="text"
                placeholder="Password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input"
              />
            </label>
            <br/>
            { this.includeEmail() }
            <br/>
            <input className="session_submit_button" type="submit" value="Submit" />
            <input className="session_guest_button" type="submit" value="Guest sign in" />
            <br/>
            { this.newTo() }
          </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
