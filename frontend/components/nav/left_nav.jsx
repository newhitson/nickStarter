import React from 'react';
import { Link } from 'react-router-dom';


class LeftNav extends React.Component {



  render() {
    if (this.props.currentUser !== null) {
    return (
      <div className="auth_box"
           id="start_project">
      <Link className="link_box"
            to="/new">Start a project</Link>
      </div>
    );
  }}

}

export default LeftNav;
