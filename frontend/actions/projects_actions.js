export const RECEIVE_ALL_PROJECTS    = 'RECEIVE_ALL_PROJECTS';
export const RECEIVE_SINGLE_PROJECT = 'RECEIVE_SINGLE_PROJECT';

import * as APIUtil from '../util/project_api_util';

export const receiveAllProjects = projects => ({
  type: RECEIVE_ALL_PROJECTS,
  projects
});

export const receiveSingleProject = project => ({
  type: RECEIVE_SINGLE_PROJECT,
  project
});
