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

export const createProject = (project) => {
  return $.ajax({
    method: 'POST',
    url: '/api/projects',
    data: {project}
  });
};

//
// $.ajax({
//     method: 'POST',
//     url: '/api/projects',
//     data: {project:{title:"eatbugs",image_url:'website',
//     description:'eat them all', tagline:'yum', end_date:new Date(),
//      funding_goal:1, creator_id:1, category_id:5}}
//   })
