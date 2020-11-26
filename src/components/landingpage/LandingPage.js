import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';

import './landingpage.css';

const LandingPage = ({
  loading,
  isAuthenticated
}) => {
  let history = useHistory();

  const redirectToSignUp = () => {
    history.push('/signup');
  }

  const redirectToLogin = () => {
    history.push('/login');
  }

  if (isAuthenticated && !loading) {
    return <Redirect to="/dashboard" />
  }

  return (
    <React.Fragment>
      {!loading &&
        <main className="landing-background">
          <header className="landing-header-filter">
            <div className="landing-header-title">
              <h1>Manage & Track your portfolio with <span>TYROS</span></h1>
            </div>
            <div className="landing-header-subtitle">
              <span>TYROS, a pioneer of commission-free investing, gives you more ways to make your money work harder.</span>
              <div className="landing-buttons">
                <button
                  type="button"
                  className="btn btn-landing-signup"
                  onClick={redirectToSignUp}
                >Sign Up</button>
                <button
                  type="button"
                  className="btn btn-landing-login"
                  onClick={redirectToLogin}
                >Login</button>
              </div>
            </div>
          </header>
          <footer class="footer">
            <span class="footer-copyright">&#169; Jae Hyeon Kim</span>
            <span class="footer-contact">Contact: imjaehyeon48@gmail.com</span>
          </footer>
        </main>}

    </React.Fragment>
  );
}

LandingPage.propTypes = {
  loading: PropTypes.bool,
  isAuthenticated: PropTypes.bool
}

const mapStateToProps = (state) => ({
  loading: state.auth.loading,
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(LandingPage);