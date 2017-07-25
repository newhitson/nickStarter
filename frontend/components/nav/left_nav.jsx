import React from 'react';
import { Link } from 'react-router-dom';


class LeftNav extends React.Component {



  render() {
    if (this.props.currentUser !== null) {
    return (
      <nav className="left_nav">
        <div className="auth_box"
             id="start_project">
        <Link className="link_box"
              to="/categories">
              <img
                src="http://res.cloudinary.com/dj1l8etr0/image/upload/v1501021861/compass-icon-13_lvafw8.png"
                height="20px"
                width="20px"></img>&nbsp;
               Explore</Link>
        </div>

        <div className="auth_box"
             id="start_project">
        <Link className="link_box"
              to="/new">Start a project</Link>
        </div>

      </nav>
    );
  }}

}

export default LeftNav;
