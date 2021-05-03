import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import validator from 'validator';

import Button from '../button/Button';
import {
  checkUsernameAvailability,
  checkEmailAvailability
} from '../../utils/checkingAvailability';
import { signUp } from '../../actions/authAction';
import { showAlert } from '../../actions/alertAction';

const SignUp = ({
  signUp,
  showAlert
}) => {
  const [signUpFormData, setSignUpFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    username: '',
    password: ''
  });
  const [firstNameErr, setFirstNameErr] = useState(false);
  const [lastNameErr, setLastNameErr] = useState(false);
  const [usernameErr, setUsernameErr] = useState(false);
  const [usernameDupErr, setUsernameDupErr] = useState(false); // Dup for Duplicate
  const [emailErr, setEmailErr] = useState(false);
  const [emailDupErr, setEmailDupErr] = useState(false);
  const [passwordErr, setPasswordErr] = useState(false);
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(false);
  const [isFirstSubmit, setIsFirstSubmit] = useState(true);

  const [showPassword, setShowPassword] = useState(false);

  const { firstName, lastName, email, username, password } = signUpFormData;

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
    if (!isFirstSubmit && username.trim() === '') {
      setUsernameErr(true);
    }
    else if (!isFirstSubmit && username.trim() !== '') {
      setUsernameErr(false);
    }
  }, [isFirstSubmit, usernameErr, username]);


  useEffect(() => {
    if (!isFirstSubmit && !validator.isLength(password, { min: 8 })) {
      setPasswordErr(true);
    }
    else if (!isFirstSubmit && validator.isLength(password, { min: 8 })) {
      setPasswordErr(false);
    }
  }, [isFirstSubmit, passwordErr, password]);

  useEffect(() => {
    if (usernameDupErr || emailDupErr) {
      setIsSubmitDisabled(true);
    } else {
      setIsSubmitDisabled(false);
    }
  }, [usernameDupErr, emailDupErr]);

  useEffect(() => {
    if (!isFirstSubmit && (firstNameErr || lastNameErr ||
      emailErr || usernameErr || passwordErr)) {
      setIsSubmitDisabled(true);
    } else {
      setIsSubmitDisabled(false);
    }
  }, [isFirstSubmit, firstNameErr,
    lastNameErr, emailErr,
    usernameErr, passwordErr]);

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
      if (username.trim() === '') {
        setUsernameErr(true);
      }
      if (!validator.isLength(password, { min: 4 })) {
        setPasswordErr(true);
      }
      else {
        const signUpResult = await signUp(signUpFormData);
        if (signUpResult !== 0) {
          showAlert(signUpResult, 'error');
        }
      }
    }
    else {
      const signUpResult = await signUp(signUpFormData);
      if (signUpResult !== 0) {
        showAlert(signUpResult, 'error');
      }
    }
  }

  function handleChange(e) {
    setSignUpFormData({
      ...signUpFormData,
      [e.target.name]: e.target.value
    });
  }

  function handleShowPassword() {
    setShowPassword(!showPassword);
  }

  async function handleUsernameAvailability() {
    const checkRes = await checkUsernameAvailability(username.trim());
    if (checkRes === 0 || username.trim() === '') { // if the username does not exist
      setUsernameDupErr(false);
    } else { // if the username already exists
      setUsernameDupErr(true);
    }
  }

  async function handleEmailAvailability() {
    const checkRes = await checkEmailAvailability(email.trim());
    if (checkRes === 0 || email.trim() === '') { // if the email does not exist
      setEmailDupErr(false);
    } else { // if the email already exists
      setEmailDupErr(true);
    }
  }

  return (
    <React.Fragment>
      <main className="auth__form-container">
        <p>Join SMYPO.com</p>
        <h1>CREATE YOUR ACCOUNT</h1>
        <form className="auth__form" onSubmit={handleSubmit}>
          <div className="auth__signup-names">
            <div className="auth__form-group">
              <label className={firstNameErr ? "auth__form-label form-label--error" : "auth__form-label"}>First Name</label>
              <input
                type="text"
                className={firstNameErr ? "auth__form-field form-field--error" : "auth__form-field"}
                name="firstName"
                value={firstName}
                placeholder="First Name"
                onChange={handleChange}
              />
            </div>
            <div className="auth__form-group">
              <label className={lastNameErr ? "auth__form-label form-label--error" : "auth__form-label"}>Last Name</label>
              <input
                type="text"
                className={lastNameErr ? "auth__form-field form-field--error" : "auth__form-field"}
                name="lastName"
                value={lastName}
                placeholder="Last Name"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="auth__form-group">
            <label className={usernameErr || usernameDupErr ? "auth__form-label form-label--error" : "auth__form-label"}>Username</label>
            <input
              type="text"
              className={usernameErr || usernameDupErr ? "auth__form-field form-field--error" : "auth__form-field"}
              name="username"
              value={username}
              placeholder="Username"
              onChange={handleChange}
              onKeyUp={handleUsernameAvailability}
            />
            {usernameDupErr && <small className="auth__dup-err">This username is taken. Try another.</small>}
          </div>
          <div className="auth__form-group">
            <label className={emailErr || emailDupErr ? "auth__form-label form-label--error" : "auth__form-label"}>Email</label>
            <input
              type="email"
              className={emailErr || emailDupErr ? "auth__form-field form-field--error" : "auth__form-field"}
              name="email"
              value={email}
              placeholder="Email"
              onChange={handleChange}
              onKeyUp={handleEmailAvailability}
            />
            {emailDupErr && <small className="auth__dup-err">This email is taken. Try another.</small>}
          </div>
          <div className="auth__form-group">
            <label className={passwordErr ? "auth__form-label form-label--error" : "auth__form-label"}>Password</label>
            <input
              type={showPassword ? "text" : "password"}
              className={passwordErr ? "auth__form-field form-field--error" : "auth__form-field"}
              name="password"
              value={password}
              placeholder="Password"
              onChange={handleChange}
            />
            <small>Password must be at least 8 characters long. </small>
          </div>
          <label className="auth__checkbox-container">Show password
            <input type="checkbox" onClick={handleShowPassword} />
          </label>
          <div className="auth__form-group">
            <Button
              btnType={'submit'}
              btnText={'SIGN UP'}
              isDisabled={isSubmitDisabled}
            />
          </div>
        </form>
        <div className="auth__footer">
          Already have an account? <Link to="/login">Log in</Link>
        </div>
      </main>
    </React.Fragment>
  );
}

export default connect(null, {
  signUp,
  showAlert
})(SignUp);
