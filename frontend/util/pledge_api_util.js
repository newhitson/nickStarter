export const createPledge = (pledge) => {
  debugger;
  return $.ajax({
    method: 'POST',
    url: '/api/pledges',
    data: {pledge}
  });
};
