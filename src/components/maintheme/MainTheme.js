import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import './maintheme.css';

const MainTheme = ({
  children,
  theme
}) => {
  return (
    <div className={theme === 'light' ? 'main--light-theme' : 'main--dark-theme'}>
      {children}
    </div>
  );
}

MainTheme.propTypes = {
  theme: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  theme: state.auth.theme
});

export default connect(mapStateToProps)(MainTheme);