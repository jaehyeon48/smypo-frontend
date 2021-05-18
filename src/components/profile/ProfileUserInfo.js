import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import validator from 'validator';

import Button from '../button/Button';
import { loadUser } from '../../actions/authAction';
import {
  updateProfileData,
  updateUserPassword
} from '../../actions/userAction';
import { showAlert } from '../../actions/alertAction';

const ProfileUserInfo = ({
  user,
  updateProfileData,
  updateUserPassword,
  loadUser,
  showAlert
}) => {
  const [profileFormData, setProfileFormData] = useState({
    firstName: user.firstName,
    lastName: user.lastName,
    username: user.username
  });
  const [initialUsername, setInitialUsername] = useState(user.username);
  const [pwFormData, setPWFormData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });
  const [usernameDupErr, setUsernameDupErr] = useState(false);
  const [currentPWErr, setCurrentPWErr] = useState(false);
  const [newPWErr, setNewPWErr] = useState(false);
  const [confirmPWErr, setConfirmPWErr] = useState(false);

  const { firstName, lastName, username } = profileFormData;
  const { currentPassword, newPassword, confirmPassword } = pwFormData;

  useEffect(() => {
    if (user.username) {
      setInitialUsername(user.username);
    }
  }, [user.username]);

  const disableUsernameDupErr = () => {
    if (usernameDupErr) {
      setUsernameDupErr(false);
    }
  }

  const disableCurrentPWErr = () => {
    if (currentPWErr) {
      setCurrentPWErr(false);
    }
  }

  const disableNewPWErr = () => {
    if (newPWErr) {
      setNewPWErr(false);
    }
  }

  const disableConfirmErr = () => {
    if (confirmPWErr) {
      setConfirmPWErr(false);
    }
  }

  const handleFormDataChange = (e) => {
    setProfileFormData({
      ...profileFormData,
      [e.target.name]: e.target.value
    });
  }

  const handlePWChange = (e) => {
    setPWFormData({
      ...pwFormData,
      [e.target.name]: e.target.value
    });
  }

  const handleEditProfileData = async () => {
    const updateProfileResult = await updateProfileData(profileFormData, username !== initialUsername);
    if (updateProfileResult === -2) {
      setUsernameDupErr(true);
    } else if (updateProfileResult === 0) {
      loadUser();
      showAlert('The profile was successfully edited!', 'success');
    }
    else if (updateProfileResult === -1) {
      showAlert('Something went wrong. Please try again.', 'error');
    }
  }

  const handleEditPassword = async () => {
    if (newPassword.match(/[-#!$@%^&*()_+|~=`{}[\]:";'<>?,./]/g) === null
      || newPassword.length < 8) {
      setNewPWErr(true);
      return;
    }

    if (newPassword !== confirmPassword) {
      setConfirmPWErr(true);
      return;
    }
    try {
      const updatePWResult = await updateUserPassword(pwFormData);
      if (updatePWResult === -2) { // current password does not match
        setCurrentPWErr(true);
        return;
      }
      showAlert('Successfully changed your password.', 'success');
      setPWFormData({
        currentPassword: '',
        newPassword: '',
        confirmPassword: ''
      });
    } catch (error) {
      showAlert('Something went wrong. Please try again.', 'error');
    }
  }

  return (
    <React.Fragment>
      <div className="profile-form-user-info">
        <header>Account</header>
        <div className="profile-form-names">
          <label className="profile-form-label">
            First Name
          <input
              type="text"
              placeholder="First Name"
              name="firstName"
              value={firstName}
              onChange={handleFormDataChange}
              className="profile-form-field"
            />
          </label>
          <label className="profile-form-label">
            Last Name
          <input
              type="text"
              placeholder="Last Name"
              name="lastName"
              value={lastName}
              onChange={handleFormDataChange}
              className="profile-form-field"
            />
          </label>
        </div>
        <label className={`profile-form-label${usernameDupErr ? '--error' : ''}`}>
          Username
          <input
            type="text"
            placeholder="Username"
            name="username"
            value={username}
            onChange={handleFormDataChange}
            onKeyUp={disableUsernameDupErr}
            className="profile-form-field"
          />
          {usernameDupErr && <small>This username is taken. Try another.</small>}
        </label>
        <Button
          btnType="button"
          btnColor="warning"
          btnText="Edit Profile"
          isDisabled={usernameDupErr}
          onClickFunc={handleEditProfileData}
        />
      </div>
      <div className="profile-form-password">
        <header>Password</header>
        <label className={`profile-form-label${currentPWErr ? '--error' : ''}`}>
          Current Password
          <input
            type="password"
            placeholder="Current Password"
            name="currentPassword"
            value={currentPassword}
            onChange={handlePWChange}
            onKeyUp={disableCurrentPWErr}
            className="profile-form-field"
          />
          {currentPWErr && <small>Current password does not correct.</small>}
        </label>
        <label className={`profile-form-label${newPWErr ? '--error' : ''}`}>
          New Password
            <input
            type="password"
            placeholder="New Password"
            name="newPassword"
            value={newPassword}
            onChange={handlePWChange}
            onKeyUp={disableNewPWErr}
            className="profile-form-field"
          />
          <p className="profile-password-condition">Password must be at least 8 characters long and must contain at least one special character.</p>
        </label>
        <label className={`profile-form-label${confirmPWErr ? '--error' : ''}`}>
          Confirm New Password
            <input
            type="password"
            placeholder="New Password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={handlePWChange}
            onKeyUp={disableConfirmErr}
            className="profile-form-field"
          />
          {confirmPWErr && <small>Please enter identical passwords.</small>}
        </label>
        <Button
          btnType="button"
          btnText="Change Password"
          btnColor="warning"
          onClickFunc={handleEditPassword}
        />
      </div>
    </React.Fragment>
  );
}

const mapStateToProps = (state) => ({
  user: state.auth.user
})

export default connect(mapStateToProps, {
  updateProfileData,
  updateUserPassword,
  loadUser,
  showAlert
})(ProfileUserInfo);
