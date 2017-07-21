import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createProject } from '../../actions/projects_actions';
import ProjectForm from './project_form';


const mapStateToProps = ({ projects, session }) => {
  return {
    errors: projects.errors,
    session
  };
};

const mapDispatchToProps = (dispatch, { location }) => {
  return {
    createProject: project => dispatch(createProject(project))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectForm);
