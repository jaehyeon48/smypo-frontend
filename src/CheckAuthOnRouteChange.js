import React, { useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { logout } from './actions/authAction';
import { showAlert } from './actions/alertAction';

// Check the user's auth status every time the user changes route
const CheckAuthOnRouteChange = ({
  children,
  auth,
  logout,
  showAlert
}) => {
  const location = useLocation();

  useEffect(() => {
    if (auth.isAuthenticated) {
      (async () => {
        try {
          await axios.get(`${process.env.REACT_APP_SERVER_URL}/auth/route-change`, { withCredentials: true });
        } catch (error) { // if the cookie has expired, force logout the user.
          logout();
          showAlert('Session has timed out. Please login again.', 'error');
        }
      })();
    }
  }, [auth, logout, showAlert, location]);

  return (
    <React.Fragment>
      {children}
    </React.Fragment>
  );
}

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps, {
  logout,
  showAlert
})(CheckAuthOnRouteChange);
