import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import validator from 'validator';

import { signUp } from '../../actions/authAction';
import { showAlert } from '../../actions/alertAction';

const SignUp = ({
  loading,
  isAuthenticated,
  signUp,
  showAlert
}) => {
  const [signupFormData, setSignupFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  });
  const [firstNameErr, setFirstNameErr] = useState(false);
  const [lastNameErr, setLastNameErr] = useState(false);
  const [emailErr, setEmailErr] = useState(false);
  const [passwordErr, setPasswordErr] = useState(false);
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(false);
  const [isFirstSubmit, setIsFirstSubmit] = useState(true);

  const [showPassword, setShowPassword] = useState(false);

  const { firstName, lastName, email, password } = signupFormData;

  useEffect(() => {
    if (!isFirstSubmit && firstName.trim() === '') {
      setFirstNameErr(true);
    }
    else if (!isFirstSubmit && firstName.trim() !== '') {
      setFirstNameErr(false);
    }
  }, [isFirstSubmit, firstNameErr, firstName]);


  useEffect(() => {
    if (!isFirstSubmit && lastName.trim() === '') {
      setLastNameErr(true);
    }
    else if (!isFirstSubmit && lastName.trim() !== '') {
      setLastNameErr(false);
    }
  }, [isFirstSubmit, lastNameErr, lastName]);


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
    if (!isFirstSubmit && (firstNameErr || lastNameErr || emailErr || passwordErr)) {
      setIsSubmitDisabled(true);
    }
    else {
      setIsSubmitDisabled(false);
    }
  }, [isFirstSubmit, firstNameErr, lastNameErr, emailErr, passwordErr]);

  async function handleSubmit(e) {
    e.preventDefault();

    if (isFirstSubmit) {
      setIsFirstSubmit(false);
      setIsSubmitDisabled(true);
      if (firstName.trim() === '') {
        setFirstNameErr(true);
      }
      if (lastName.trim() === '') {
        setLastNameErr(true);
      }
      if (!validator.isEmail(email)) {
        setEmailErr(true);
      }
      if (!validator.isLength(password, { min: 4 })) {
        setPasswordErr(true);
      }
      else {
        const signUpResult = await signUp(signupFormData);
        if (signUpResult === -1) {
          showAlert('User already exists. Please try other email!', 'fail');
        }
      }
    }
    else {
      const signUpResult = await signUp(signupFormData);
      if (signUpResult === -1) {
        showAlert('User already exists. Please try other email!', 'fail');
      }
    }
  }

  function handleChange(e) {
    setSignupFormData({
      ...signupFormData,
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
          <h1 className="auth-form-title">CREATE YOUR ACCOUNT</h1>
          <form className="auth-form" onSubmit={handleSubmit}>
            <div className="auth-form-group">
              <label className={`auth-form-label ${firstNameErr && "form-label-error"}`}>First Name</label>
              <input
                type="text"
                className={`auth-form-field ${firstNameErr && "form-field-error"}`}
                name="firstName"
                value={firstName}
                placeholder="First Name"
                onChange={handleChange}
              />
            </div>
            <div className="auth-form-group">
              <label className={`auth-form-label ${lastNameErr && "form-label-error"}`}>Last Name</label>
              <input
                type="text"
                className={`auth-form-field ${lastNameErr && "form-field-error"}`}
                name="lastName"
                value={lastName}
                placeholder="Last Name"
                onChange={handleChange}
              />
            </div>
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
              <button type="submit" className="btn auth-button" disabled={isSubmitDisabled}>SIGN UP</button>
            </div>
          </form>
          <div className="auth-footer">
            Already have an account? <Link to="/login">Log in</Link>
          </div>
        </div>}
    </React.Fragment>
  );
}

SignUp.propTypes = {
  loading: PropTypes.bool,
  isAuthenticated: PropTypes.bool,
  signUp: PropTypes.func,
  showAlert: PropTypes.func
};

const mapStateToProps = state => ({
  loading: state.auth.loading,
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, {
  signUp,
  showAlert
})(SignUp);
