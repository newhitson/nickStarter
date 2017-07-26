import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createReward } from '../../actions/rewards_actions';
import RewardForm from './reward_form';


const mapStateToProps = ({ rewards, session }) => {
  return {
    errors: rewards.errors,
    session
  };
};

const mapDispatchToProps = (dispatch, { location }) => {
  return {
    createReward: reward => dispatch(createReward(reward))
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(RewardForm));
