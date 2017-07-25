import merge from 'lodash/merge';

import {
  RECEIVE_ALL_PROJECTS,
  RECEIVE_SINGLE_PROJECT,
  RECEIVE_PROJECT_ERRORS,
  CLEAR_PROJECTS
} from '../actions/projects_actions';

const defaultState = Object.freeze({
  projects: {},
  errors: []
});


const ProjectsReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_SINGLE_PROJECT:
      const project = action.project;
      return merge({}, defaultState, {
        project
      });
    case RECEIVE_ALL_PROJECTS:
      let projects = action.projects;
      return merge({}, defaultState, {
        projects
      });
    case RECEIVE_PROJECT_ERRORS:
      const errors = action.errors;
      return merge({}, defaultState,{
        errors
      });
    case CLEAR_PROJECTS:
      return defaultState;
    default:
      return state;
  }
};

export default ProjectsReducer;
