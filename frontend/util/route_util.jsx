import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

const Auth = ({ component: Component, path, loggedIn }) => (
  <Route path={path} render={(props) => (
    !loggedIn ? (
      <Component {...props} />
    ) : (
      <Redirect to="/" />
    )
  )} />
);

const Protected = ({ component: Component, path, loggedIn }) => (
  <Route path={path} render={(props) => (
     loggedIn ? (
      <Component {...props} />
    ) : (
      <Redirect to="/login" />
    )
  )} />
);

const Owner = ({ component: Component, path, isOwner }) => (
  <Route path={path} component={connect(mapStateToPropsOwner)
  ((props) => (
     isOwner ? (
      <Component {...props} />
    ) : (
      <Redirect to="/login" />
    )
  ) )}/>
);

const mapStateToProps = state => (
  {loggedIn: Boolean(state.session.currentUser)}
);

const mapStateToPropsOwner = (state, ownProps ) => {
  const currentProject = state.projects.projects[ownProps.match.params.projectId];
  if (currentProject === undefined) return {isOwner: false};
  return({
    isOwner: Boolean(state.session.currentUser.id === currentProject.creator_id)
  });
};

export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth));

export const ProtectedRoute = withRouter(connect(mapStateToProps, null)(Protected));

export const OwnerRoute = withRouter(Owner);
