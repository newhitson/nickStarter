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
      funding_goal: 0,
      creator_id: this.props.session.currentUser.id,
      category_id: 5,
      funded: 0
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.upload = this.upload.bind(this);
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

  upload(e){
    e.preventDefault();
    cloudinary.openUploadWidget(
      window.cloudinary_options,
       function(error,images){
         if(error === null){
           this.setState({image_url: images[0].url});
         }
    }.bind(this));
  }

  render() {
    console.log(this.state);
    return (
      <div className="project_page_background">
        <div className="project_form_container">
          <header className="project_form_title">
            <div className="project_form_title_title">
                <p>Let’s get started.</p>
            </div>
            <div className="project_form_title_subtitle">
              <p>Make a great first impression with your project’s title
                and image, and set your funding goal, campaign duration,
                 and project category.</p>
            </div>
          </header>

        <div className="project_form_input_container">
            <form onSubmit={this.handleSubmit}
              className="project_form_box">

              {this.renderErrors()}


            <div className="project_input_div">
                <div className="project_input_title_div">
                  <p className="project_input_title">Project title</p>
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
                  <p className="project_input_title">Project image</p>
                </div>
                <div className="project_input_description_div">
                <label>
                  <input className="session_submit_button"
                         type="submit"
                         value="upload image"
                          onClick={this.upload}
                          />


              </label>
                <div className="project_input_description">
                  <p>This is the first thing that people will see when
                    they come across your project. Choose an image
                    that’s crisp and text-free.</p>
                </div>
                </div>
            </div>



            <div className="project_input_div">
              <div className="project_input_title_div">
                <p className="project_input_title">Short blurb</p>
              </div>

              <div className="project_input_description_div">
              <label>

              <input type="input"
                value={this.state.tagline}
                onChange={this.update('tagline')}
                className="project-input"
              />
            </label>
              <div className="project_input_description">
              <p>Give people a sense of what you’re doing. Skip
                “Help me” and focus on what you’re making.</p>
              </div>
              </div>
            </div>



          <div className="project_input_div">
            <div className="project_input_title_div">
              <p className="project_input_title">Description</p>
            </div>

            <div className="project_input_description_div">
            <label>

            <textarea
              value={this.state.description}
              onChange={this.update('description')}
              className="project-input"
              rows="6"
            >
          </textarea>
          </label>
            <div className="project_input_description">
            <p>Use your project description to share more about what
               you’re raising funds to do and how you plan to pull it
               off. It’s up to you to make the case for your
               project.</p>
            </div>
            </div>
        </div>



        <div className="project_input_div">
          <div className="project_input_title_div">
            <p className="project_input_title">Category</p>
          </div>

          <div className="project_input_description_div">
          <label>

            <select id="soflow"
                  value={this.state.category_id}
                  onChange={this.update('category_id')}>
                <option value="1">Art</option>
                <option value="2">Comics</option>
                <option value="3">Design</option>
                <option value="4">Food</option>
                <option value="5">Games</option>
                <option value="6">Music</option>
                <option value="7">Technology</option>
            </select>
        </label>
          <div className="project_input_description">
          <p></p>
          </div>
          </div>
        </div>



        <div className="project_input_div">
          <div className="project_input_title_div">
            <p className="project_input_title">funding_goal</p>
          </div>

          <div className="project_input_description_div">
          <label>

          <input type="input"
            value={this.state.funding_goal}
            onChange={this.update('funding_goal')}
            className="project-input"
            placeholder="$"
          />
        </label>
          <div className="project_input_description">
            <p>Funding on Kickstarter is all-or-nothing. It’s okay to
            raise more than your goal, but if your goal isn’t met, no
            money will be collected. Your goal should reflect the
            minimum amount of funds you need to complete your project
            and send out rewards, and include a buffer for payments
            processing fees.</p>
          </div>
          </div>
        </div>


        <div className="project_input_div">
          <div className="project_input_title_div">
            <p className="project_input_title">Funding duration</p>
          </div>

          <div className="project_input_description_div">
          <label>

          <input type="date"
            value={this.state.end_date}
            onChange={this.update('end_date')}
            className="project-input"
          />
        </label>
          <div className="project_input_description">
          <p>Projects with shorter durations have higher success rates.
             You won’t be able to adjust your duration after
             you launch.</p>
          </div>
          </div>
        </div>





            <input
                  className="session_submit_button"
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

export default ProjectForm;
