import merge from 'lodash/merge';

import {
  RECEIVE_ALL_PROJECTS,
  RECEIVE_SINGLE_PROJECT
} from '../actions/projects_actions';


const ProjectsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_SINGLE_PROJECT:
      return action.project;
    case RECEIVE_ALL_PROJECTS:
      return action.projects;
    default:
      return state;
  }
};

export default ProjectsReducer;
