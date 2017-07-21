import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createProject } from '../actions/project_actions';
import ProjectForm from './project_form';


const mapStateToProps = ({ session }) => {
  return {
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
