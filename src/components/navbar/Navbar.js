import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { withRouter, useHistory, Link } from 'react-router-dom';

import AvatarImage from '../avatar/AvatarImage';
import mainLogo from '../../images/main-logo.png';

/* Import SVG Icon Components */
import SignUpIcon from '../icons/SignUpIcon';
import LoginIcon from '../icons/LoginIcon';
import AnalyticsIcon from '../icons/AnalyticsIcon';
import ListIcon from '../icons/ListIcon';
import FolderIcon from '../icons/FolderIcon';
import PiggyBankIcon from '../icons/PiggyBankIcon';
import SignOutIcon from '../icons/SignOutIcon';
import CoinIcon from '../icons/CoinIcon';
import BarsIcon from '../icons/BarsIcon';
import { logout } from '../../actions/authAction';

const Navbar = ({
  loading,
  isAuthenticated,
  user,
  logout,
  children
}) => {
  let history = useHistory();
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  // register closing profile dropdown function
  useEffect(() => {
    document.addEventListener('click', closeProfileDropdown);
    return () => {
      document.removeEventListener('click', closeProfileDropdown);
    }
  }, []);

  // register closing mobile navbar function
  useEffect(() => {
    document.addEventListener('click', closeMobileNav);
    return () => {
      document.removeEventListener('click', closeMobileNav);
    }
  }, []);

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

  const handleSignOut = () => {
    logout();
  }

  const toggleProfileDropdown = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  }

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  }

  const closeProfileDropdown = (e) => {
    if (e.target.classList.contains('navbar__avatar-container') ||
      e.target.classList.contains('avatar-container') ||
      e.target.classList.contains('avatar-image')) return;
    setIsProfileDropdownOpen(false);
  }

  const closeMobileNav = (e) => {
    if (e.target.classList.contains('navbar-menu') ||
      e.target.classList.contains('navbar__bars-icon') ||
      e.target.parentNode.classList.contains('navbar__bars-icon')) return;
    setIsMobileNavOpen(false);
  }

  const navGuest = (
    <ul className="navbar-menu">
      <li>
        <Link to="/signup" className="navbar-menu__signup">
          <SignUpIcon />Sign Up
        </Link>
      </li>
      <li>
        <Link to="/login" className="navbar-menu__login">
          <LoginIcon />Login
        </Link>
      </li>
      <BarsIcon onClickFunc={toggleMobileNav} isMobileNavOpen={isMobileNavOpen} />
      {isMobileNavOpen && (
        <div className="navbar__mobile">
          <ul>
            <li>
              <Link to="/signup" className="navbar-mobile__signup" onClick={toggleMobileNav}>
                <SignUpIcon />Sign Up
              </Link>
            </li>
            <li>
              <Link to="/login" className="navbar-mobile__login" onClick={toggleMobileNav}>
                <LoginIcon />Login
              </Link>
            </li>
          </ul>
        </div>
      )}
    </ul>
  );
  const navAuth = (
    <ul className="navbar-menu">
      <li className="navbar__user-name">
        <p className="navbar__user-name-welcome">Welcome!</p>
        <p className="navbar__user-name-content">{user?.username}</p>
      </li>
      <li
        className={isProfileDropdownOpen ?
          'navbar__avatar-container profile-dropdown--open' : 'navbar__avatar-container profile-dropdown--close'}
        onClick={toggleProfileDropdown}>
        <AvatarImage />
        {isProfileDropdownOpen && (
          <ul className="navbar__profile-dropdown">
            <li className="navbar__user-name-mobile">
              <p className="navbar__user-name-welcome">Welcome!</p>
              <p className="navbar__user-name-content">{user?.username}</p>
            </li>
            <li>
              <Link to="/dashboard">
                <AnalyticsIcon />
                <span>Dashboard</span>
              </Link>
            </li>
            <li>
              <Link to="/stocks">
                <ListIcon />
                <span>Stock List</span>
              </Link>
            </li>
            <li>
              <Link to="/stocks/realized">
                <PiggyBankIcon />
                <span>Realized Stocks</span>
              </Link>
            </li>
            <li>
              <Link to="/portfolios">
                <FolderIcon />
                <span>My Portfolios</span>
              </Link>
            </li>
            <li>
              <Link to="/cash">
                <CoinIcon />
                <span>Cash</span>
              </Link>
            </li>
            <li
              className="navbar__sign-out"
              onClick={handleSignOut}
            >
              <SignOutIcon />
              <span>Sign Out</span>
            </li>
          </ul>
        )}
      </li>
    </ul>
  );

  return (
    <React.Fragment>
      {!loading && (
        <nav className="navbar">
          <img src={mainLogo} alt="main logo" className="navbar__main-logo" onClick={handleClickLogo} />
          {isAuthenticated ? navAuth : navGuest}
        </nav>
      )}
      {children}
    </React.Fragment>
  );
}

const mapStateToProps = state => ({
  loading: state.auth.loading,
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user
});

export default connect(mapStateToProps, { logout })(withRouter(Navbar));