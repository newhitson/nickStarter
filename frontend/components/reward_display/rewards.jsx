import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import RewardBlurb from './reward_blurb';


class Rewards extends React.Component {

  componentDidMount() {
    this.props.requestRewards(this.props.match.params.projectId);
  }

  render() {
    const { rewards, createPledge } = this.props;
    return (
      <section className="rewards_section">
        <div className="support">
        <h1 > Support this project</h1>
        </div>
        <div>
          {rewards.map(reward => <RewardBlurb key={reward.id}
            createPledge={this.props.createPledge}  reward={reward}/>)}
        </div>
    </section>
    );
  }
}

export default Rewards;
