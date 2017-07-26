import { connect } from 'react-redux';
import Rewards from './rewards';

import { selectAllRewards } from '../../reducers/selectors';
import { requestRewards } from '../../actions/rewards_actions';

const mapStateToProps = ({ rewards }) => {
  return {
    rewards: selectAllRewards(rewards)
  };
};


const mapDispatchToProps = dispatch => ({
  requestRewards: (project_id) => dispatch(requestRewards(project_id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Rewards);
