import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import ProjectBlurb from './project_blurb';
import ProjectCarousel from './project_carousel';

class ProjectNav extends React.Component {

  componentDidMount() {
    this.props.requestProjects(8);
  }


  render() {
    const { projects } = this.props;
    return (
      <section className="frontpage">
        <ProjectCarousel />
          <div className="nav_project_container">
            <div className="nav_project_nav">
              <h1 className="nav_project_container_title">
                Recommended for you</h1>
                <div className="project_nav_container" >
                  {projects.map(pro => <ProjectBlurb key={pro.id}
                                                      project={pro} />)}
                </div>
            </div>
          </div>
  
    </section>



    );
  }
}

export default ProjectNav;
