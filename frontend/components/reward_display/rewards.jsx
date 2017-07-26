import React from 'react';
import { Link, withRouter } from 'react-router-dom';
// import rewardBlurb from './reward_blurb';


class Rewards extends React.Component {

  componentDidMount() {
    this.props.requestRewards(62);

    //this.props.params.match.projectId
  }
  // {projects.map(pro => <ProjectBlurb key={pro.id}project={pro} />)}

  render() {
    console.log(this.props);
    const { rewards } = this.props;
    return (
      <section>
        <div className="rewards_nav_container" >
            {rewards.map(reward => <h1>{reward.title}</h1>)}
        </div>

    </section>



    );
  }
}

export default Rewards;
