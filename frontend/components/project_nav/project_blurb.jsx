import React from 'react';
import { Link } from 'react-router-dom';

const ProjectBlurb = ({ project }) => (
  <div className="nav_project_blurb">
      <Link to={`/project/${project.id}`}>
      <img src="https://ksr-ugc.imgix.net/assets/012/436/847/0eb65b1e692e31edeef41bf86d6186ef_original.jpg?crop=faces&w=560&h=315&fit=crop&v=1472152910&auto=format&q=92&s=08578065ddc6fb7f1a8fb1f6b4cb42ea"
        className="project_blurb_img"/></Link>
      <div className="project_blurb_cat_box">
        <span className="project_blurb_cat_text" >category_id{project.category_id}</span>
      </div>
      <div className="project_blurb_title_box">
        <span className="project_blurb_title_text" >{project.title}</span>
      </div>
      <div className="project_blurb_creator_box">
        <span className="project_blurb_creator_text" >by:{project.creator_id}</span>
      </div>
  </div>
);

export default ProjectBlurb;
