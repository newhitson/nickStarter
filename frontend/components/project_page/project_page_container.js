import { connect } from 'react-redux';
import ProjectPage from './project_page';

import { requestSingleProject } from '../../actions/projects_actions';

const mapStateToProps = ({ params, projects, pledges}) => {
  return {
    params,
    projects,
    pledges
  };
};
// selectAllProjects(projects) add this to give us an array
// projects: selectAllProjects(projects)

const mapDispatchToProps = dispatch => ({
  requestSingleProject: (catNumber) => dispatch(requestSingleProject(catNumber))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectPage);
