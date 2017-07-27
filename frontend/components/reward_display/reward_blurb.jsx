import React from 'react';


const RewardBlurb = ({ reward, createPledge }) => {
  console.log(createPledge);
  return (
  <div className="reward_blurb">
      <ul className="unorder_reward_list">
        <li className="reward_li" >
          <p className="pledge">
            Pledge ${reward.cost} or more</p></li>
        <li className="reward_li">
          <p className="reward_title">
            {reward.title}</p></li>
        <li className="reward_li">
          <p className="reward_description">
          {reward.description}</p></li>
        <li className="reward_li">
          <p className="reward_backers">
            # backers</p>
        </li>
      </ul>
    <div className="green_blurb" onClick={() => createPledge(reward.id)}>
      <p>Select this reward</p>

    </div>
  </div>
);};

export default RewardBlurb;
