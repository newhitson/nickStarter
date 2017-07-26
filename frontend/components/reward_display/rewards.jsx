import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import RewardBlurb from './reward_blurb';


class Rewards extends React.Component {

  componentDidMount() {
    this.props.requestRewards(this.props.match.params.projectId);
    //this.props.params.match.projectId
  }
  // {projects.map(pro => <ProjectBlurb key={pro.id}project={pro} />)}

  render() {
    const { rewards } = this.props;
    return (
      <section>
        <div>
          {rewards.map(reward => <RewardBlurb key={reward.id} reward={reward}/>)}
        </div>
    </section>
    );
  }
}

export default Rewards;
