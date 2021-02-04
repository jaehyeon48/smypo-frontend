import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import UserLoadingSpinner from './spinners/UserLoadingSpinner';

const PublicRoute = ({ component: Component, auth, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (auth.status === 'initial' || auth.status === 'loading') {
          return <UserLoadingSpinner />
        }
        else {
          if (auth.isAuthenticated) {
            return <Redirect to="/dashboard" />
          }
          else {
            return <Component {...props} />
          }
        }
      }}
    />
  );
}

const mapStateToProps = (state) => ({ auth: state.auth });

export default connect(mapStateToProps)(PublicRoute);
