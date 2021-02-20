import React from 'react';
import { connect } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';
import Footer from '../footer/Footer';
import Button from '../button/Button';

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
          <div className="landing-header-backdrop">
            <section className="landing-section">
              <header>Manage & Track your portfolio with <span>SMYPO</span></header>
              <p className="landing-section-subtitle">SMYPO provides easy-to-use tools for managing your awesome portfolio. Show your portfolio, and find others in SMYPO!</p>
              <div className="landing-buttons">
                <Button
                  btnType={'button'}
                  btnText={'Sign Up'}
                  onClickFunc={redirectToSignUp}
                />
                <Button
                  btnType={'button'}
                  btnText={'Login'}
                  btnColor={'white'}
                  onClickFunc={redirectToLogin}
                />
              </div>
            </section>
          </div>
        </main>}
      <Footer />
    </React.Fragment>
  );
}

const mapStateToProps = (state) => ({
  loading: state.auth.loading,
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps)(LandingPage);