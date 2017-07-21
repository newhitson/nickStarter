import React from 'react';
import { Link } from 'react-router-dom';

const ProjectBlurb = ({ project }) => (
  <li className="nav_project_blurb">
      <span> { project.id } </span>
      <Link to={`/project/${project.id}`}>link</Link>
      <span> { project.title } </span>
  </li>
);

export default ProjectBlurb;
