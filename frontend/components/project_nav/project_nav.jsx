import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import ProjectBlurb from './project_blurb';

class ProjectNav extends React.Component {

  componentDidMount() {
    this.props.requestProjects(1);
  }


  render() {
    const { projects } = this.props;
    return (
      <div>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
          <ul>
            {projects.map(pro => <ProjectBlurb key={pro.id}
                                                project={pro} />)}
          </ul>
        </div>
    );
  }
}

export default ProjectNav;
