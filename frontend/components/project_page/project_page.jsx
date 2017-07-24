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
      <div className="project_page_background">
        <section className="project_page_container">
          <header className="project_header">
            <div className="project_header_creator_box">
              <img src="https://ksr-ugc.imgix.net/assets/006/077/755/4036c410db5007a610236fa27e5bd8b8_original.jpg?w=80&h=80&fit=crop&v=1471144727&auto=format&q=92&s=362e3a27b8725fc0b4c09ce817c5daa2" />
              <div className="project_header_by_box">
              <p className="by">By</p>
              <p className="creator">{project.creator}</p>
              </div>
            </div>
            <div className="project_header_project_desciption_box">
              <div className="project_header_project_title">
                <p className="project_page_title">{project.title}</p>
              </div>
              <div className="project_header_project_tag_line">
                <p className="project_page_tagline">{project.tagline}</p>
              </div>
            </div>
          </header>
          <figure className="project_picture_conatiner">
            <figure className="main_project_image_container">
              <img className="main_project_image"
                src={`${project.image_url}`}
                />
            </figure>
            <figure className="project_funded_info">
              <p>{project.funding_goal}</p>
            </figure>
          </figure>
          <figure className="project_about_container">
            <figure className="project_page_description_container">
              <figure className= "project_page_description_title">
                <p className="description_title">
                  About this project</p>
              </figure>
              <figure className="project_description_box">
                <p className="project_description">{project.description}</p>
              </figure>
            </figure>
            <figure className="project_page_rewards_container">
              <p>rewards</p>
            </figure>
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
