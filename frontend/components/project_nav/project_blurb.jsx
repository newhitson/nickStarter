import React from 'react';
import { Link } from 'react-router-dom';
import { Line } from 'rc-progress';


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

const category = function(id) {

  var categories = { 1: "Art",
                  2: "Comics",
                  3: "Design",
                  4: "Food",
                  5: "Games",
                  6: "Music",
                  7: "Technology",
                  8: "recomened for you"};
      let projectCategory = categories[id];
  return (projectCategory);

};





const ProjectBlurb = ({ project }) => (
  <div className="nav_project_blurb">
      <Link to={`/project/${project.id}`}>
      <img src={`${project.image_url}`}
        className="project_blurb_img"/></Link>
      <div className="project_blurb_cat_box">
        <span className="project_blurb_cat_text" >{category(project.category_id)}</span>
      </div>
      <div className="project_blurb_title_box">
        <span className="project_blurb_title_text" >{project.title}</span>
      </div>
      <div className="project_blurb_creator_box">
        <span className="project_blurb_creator_text" >by: {project.creator}</span>
      </div>
      <div className="project_line_box">
      <Line percent={`${project.funded/project.funding_goal * 100}`} strokeWidth="1" strokeColor="#2BDE73"
        trailWidth="1" trailColor="#e6e6e6" />
      </div>
      <div className="project_blurb_funded_box">
        <span className="project_blurb_funded_text"><span
           className="dark_grey">${project.funded}</span>
          pledged</span>
        <br/>
        <span className="project_blurb_funded_text"><span
           className="dark_grey">{Math.floor(project.funded/project.funding_goal * 100)}%</span>
         funded</span>
        <br/>
        <span className="project_blurb_funded_text"><span
           className="dark_grey">{timeleft(project.end_date)}</span>
          days left </span>
      </div>
  </div>
);

export default ProjectBlurb;
