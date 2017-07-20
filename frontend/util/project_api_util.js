export const fetchAllProjects = () => (
  $.ajax({
    method: 'POST',
    url: '/api/projects',
  })
);

export const fetchSingleProject = (id) => {
  return $.ajax({
    method: 'POST',
    url: `/api/projects/${id}`
  });
};
