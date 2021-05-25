import React, { useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { useLocation } from 'react-router-dom';

import { sessionOut } from './actions/authAction';

// Check the user's auth status every time the user changes route
const CheckAuthOnRouteChange = ({
  children,
  auth,
  sessionOut
}) => {
  const location = useLocation();

  useEffect(() => {
    if (auth.isAuthenticated) {
      (async () => {
        const res = await axios.get(`${process.env.REACT_APP_SERVER_URL}/auth/route-change`, { withCredentials: true });
        if (res.data === -999) { // if the cookie has expired, force logout the user.
          sessionOut();
        }
      })();
    }
  }, [auth, sessionOut, location]);

  return (
    <React.Fragment>
      {children}
    </React.Fragment>
  );
}

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps, { sessionOut })(CheckAuthOnRouteChange);
