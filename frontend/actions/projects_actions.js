export const RECEIVE_ALL_PROJECTS    = 'RECEIVE_ALL_PROJECTS';
export const RECEIVE_SINGLE_PROJECT = 'RECEIVE_SINGLE_PROJECT';



export const receiveAllProjects = projects => ({
  type: RECEIVE_ALL_PROJECTS,
  projects
});

export const receiveSingleProject = project => ({
  type: RECEIVE_SINGLE_PROJECT,
  project
});
