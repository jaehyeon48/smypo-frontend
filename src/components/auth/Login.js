import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import validator from 'validator';

import { login } from '../../actions/authAction';
import { showAlert } from '../../actions/alertAction';

const Login = ({
  loading,
  isAuthenticated,
  login,
  showAlert
}) => {
  const [loginFormData, setLoginFormData] = useState({
    email: '',
    password: ''
  });
  const [emailErr, setEmailErr] = useState(false);
  const [passwordErr, setPasswordErr] = useState(false);
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(false);
  const [isFirstSubmit, setIsFirstSubmit] = useState(true);

  const [showPassword, setShowPassword] = useState(false);

  const { email, password } = loginFormData;

  useEffect(() => {
    if (!isFirstSubmit && !validator.isEmail(email)) {
      setEmailErr(true);
    }
    else if (!isFirstSubmit && validator.isEmail(email)) {
      setEmailErr(false);
    }
  }, [isFirstSubmit, emailErr, email]);


  useEffect(() => {
    if (!isFirstSubmit && !validator.isLength(password, { min: 4 })) {
      setPasswordErr(true);
    }
    else if (!isFirstSubmit && validator.isLength(password, { min: 4 })) {
      setPasswordErr(false);
    }
  }, [isFirstSubmit, passwordErr, password]);


  useEffect(() => {
    if (!isFirstSubmit && (emailErr || passwordErr)) {
      setIsSubmitDisabled(true);
    }
    else {
      setIsSubmitDisabled(false);
    }
  }, [isFirstSubmit, emailErr, passwordErr]);

  async function handleSubmit(e) {
    e.preventDefault();

    if (isFirstSubmit) {
      setIsFirstSubmit(false);
      setIsSubmitDisabled(true);
      if (!validator.isEmail(email)) {
        setEmailErr(true);
      }
      if (!validator.isLength(password, { min: 4 })) {
        setPasswordErr(true);
      }
      else {
        const loginResult = await login(loginFormData);
        if (loginResult === -1) {
          showAlert('Email or password is invalid. Please Try again!', 'fail');
        }
      }
    }
    else {
      const loginResult = await login(loginFormData);
      if (loginResult === -1) {
        showAlert('Email or password is invalid. Please Try again!', 'fail');
      }
    }
  }

  function handleChange(e) {
    setLoginFormData({
      ...loginFormData,
      [e.target.name]: e.target.value
    });
  }

  function handleShowPassword() {
    setShowPassword(!showPassword);
  }

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />
  }

  return (
    <React.Fragment>
      {!loading &&
        <div className="auth-form-container">
          <p className="auth-form-subtitle">Join TYROS</p>
          <h1 className="auth-form-title">Login</h1>
          <form className="auth-form" onSubmit={handleSubmit}>
            <div className="auth-form-group">
              <label className={`auth-form-label ${emailErr && "form-label-error"}`}>Email</label>
              <input
                type="text"
                className={`auth-form-field ${emailErr && "form-field-error"}`}
                name="email"
                value={email}
                placeholder="Email"
                onChange={handleChange}
              />
            </div>
            <div className="auth-form-group">
              <label className={`auth-form-label ${passwordErr && "form-label-error"}`}>Password</label>
              <input
                type={showPassword ? "text" : "password"}
                className={`auth-form-field ${passwordErr && "form-field-error"}`}
                name="password"
                value={password}
                placeholder="Password"
                onChange={handleChange}
              />
              <small className="auth-form-text">Password must be at least 8 characters long. </small>
            </div>
            <label className="auth-checkbox-container">Show password
            <input type="checkbox" onClick={handleShowPassword} />
              <span className="checkmark"></span>
            </label>
            <div className="auth-form-group">
              <button type="submit" className="btn auth-button" disabled={isSubmitDisabled}>LOGIN</button>
            </div>
          </form>
          <div className="auth-footer">
            Doesn't have an account? <Link to="/signup">Sign Up</Link>
          </div>
        </div>}
    </React.Fragment>
  );
}

Login.propTypes = {
  loading: PropTypes.bool,
  isAuthenticated: PropTypes.bool,
  login: PropTypes.func,
  showAlert: PropTypes.func,
};

const mapStateToProps = state => ({
  loading: state.auth.loading,
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, {
  login,
  showAlert
})(Login);
