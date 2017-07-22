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
            <figure className="main_project_image">
              <img className="main_project_image_image"
                src="https://www.planwallpaper.com/static/images/desktop-year-of-the-tiger-images-wallpaper.jpg" />
            </figure>
            <figure className="project_funded_info">
              <p>{project.funding_goal}</p>
            </figure>
          </figure>
          <figure className="project_rewards_container">
          </figure>
          <h1>{project.title}</h1>
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
