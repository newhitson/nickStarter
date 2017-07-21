import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import ProjectBlurb from './project_blurb';

class ProjectNav extends React.Component {

  componentDidMount() {
    this.props.requestProjects(1);
  }


  render() {
    console.log("here");
    console.log(this.props);
    const { projects } = this.props;
    return (
      <section>
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
          <div className="nav_project_container">
            <div className="nav_project_nav">
              <h1>reccomened for you</h1>

                <div className="project_nav_container" >
                  {projects.map(pro => <ProjectBlurb key={pro.id}
                                                      project={pro} />)}
                </div>
            </div>
          </div>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>

    </section>



    );
  }
}

export default ProjectNav;
