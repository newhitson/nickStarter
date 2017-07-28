### NickStarter

[NickStarter](http://nick-starter.herokuapp.com/#/)

Nickstarter is a crowd-funding web application inspired by Kickstarter. Built with Ruby on Rails and React-Redux, users can create projects which other users can fund at various reward levels.

### Features & Implementation

* Create Projects and customize the rewards associated with funding.
* Secure user authentication using BCrypt
* Explore projects created by other users


### Bringing wireframes to life

![Alt Text](https://media.giphy.com/media/woD9FsDYpPCBW/giphy.gif "wire Frames")

### Adding Resources

* [Database Schema](docs/schema.me)
* [Design Wireframes](docs/wireframes)
* [API Endpoints](api_end_points.md)
* [Sample Redux State](docs/state_shape.md)


### Rewards



``` javascript
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
  );}
```
# Future Directions

I plan to continue adding to NickStarter as time permits. Some ideas for next steps include

  * User profiles
  * Search features
  * Users must pay to submit a pledge, via credit card API
  * Adding unit, integration and end-to-end tests
