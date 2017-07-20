export const fetchProjects = category => (
  $.ajax({
    method: 'GET',
    url: '/api/projects',
    data: {category}
  })
);

export const fetchSingleProject = (id) => {
  return $.ajax({
    method: 'GET',
    url: `/api/projects/${id}`
  });
};
