import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import MainLoadingSpinner from './spinners/MainLoadingSpinner';

const PublicRoute = ({ component: Component, auth, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (auth.isAuthenticated && auth.status === 'loading') {
          return <MainLoadingSpinner loadingText={'Loading user data...'} />
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
