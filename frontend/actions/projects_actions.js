import * as APIUtil from '../util/project_api_util';

export const RECEIVE_ALL_PROJECTS    = 'RECEIVE_ALL_PROJECTS';
export const RECEIVE_SINGLE_PROJECT = 'RECEIVE_SINGLE_PROJECT';
export const RECEIVE_PROJECT_ERRORS = 'RECEIVE_PROJECT_ERRORS';



export const receiveAllProjects = projects => ({
  type: RECEIVE_ALL_PROJECTS,
  projects
});

export const receiveSingleProject = project => ({
  type: RECEIVE_SINGLE_PROJECT,
  project
});

export const receiveProjectErrors = errors => {
  return ({
  type: RECEIVE_PROJECT_ERRORS,
  errors
  });
};

//
// export const receiveProjectErrors = errors => ({
//   type: RECEIVE_PROJECT_ERRORS,
//   errors
// });

export const createProject = project => dispatch => (
  APIUtil.createProject(project).then(newProject => {
    dispatch(receiveSingleProject(project));
    return project;
  }).fail(err => dispatch(receiveProjectErrors(err.responseJSON)))
);

//add dispatch errors

export const requestProjects = filters => dispatch => (
  APIUtil.fetchProjects(filters).then(projects => (
    dispatch(receiveAllProjects(projects))
  ))
);

export const requestSingleProject = id => dispatch => (
  APIUtil.fetchSingleProject(id).then(project => (
    dispatch(receiveSingleProject(project))
  ))
);
