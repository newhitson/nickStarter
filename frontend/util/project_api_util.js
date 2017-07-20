export const fetchAllProjects = () => (
  $.ajax({
    method: 'GET',
    url: '/api/projects',
  })
);

export const fetchSingleProject = (id) => {
  return $.ajax({
    method: 'GET',
    url: `/api/projects/${id}`
  });
};
