import { connect } from 'react-redux';
import Categories from './categories';

import { selectAllProjects} from '../../reducers/selectors';
import { requestProjects } from '../../actions/projects_actions';

const mapStateToProps = ({ projects }) => {
  return {
    projects: selectAllProjects(projects)
  };
};


const mapDispatchToProps = dispatch => ({
  requestProjects: (catNumber) => dispatch(requestProjects(catNumber))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProjectNav);
