import * as APIUtil from '../util/pledge_api_util';

export const RECEIVE_SINGLE_PLEDGE = 'RECEIVE_SINGLE_PLEDGE';
export const RECEIVE_PLEDGE_ERRORS = 'RECEIVE_PLEDGE_ERRORS';

export const receiveSinglePledge = pledge => ({
  type: RECEIVE_SINGLE_PLEDGE,
  pledge
});

export const receivePledgeErrors = errors => {
  return ({
  type: RECEIVE_PLEDGE_ERRORS,
  errors
  });
};

export const createPledge = pledge => dispatch => (
  APIUtil.createPledge(pledge).then(newPledge => {
    dispatch(receiveSinglePledge(newPledge));
    return newPledge;
  }).fail(err => dispatch(receiveRewardErrors(err.responseJSON)))
);
