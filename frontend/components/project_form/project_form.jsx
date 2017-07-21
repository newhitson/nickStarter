import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class ProjectForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      image_url: 'url',
      description: '',
      tagline: '',
      end_date: '',
      funding_goal: 0,
      creator_id: this.props.session.currentUser.id,
      category_id: 5
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  renderErrors() {
    return(
      <ul className="project_errors">
        {this.props.errors.map((error, i) => (
          <li className="project_errors" key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    const project = this.state;
    this.props.createProject({project});
  }

  render() {
    return (
      <div className="project-form-container">
        <br/>
          <br/>
            <br/>
              <br/>
                <br/>
                  <br/>
        <form onSubmit={this.handleSubmit} className="project-form-box">
          <br/>
          {this.renderErrors()}
          <div className="login-form">
            <br/>
            <label>
              <input type="input"
                placeholder="title"
                value={this.state.title}
                onChange={this.update('title')}
                className="project-input"
              />
            </label>
            <br/>
            <label>
              <input type="text"
                placeholder="description"
                value={this.state.description}
                onChange={this.update('description')}
                className="project-input"
              />
            </label>
            <br/>
              <label>
                <input type="text"
                  placeholder="tagline"
                  value={this.state.tagline}
                  onChange={this.update('tagline')}
                  className="project-input"
                />
              </label>
            <br/>
              <label>end_date
                <input type="date"
                  placeholder="end_date"
                  value={this.state.end_date}
                  onChange={this.update('end_date')}
                  className="project-input"
                />
              </label>
              <br/>
                <label>
                  <input type="number"
                    placeholder="funding_goal"
                    value={this.state.funding_goal}
                    onChange={this.update('funding_goal')}
                    className="project-input"
                  />
                </label>
              <br/>
                <select value={this.state.category_id} onChange={this.update('category_id')} >
                  <option value="1">Art</option>
                  <option value="2">Comics</option>
                  <option value="3">Design</option>
                  <option value="4">Food</option>
                  <option value="5">Games</option>
                  <option value="6">Music</option>
                  <option value="7">Technology</option>
                </select>
            <input className="session_submit_button"
                   type="submit"
                   value="Submit" />
            <br/>
          </div>
        </form>
      </div>
    );
  }
}

export default ProjectForm;
