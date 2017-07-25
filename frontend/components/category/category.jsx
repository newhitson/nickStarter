import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import ProjectBlurb from '../project_nav/project_blurb';

class Category extends React.Component {

  componentDidMount() {
    this.props.requestProjects(this.props.match.params.categoryId);
  }


  render() {
    const { projects } = this.props;
    return (
      <section className="frontpage">
          <div className="nav_project_container">
            <div className="nav_project_nav">
              <h1 className="nav_project_container_title">
                Category</h1>
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

export default Category;
