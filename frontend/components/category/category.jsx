import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import ProjectBlurb from '../project_nav/project_blurb';

class Category extends React.Component {

  componentDidMount() {
    this.props.requestProjects(this.props.match.params.categoryId);
  }

  componentWillUnmount(){
    this.props.clearProjects;
  }


  render() {
    const { projects } = this.props;
    return (
      <section className="frontpage">
        <p className="Category_title">
          Category</p>
          <div className="nav_project_container">
            <div className="nav_project_nav">

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
