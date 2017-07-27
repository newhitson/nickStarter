import { connect } from 'react-redux';
import Rewards from './rewards';
import {withRouter} from 'react-router';

import { selectAllRewards } from '../../reducers/selectors';
import { requestRewards } from '../../actions/rewards_actions';
import { createPledge } from '../../actions/pledges_actions';

const mapStateToProps = ({rewards }) => {
  return {

    rewards: selectAllRewards(rewards)
  };
};




const mapDispatchToProps = dispatch => ({
  requestRewards: (project_id) => dispatch(requestRewards(project_id)),
  createPledge: (rewards_id) => dispatch(createPledge(rewards_id))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Rewards));
