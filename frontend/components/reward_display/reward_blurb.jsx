import React from 'react';


const RewardBlurb = ({ reward }) => (
  <div className="reward_blurb">
      <ul>
        <li>title :{reward.title}</li>
        <li>description: {reward.description}</li>
        <li>cost: {reward.cost}</li>
      </ul>
  </div>
);

export default RewardBlurb;
