import * as APIUtil from '../util/reward_api_util';

export const RECEIVE_SINGLE_REWARD = 'RECEIVE_SINGLE_REWARD';
export const RECEIVE_REWARD_ERRORS = 'RECEIVE_REWARD_ERRORS';
export const RECEIVE_ALL_REWARDS = 'RECEIVE_ALL_REWARDS';

export const receiveSingleReward = rewards => ({
  type: RECEIVE_SINGLE_REWARD,
  rewards
});

export const receiveRewardErrors = errors => {
  return ({
  type: RECEIVE_REWARD_ERRORS,
  errors
  });
};

export const receiveAllRewards = rewards => ({
  type: RECEIVE_ALL_REWARDS,
  rewards
});


export const createReward = reward => dispatch => (
  APIUtil.createReward(reward).then(newReward => {
    dispatch(receiveSingleReward(newReward));
    return newReward;
  }).fail(err => dispatch(receiveRewardErrors(err.responseJSON)))
);

export const requestRewards = filters => dispatch => (
  APIUtil.fetchRewards(filters).then(rewards => (
    dispatch(receiveAllRewards(rewards))
  ))
);
