export const createPledge = (pledge) => {
  return $.ajax({
    method: 'POST',
    url: '/api/pledge',
    data: pledge
  });
};
