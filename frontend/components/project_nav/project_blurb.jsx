import React from 'react';
import { Link } from 'react-router-dom';

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
      </div>
  </div>
);

export default ProjectBlurb;
