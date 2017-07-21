import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class ProjectForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      image_url: '',
      description: '',
      tagline: '',
      end_date: '',
      funding_goal: '',
      creator_id: '',
      category_id: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const project = this.state;
    this.props.createProject({project});
  }

  render() {
    return (
      <div className="project-form-container">
        <form onSubmit={this.handleSubmit} className="project-form-box">
          <br/>
          // errors
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
              <label>
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
