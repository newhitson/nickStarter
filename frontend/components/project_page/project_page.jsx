import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Line } from 'rc-progress';
import RewardContainer from '../reward_display/rewards_container';

class ProjectPage extends React.Component {

  componentDidMount() {
   this.props.requestSingleProject(this.props.match.params.projectId);
   window.scrollTo(0,0);
  }

  componentWillReceiveProps(newProps){
    if (this.props.match.params.projectId !== newProps.match.params.projectId ){
      this.props.requestSingleProject(this.props.match.params.projectId);
    }
    if (this.props.pledges.pledge !== newProps.pledges.pledge){
      this.props.requestSingleProject(this.props.match.params.projectId);
    }
  }

  editRewards() {
    console.log(this.props);
    if (this.props.isOwner){
    return(
      <div>
      <br />
        <Link to={`/rewards/${this.props.match.params.projectId}`}>
          <input className="session_submit_button"
                 type="submit"
                 value="Add rewards to project" />
        </Link>
      </div>
    );}
  }

  timeleft(end) {
    var myDate= end;
    myDate=myDate.split("-");
    var newDate=myDate[1]+"/"+myDate[0]+"/"+myDate[2];

    var oneDay = 24*60*60*1000;
    const firstDate = new Date(myDate[0],myDate[1]-1,myDate[2]);
    const secondDate = new Date();
    var diffDays = Math.round(Math.abs((firstDate.getTime() - secondDate.getTime())/(oneDay)));
    return (diffDays);
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
          <figure className="project_picture_container">
            <figure className="main_project_image_container">
              <img className="main_project_image"
                src={`${project.image_url}`}
                />
            </figure>
            <figure className="project_funded_info">



              <div className="main_project_line_box">


              <Line percent={`${project.funded/project.funding_goal * 100}`} strokeWidth="1" strokeColor="#2BDE73"
                trailWidth="1" trailColor="#e6e6e6" />
              </div>

                <div className="project_blurb_funded_boxs">
                  <span className="green_text">${project.funded}</span>
                  <span className="project_blurb_funded_text">
                    pledged of ${project.funding_goal} goal</span>

                  <br/>
                  <span className="funded_box_title">#</span>
                  <span className="project_blurb_funded_text">backers</span>
                  <br/>
                  <span className="funded_box_title">{this.timeleft(project.end_date)} </span>
                  <span className="project_blurb_funded_text">days to go</span>
                </div>
                <br />
                <input className="session_submit_button"
                       type="submit"
                       value="Back this project" />
                     <br />
                {this.editRewards()}
                <span className="project_blurb_funded_text">All or
                  nothing. This project will only be funded if it
                  reaches its goal</span>


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
              < RewardContainer />
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
