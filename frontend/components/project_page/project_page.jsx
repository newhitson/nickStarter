import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class ProjectPage extends React.Component {

  componentDidMount() {
   this.props.requestSingleProject(this.props.match.params.projectId);
  }

  componentWillReceiveProps(newProps){
    if (this.props.match.params.projectId !== newProps.match.params.projectId ){
      this.props.requestSingleProject(this.props.match.params.projectId);
    }
  }

  render() {
    const { projects } = this.props;
      if (projects.project){
        const project = projects.project;
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
          <h1>{project.title}</h1>
        </div>
    );} else {
      return (<h1>loading</h1>);
    }
  }
  }

export default ProjectPage;
