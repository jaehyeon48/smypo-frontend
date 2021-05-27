import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import validator from 'validator';

import Button from '../button/Button';

import { login } from '../../actions/authAction';
import { showAlert } from '../../actions/alertAction';
import EyeOpenIcon from '../icons/EyeOpenIcon';
import EyeCloseIcon from '../icons/EyeCloseIcon';

const Login = ({
  login,
  showAlert
}) => {
  const [loginFormData, setLoginFormData] = useState({
    userEnteredId: '', // could be username or email
    password: ''
  });
  const [enteredIdErr, setEnteredIdErr] = useState(false);
  const [passwordErr, setPasswordErr] = useState(false);
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(false);
  const [isFirstSubmit, setIsFirstSubmit] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const { userEnteredId, password } = loginFormData;

  useEffect(() => {
    if (!isFirstSubmit) {
      if (userEnteredId.trim() === '') setEnteredIdErr(true);
      else setEnteredIdErr(false);
    }
  }, [isFirstSubmit, enteredIdErr, userEnteredId]);


  useEffect(() => {
    if (!isFirstSubmit && !validator.isLength(password, { min: 8 })) {
      setPasswordErr(true);
    }
    else if (!isFirstSubmit && validator.isLength(password, { min: 8 })) {
      setPasswordErr(false);
    }
  }, [isFirstSubmit, passwordErr, password]);


  useEffect(() => {
    if (!isFirstSubmit && (enteredIdErr || passwordErr)) {
      setIsSubmitDisabled(true);
    }
    else {
      setIsSubmitDisabled(false);
    }
  }, [isFirstSubmit, enteredIdErr, passwordErr]);

  async function handleSubmit(e) {
    e.preventDefault();

    if (isFirstSubmit) {
      setIsFirstSubmit(false);
      setIsSubmitDisabled(true);
      if (!validator.isEmail(userEnteredId)) {
        setEnteredIdErr(true);
      }
      if (!validator.isLength(password, { min: 8 })) {
        setPasswordErr(true);
      }
      else {
        const loginResult = await login(loginFormData);
        if (loginResult === -1) {
          showAlert('Incorrect username(or email) or password', 'error');
        } else if (loginResult === -2) {
          showAlert('Server Error happened. Please try again.', 'error');
        }
      }
    }
    else {
      const loginResult = await login(loginFormData);
      if (loginResult === -1) {
        showAlert('Incorrect username(or email) or password', 'error');
      } else if (loginResult === -2) {
        showAlert('Server Error happened. Please try again.', 'error');
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

  return (
    <React.Fragment>
      <main className="auth__form-container">
        <p>Join SMYPO.com</p>
        <h1>LOGIN</h1>
        <form className="auth__form" onSubmit={handleSubmit}>
          <div className="auth__form-group">
            <label className={`auth__form-label${enteredIdErr ? '--error' : ''}`}>Username or email</label>
            <input
              type="text"
              className={`auth__form-field${enteredIdErr ? '--error' : ''}`}
              name="userEnteredId"
              value={userEnteredId}
              placeholder="Username or email"
              onChange={handleChange}
            />
          </div>
          <div className="auth__form-group">
            <label className={`auth__form-label${passwordErr ? '--error' : ''}`}>Password</label>
            <input
              type={showPassword ? "text" : "password"}
              className={`auth__form-field${passwordErr ? '--error' : ''}`}
              name="password"
              value={password}
              placeholder="Password"
              onChange={handleChange}
            />
            <span
              className="auth-show-pw-icon-container"
              onClick={handleShowPassword}>
              {showPassword ? <EyeOpenIcon /> : <EyeCloseIcon />}
            </span>
            <small className="auth-form-text">Password must be at least 8 characters long and must contain at least one special character.</small>
          </div>
          <div className="auth__form-group">
            <Button
              btnType={'submit'}
              btnText={'LOGIN'}
              isDisabled={isSubmitDisabled}
            />
          </div>
        </form>
        <div className="auth__footer">
          New to SMYPO.com? <Link to="/signup">Sign Up</Link>
        </div>
      </main>
    </React.Fragment>
  );
}

export default connect(null, {
  login,
  showAlert
})(Login);
