import { connect } from 'react-redux';
import ProjectPage from './project_page';

import { requestSingleProject } from '../../actions/projects_actions';

const mapStateToProps = ({ params, projects, pledges ,session}) => {
  const project = projects.project;
  const currentUsers = session.currentUser ?  session.currentUser.id : 0;
  return {
    isOwner: project ? project.creator_id === currentUsers : true,
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
