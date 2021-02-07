import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import MainLoadingSpinner from './spinners/MainLoadingSpinner';

const PrivateRoute = ({ component: Component, auth, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (auth.status === 'initial' || auth.status === 'loading') {
          return <MainLoadingSpinner loadingText={'Loading user data...'} />
        }
        else {
          if (!auth.isAuthenticated) {
            return <Redirect to="/login" />
          }
          else {
            return <Component {...props} />
          }
        }
      }}
    />
  );
}

const mapStateToProps = state => ({ auth: state.auth });

export default connect(mapStateToProps)(PrivateRoute);
