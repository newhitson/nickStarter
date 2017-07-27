import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { requestSingleProject } from '../../actions/projects_actions';
import { createReward } from '../../actions/rewards_actions';
import RewardForm from './reward_form';


const mapStateToProps = ({ rewards, session ,projects }) => {
  const project = projects.project;
  return {
    isOwner: project ? project.creator_id === session.currentUser.id : true,
    errors: rewards.errors,
    session
  };
};

const mapDispatchToProps = (dispatch, { location ,match }) => {
  return {
    requestSingleProject: () => dispatch(requestSingleProject(match.params.projectId)),
    createReward: reward => dispatch(createReward(reward))
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(RewardForm));
