import merge from 'lodash/merge';

import {
  RECEIVE_SINGLE_REWARD,
  RECEIVE_REWARD_ERRORS,
  RECEIVE_ALL_REWARDS,
} from '../actions/rewards_actions';

const defaultState = Object.freeze({
  rewards: {},
  errors: []
});


const RewardsReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_SINGLE_REWARD:
      let rewards = action.rewards;
      return merge({}, defaultState, {
        rewards
      });
    case RECEIVE_ALL_REWARDS:
      let rewards = action.rewards;
      return merge({}, defaultState, {
        rewards
      });
    case RECEIVE_REWARD_ERRORS:
      const errors = action.errors;
      return merge({}, defaultState,{
        errors
      });
    default:
      return state;
  }
};

export default RewardsReducer;
