import merge from 'lodash/merge';

import {
  RECEIVE_SINGLE_PLEDGE,
  RECEIVE_PLEDGE_ERRORS,
} from '../actions/pledges_actions';

const defaultState = Object.freeze({
  pledge: {},
  errors: []
});


const PledgeReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_SINGLE_PLEDGE:
      let pledge = action.pledge;
      return merge({}, defaultState, {
        pledge
      });
    case RECEIVE_PLEDGE_ERRORS:
      const errors = action.errors;
      return merge({}, defaultState,{
        errors
      });
    default:
      return state;
  }
};

export default PledgeReducer;
