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
      <div className="project_page_background">
        <div className="project_form_container">
          <header className="project_form_title">
          </header>
        <div className="project_form_input_container">
            <form onSubmit={this.handleSubmit}
              className="project_form_box">

              {this.renderErrors()}
              <div className="project_input_div">
                <div className="project_input_title_div">
                  <p>title</p>
                </div>

                <div className="project_input_description_div">
                <label>

                <input type="input"
                  placeholder="title"
                  value={this.state.title}
                  onChange={this.update('title')}
                  className="project-input"
                />
              </label>
                <div className="project_input_description">
                <p>Our search looks through words from your project title
                  and blurb, so make them clear and descriptive of what
                  you’re making. Your profile name will be searchable, too.

                  These words will help people find your project, so
                  choose them wisely! Your name will be searchable
                  too.</p>
                </div>
              </div>
            </div>
            <div className="project_input_div">
              <div className="project_input_title_div">
                <p>description</p>
              </div>
            <label>
              <input type="text"
                placeholder="description"
                value={this.state.description}
                onChange={this.update('description')}
                className="project-input"
              />
            </label>
            </div>
            <div className="project_input_div">
            <label>
                <input type="text"
                  placeholder="tagline"
                  value={this.state.tagline}
                  onChange={this.update('tagline')}
                  className="project-input"
                />
              </label>
            </div>
            <div className="project_input_div">
            <label>end_date
                <input type="date"
                  placeholder="end_date"
                  value={this.state.end_date}
                  onChange={this.update('end_date')}
                  className="project-input"
                />
              </label>
            </div>
            <div className="project_input_div">
            <label>
                  <input type="number"
                    placeholder="funding_goal"
                    value={this.state.funding_goal}
                    onChange={this.update('funding_goal')}
                    className="project-input"
                  />
                </label>
            </div>
            <div className="project_input_div">
            <select value={this.state.category_id}
                    onChange={this.update('category_id')} >
                  <option value="1">Art</option>
                  <option value="2">Comics</option>
                  <option value="3">Design</option>
                  <option value="4">Food</option>
                  <option value="5">Games</option>
                  <option value="6">Music</option>
                  <option value="7">Technology</option>
                </select>
            </div>
            <input className="session_submit_button"
                   type="submit"
                   value="Submit" />
            </form>
        <div className="project_form_sidebar" >

        </div>
        </div>
      </div>
      </div>

    );
  }
}

export default ProjectForm;
