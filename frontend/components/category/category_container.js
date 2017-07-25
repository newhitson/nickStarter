import { connect } from 'react-redux';
import Category from './category';

import { selectAllProjects} from '../../reducers/selectors';
import { requestProjects, clearProjects } from '../../actions/projects_actions';

const mapStateToProps = ({ projects }) => {
  return {
    projects: selectAllProjects(projects)
  };
};


const mapDispatchToProps = dispatch => ({
  requestProjects: (catNumber) => dispatch(requestProjects(catNumber)),
  clearProjects: () => dispatch(clearProjects())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Category);
