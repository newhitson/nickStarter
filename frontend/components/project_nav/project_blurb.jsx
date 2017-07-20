import React from 'react';
import { Link } from 'react-router-dom';

const ProjectBlurb = ({ project }) => (
  <li className="nav_project_blurb">
      <span> { project.id } </span>
      <span> { project.title } </span>
  </li>
);

export default ProjectBlurb;
