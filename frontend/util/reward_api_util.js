export const fetchRewards = project_id => (
  $.ajax({
    method: 'GET',
    url: '/api/rewards',
    data: {project_id}
  })
);

export const createReward = (reward) => {
  return $.ajax({
    method: 'POST',
    url: '/api/rewards',
    data: reward
  });
};
