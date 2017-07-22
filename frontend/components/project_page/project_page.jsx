import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class ProjectPage extends React.Component {

  componentDidMount() {
   this.props.requestSingleProject(this.props.match.params.projectId);
  }

  componentWillReceiveProps(newProps){
    if (this.props.match.params.projectId !== newProps.match.params.projectId ){
      this.props.requestSingleProject(this.props.match.params.projectId);
    }
  }

  render() {
    const { projects } = this.props;
      if (projects.project){
        const project = projects.project;
        return (
      <div>
        <br/>
        <br/>
        <br/>
        <br/>
        <section className="project_page_container">
          <header className="project_header">
            <div className="project_header_creator_box">
              <p>By: {project.creator}</p>
            </div>
            <div className="project_header_project_desciption_box">
              <div className="project_header_project_title">
                <p>{project.title}</p>
              </div>
              <div className="project_header_project_tag_line">
                <p>{project.tagline}</p>
              </div>
            </div>
          </header>
          <figure className="project_picture_conatiner">
            <figure className="main_project_image_container">
              <img className="main_project_image"
                src="https://ksr-ugc.imgix.net/assets/016/537/903/bca7902e3232309d81454d5aab22eeee_original.jpg?crop=faces&w=1024&h=576&fit=crop&v=1495761944&auto=format&q=92&s=fafc3f77199e2058225691a7e04f7c2c"
                />
            </figure>
            <figure className="project_funded_info">
              <p>{project.funding_goal}</p>
            </figure>
          </figure>
          <figure className="project_about_container">
            <figure className="project_page_description_container">
              <figure className= "project_page_description_title">
              </figure>
              <figure className="project_page_description_container">
              </figure>
            </figure>
            <figure className="project_page_rewards_container"></figure>
          </figure>

        </section>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        </div>
    );} else {
      return (<h1>loading</h1>);
    }
  }
  }

export default ProjectPage;
