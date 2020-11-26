import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter, useHistory } from 'react-router-dom';

import './navbar.css';
import AvatarImage from '../avatar/AvatarImage';
import mainLogoWhite from '../../images/tyros_logo_white.png';

/* Import SVG Icon Components */
import SignUpIcon from '../icons/SignUpIcon';
import LoginIcon from '../icons/LoginIcon';
import MonitorIcon from '../icons/MonitorIcon';
import ListIcon from '../icons/ListIcon';
import FolderIcon from '../icons/FolderIcon';
import SignOutIcon from '../icons/SignOutIcon';
import HomeIcon from '../icons/HomeIcon';
import CoinIcon from '../icons/CoinIcon';
import { logout } from '../../actions/authAction';

const Navbar = ({
  loading,
  isAuthenticated,
  theme,
  user,
  logout,
  children
}) => {
  let history = useHistory();
  const [isHomeOpen, setIsHomeOpen] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isDashboardOpen, setIsDashboardOpen] = useState(false);
  const [isStockListOpen, setIsStockListOpen] = useState(false);
  const [isPortfolioOpen, setIsPortfolioOpen] = useState(false);
  const [isCashOpen, setIsCashOpen] = useState(false);


  useEffect(() => {
    const currentLocation = history.location.pathname;
    if (currentLocation === '/') {
      setIsHomeOpen(true);
      setIsSignUpOpen(false);
      setIsLoginOpen(false);
    }
    else if (currentLocation === '/signup') {
      setIsSignUpOpen(true);
      setIsHomeOpen(false);
      setIsLoginOpen(false);
    }
    else if (currentLocation === '/login') {
      setIsLoginOpen(true);
      setIsSignUpOpen(false);
      setIsHomeOpen(false);
    }
    else if (currentLocation === '/dashboard') {
      setIsDashboardOpen(true);
      setIsStockListOpen(false);
      setIsPortfolioOpen(false);
      setIsCashOpen(false);
    }
    else if (/stocks.*/.test(currentLocation) || /position.*/.test(currentLocation)) {
      setIsStockListOpen(true);
      setIsDashboardOpen(false);
      setIsPortfolioOpen(false);
      setIsCashOpen(false);
    }
    else if (/portfolios.*/.test(currentLocation)) {
      setIsPortfolioOpen(true);
      setIsStockListOpen(false);
      setIsDashboardOpen(false);
      setIsCashOpen(false);
    }
    else if (/cash.*/.test(currentLocation)) {
      setIsCashOpen(true);
      setIsDashboardOpen(false);
      setIsStockListOpen(false);
      setIsPortfolioOpen(false);
    }
  }, [history.location.pathname]);



  const handleClickLogo = () => {
    if (!loading) {
      if (!isAuthenticated) {
        history.push('/');
      }
      else {
        history.push('/dashboard');
      }
    }
  };

  const handleDashboardLogout = () => {
    logout();
  }

  const goToProfilePage = () => {
    history.push('/profile');
  }

  const handleHomeOpen = () => {
    history.push('/');
  }

  const handleSignUpOpen = () => {
    history.push('/signup');
  }

  const handleLoginOpen = () => {
    history.push('/login');
  }

  const handleDashboardOpen = () => {
    history.push('/dashboard');
  }

  const handleStockListOpen = () => {
    history.push('/stocks');
  }

  const handlePortfolioOpen = () => {
    history.push('/portfolios');
  }

  const handleCashOpen = () => {
    history.push('/cash');
  }

  const navGuest = (
    <React.Fragment>
      <div
        className="dashboard-main dashboard-icon-container"
        title="Open Landing Page"
        onClick={handleHomeOpen}
        style={isHomeOpen ? { backgroundColor: "var(--light-theme-bg-color)", color: "var(--light-dark-color)" } : null}
      >
        <HomeIcon />
        <span>Home</span>
      </div>
      <div
        className="dashboard-main dashboard-icon-container"
        title="Open Sign-up Page"
        onClick={handleSignUpOpen}
        style={isSignUpOpen ? { backgroundColor: "var(--light-theme-bg-color)", color: "var(--light-dark-color)" } : null}
      >
        <SignUpIcon />
        <span>Sign Up</span>
      </div>
      <div
        className="dashboard-main dashboard-icon-container"
        title="Open Login Page"
        onClick={handleLoginOpen}
        style={isLoginOpen ? { backgroundColor: "var(--light-theme-bg-color)", color: "var(--light-dark-color)" } : null}
      >
        <LoginIcon />
        <span>Login</span>
      </div>
      <div className="navbar-mobile-icons">
        <div
          className="mobile-icon-item"
          style={isHomeOpen ? { backgroundColor: "var(--light-theme-bg-color)", color: "var(--light-dark-color)" } : null}
          onClick={handleHomeOpen}>
          <HomeIcon />
        </div>
        <div
          className="mobile-icon-item"
          style={isSignUpOpen ? { backgroundColor: "var(--light-theme-bg-color)", color: "var(--light-dark-color)" } : null}
          onClick={handleSignUpOpen}
        >
          <SignUpIcon />
        </div>
        <div
          className="mobile-icon-item"
          style={isLoginOpen ? { backgroundColor: "var(--light-theme-bg-color)", color: "var(--light-dark-color)" } : null}
          onClick={handleLoginOpen}
        >
          <LoginIcon />
        </div>
      </div>
    </React.Fragment>
  );
  const navAuth = (
    <React.Fragment>
      <div
        className="dashboard-main dashboard-icon-container"
        title="Main Dashboard Page"
        onClick={handleDashboardOpen}
        style={isDashboardOpen ? { backgroundColor: "var(--light-theme-bg-color)", color: "var(--light-dark-color)" } : null}
      >
        <MonitorIcon />
        <span>Dashboard</span>
      </div>
      <div
        className="dashboard-icon-container"
        title="Shows My Stocks"
        onClick={handleStockListOpen}
        style={isStockListOpen ? { backgroundColor: "var(--light-theme-bg-color)", color: "var(--light-dark-color)" } : null}
      >
        <ListIcon />
        <span>Stock List</span>
      </div>
      <div
        className="dashboard-icon-container"
        title="Displays My Portfolio"
        onClick={handlePortfolioOpen}
        style={isPortfolioOpen ? { backgroundColor: "var(--light-theme-bg-color)", color: "var(--light-dark-color)" } : null}
      >
        <FolderIcon />
        <span>Portfolio</span>
      </div>
      <div
        className="dashboard-icon-container"
        title="Displays My Cash"
        onClick={handleCashOpen}
        style={isCashOpen ? { backgroundColor: "var(--light-theme-bg-color)", color: "var(--light-dark-color)" } : null}
      >
        <CoinIcon />
        <span>Cash</span>
      </div>
      <div className="navbar-avatar-container">
        <AvatarImage />
      </div>
      <div
        className="dashboard-icon-container dashboard-logout"
        onClick={handleDashboardLogout}
      >
        <SignOutIcon />
        <span>Sign Out</span>
      </div>
      <div className="navbar-mobile-icons">
        <div
          className="mobile-icon-item"
          style={isDashboardOpen ? { backgroundColor: "var(--light-theme-bg-color)", color: "var(--light-dark-color)" } : null}
          onClick={handleDashboardOpen}>
          <MonitorIcon />
        </div>
        <div
          className="mobile-icon-item"
          style={isStockListOpen ? { backgroundColor: "var(--light-theme-bg-color)", color: "var(--light-dark-color)" } : null}
          onClick={handleStockListOpen}
        >
          <ListIcon />
        </div>
        <div
          className="mobile-icon-item"
          style={isPortfolioOpen ? { backgroundColor: "var(--light-theme-bg-color)", color: "var(--light-dark-color)" } : null}
          onClick={handlePortfolioOpen}
        >
          <FolderIcon />
        </div>
        <div
          className="mobile-icon-item"
          style={isCashOpen ? { backgroundColor: "var(--light-theme-bg-color)", color: "var(--light-dark-color)" } : null}
          onClick={handleCashOpen}>
          <CoinIcon />
        </div>
        <div className="mobile-icon-item" onClick={handleDashboardLogout}>
          <SignOutIcon />
        </div>
      </div>
    </React.Fragment>
  );

  return (
    <React.Fragment>
      {!loading && (
        <nav className={`navbar ${theme === 'light' ? 'navbar--light-theme' : 'navbar--dark-theme'}`}>
          <img src={mainLogoWhite} alt="main logo" className="main-logo" onClick={handleClickLogo} />
          {isAuthenticated ? navAuth : navGuest}
        </nav>
      )}
      {children}
    </React.Fragment>
  );
}

Navbar.propTypes = {
  loading: PropTypes.bool,
  isAuthenticated: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  loading: state.auth.loading,
  isAuthenticated: state.auth.isAuthenticated,
  theme: state.auth.theme,
  user: state.auth.user
});

export default connect(mapStateToProps, { logout })(withRouter(Navbar));