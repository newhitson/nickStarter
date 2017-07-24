import React from 'react';
import { Link } from 'react-router-dom';


const timeleft = function(end) {

  var myDate= end;
  myDate=myDate.split("-");
  var newDate=myDate[1]+"/"+myDate[0]+"/"+myDate[2];

  var oneDay = 24*60*60*1000;
  const firstDate = new Date(myDate[0],myDate[1]-1,myDate[2]);
  const secondDate = new Date();
  var diffDays = Math.round(Math.abs((firstDate.getTime() - secondDate.getTime())/(oneDay)));
  return (diffDays);
};



const ProjectBlurb = ({ project }) => (
  <div className="nav_project_blurb">
      <Link to={`/project/${project.id}`}>
      <img src={`${project.image_url}`}
        className="project_blurb_img"/></Link>
      <div className="project_blurb_cat_box">
        <span className="project_blurb_cat_text" >category_id{project.category_id}</span>
      </div>
      <div className="project_blurb_title_box">
        <span className="project_blurb_title_text" >{project.title}</span>
      </div>
      <div className="project_blurb_creator_box">
        <span className="project_blurb_creator_text" >by: {project.creator}</span>
      </div>
      <div className="project_blurb_funded_box">
        <span className="project_blurb_funded_text" >${project.funded} pledged</span>
        <br/>
        <span className="project_blurb_funded_text" >{project.funded/project.funding_goal * 100}% funded</span>
        <br/>
        <span className="project_blurb_funded_text" > {timeleft(project.end_date)} days left </span>
      </div>
  </div>
);

export default ProjectBlurb;
