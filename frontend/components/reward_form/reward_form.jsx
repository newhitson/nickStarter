import React from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';



class RewardForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      cost:'',
      project_id: this.props.match.params.projectId
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
// this.props.match.params.projectId
  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  componentWillMount(){
    this.props.requestSingleProject();
  }

  componentDidMount(){

  window.scrollTo(0,0);
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
    const reward = this.state;
    this.props.createReward({reward}).then(res=>
    this.props.history.push(`/project/${this.props.match.params.projectId}`)
    );
  }

  render() {
    if (!this.props.isOwner) {
      return( <Redirect to="/" />);
    }
    return (
      <div className="project_page_background">
        <div className="project_form_container">
          <header className="project_form_title">
            <div className="project_form_title_title">
                <p>Set your rewards</p>
            </div>
            <div className="project_form_title_subtitle">
              <p>Invite backers to be a part of the creative experience
                by offering rewards like a copy of what you’re making, a
                 special experience, or a behind-the-scenes look into
                 your process.</p>
            </div>
          </header>

        <div className="project_form_input_container">
            <form onSubmit={this.handleSubmit}
              className="project_form_box">


            <div className="project_input_div">
                <div className="project_input_title_div">
                  <p className="project_input_title">Reward title</p>
                </div>
                <div className="project_input_description_div">
                <label>
                <input type="input"
                  value={this.state.title}
                  onChange={this.update('title')}
                  className="project-input"
                />
              </label>
                <div className="project_input_description">
                  <p>Make the title exciting</p>
                </div>
                </div>
            </div>

          <div className="project_input_div">
            <div className="project_input_title_div">
              <p className="project_input_title">Description</p>
            </div>

            <div className="project_input_description_div">
            <label>

            <input type="text"
              value={this.state.description}
              onChange={this.update('description')}
              className="project-input"
              rows="6"
            />
          </label>
            <div className="project_input_description">
            <p>What to offer?<br /> Copies of what you're making,
              experiences, and limited editions work great. </p>
            </div>
            </div>
        </div>


        <div className="project_input_div">
          <div className="project_input_title_div">
            <p className="project_input_title">cost</p>
          </div>

          <div className="project_input_description_div">
          <label>

          <input
            value={this.state.funding_goal}
            onChange={this.update('cost')}
            className="project-input"
            placeholder="$"
          />
        </label>
          <div className="project_input_description">
            <p>Price fairly, and offer a good value. What would you
              consider a fair exchange?</p>
          </div>
          </div>
        </div>


            {this.renderErrors()}

            <input
                  className="session_submit_button3"
                  id="form_input_button"
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

export default RewardForm;
