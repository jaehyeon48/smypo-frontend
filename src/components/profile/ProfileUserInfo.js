import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import Button from '../button/Button';
import ConfirmModal from '../modal/ConfirmModal';
import { loadUser } from '../../actions/authAction';
import {
  updateProfileData,
  updateUserPassword,
  deleteAccount
} from '../../actions/userAction';
import { showAlert } from '../../actions/alertAction';
import EyeOpenIcon from '../icons/EyeOpenIcon';
import EyeCloseIcon from '../icons/EyeCloseIcon';

const ProfileUserInfo = ({
  user,
  updateProfileData,
  updateUserPassword,
  deleteAccount,
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
  // delete account field means password confirmation field for deleting the account
  const [isDeleteAccountFieldOpen, setIsDeleteAccountFieldOpen] = useState(false);
  const [isDeleteAccountModalOpen, setIsDeleteAccountModalOpen] = useState(false);
  const [deleteAccountConfirmPW, setDeleteAccountConfirmPW] = useState('');
  const [deleteAccountConfirmPWErr, setDeleteAccountConfirmPwErr] = useState(false);
  const [showCurrentPW, setShowCurrentPW] = useState(false);
  const [showNewPW, setShowNewPW] = useState(false);
  const [showConfirmPW, setShowConfirmPW] = useState(false);
  const [showDeleteConfirmPW, setShowDeleteConfirmPW] = useState(false);

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

  const disableDeleteAccountConfirmPWErr = () => {
    if (deleteAccountConfirmPWErr) {
      setDeleteAccountConfirmPwErr(false);
    }
  }

  const openDeleteAccountField = () => {
    setIsDeleteAccountFieldOpen(true);
  }

  const closeDeleteAccountField = () => {
    setIsDeleteAccountFieldOpen(false);
    setDeleteAccountConfirmPW('');
  }

  const confirmDeleteAccountPW = async () => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      },
      withCredentials: true
    };

    try {
      const confirmRes = await axios.post(`${process.env.REACT_APP_SERVER_URL}/user/confirm-password`,
        JSON.stringify({ confirmPassword: deleteAccountConfirmPW }), config);

      if (confirmRes.data === -2) {
        setDeleteAccountConfirmPwErr(true);
        return;
      }
      openDeleteAccountModal();
    } catch (error) {
      showAlert('Something went wrong. Please try again.', 'error');
    }
  }

  const openDeleteAccountModal = () => {
    document.body.style.overflow = 'hidden';
    setIsDeleteAccountModalOpen(true);
  }

  const closeDeleteAccountModal = () => {
    setIsDeleteAccountModalOpen(false);
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

  const handleDeleteConfirmPWChange = (e) => {
    setDeleteAccountConfirmPW(e.target.value);
  }

  const handleEditProfileData = async () => {
    if (initialUsername.match(/.*admin.*/gi) === null && username.match(/.*admin.*/gi) !== null) {
      setUsernameDupErr(true);
      return;
    }
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

  const handleDeleteAccount = async () => {
    try {
      const deleteRes = await deleteAccount();
      if (deleteRes !== 0) {
        showAlert('Something went wrong while deleting your account. Please try again.', 'error');
        setIsDeleteAccountModalOpen(false);
      }
    } catch (error) {
      showAlert('Something went wrong while deleting your account. Please try again.', 'error');
      setIsDeleteAccountModalOpen(false);
    }
  }

  const handleShowCurrentPW = () => {
    setShowCurrentPW(!showCurrentPW);
  }

  const handleShowNewPW = () => {
    setShowNewPW(!showNewPW);
  }

  const handleShowConfirmPW = () => {
    setShowConfirmPW(!showConfirmPW);
  }

  const handleShowDeleteConfirmPW = () => {
    setShowDeleteConfirmPW(!showDeleteConfirmPW);
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
            type={showCurrentPW ? "text" : "password"}
            placeholder="Current Password"
            name="currentPassword"
            value={currentPassword}
            onChange={handlePWChange}
            onKeyUp={disableCurrentPWErr}
            className="profile-form-field"
          />
          <span
            className="profile-show-pw-icon-container"
            onClick={handleShowCurrentPW}>
            {showCurrentPW ? <EyeOpenIcon /> : <EyeCloseIcon />}
          </span>
          {currentPWErr && <small>Current password does not correct.</small>}
        </label>
        <label className={`profile-form-label${newPWErr ? '--error' : ''}`}>
          New Password
            <input
            type={showNewPW ? "text" : "password"}
            placeholder="New Password"
            name="newPassword"
            value={newPassword}
            onChange={handlePWChange}
            onKeyUp={disableNewPWErr}
            className="profile-form-field"
          />
          <span
            className="profile-show-pw-icon-container"
            onClick={handleShowNewPW}>
            {showNewPW ? <EyeOpenIcon /> : <EyeCloseIcon />}
          </span>
          <p className="profile-password-condition">Password must be at least 8 characters long and must contain at least one special character.</p>
        </label>
        <label className={`profile-form-label${confirmPWErr ? '--error' : ''}`}>
          Confirm New Password
            <input
            type={showConfirmPW ? "text" : "password"}
            placeholder="New Password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={handlePWChange}
            onKeyUp={disableConfirmErr}
            className="profile-form-field"
          />
          <span
            className="profile-show-pw-icon-container"
            onClick={handleShowConfirmPW}>
            {showConfirmPW ? <EyeOpenIcon /> : <EyeCloseIcon />}
          </span>
          {confirmPWErr && <small>Please enter identical passwords.</small>}
        </label>
        <Button
          btnType="button"
          btnText="Change Password"
          btnColor="warning"
          onClickFunc={handleEditPassword}
        />
      </div>
      <div className="profile-delete-account">
        <header>Delete Account</header>
        <p>There is no going back, so please be certain to delete your account!</p>
        {!isDeleteAccountFieldOpen ? (
          <Button
            btnType="button"
            btnText="Delete Account"
            btnColor="danger"
            onClickFunc={openDeleteAccountField}
          />
        ) : (
          <div className="delete-account-actions">
            <Button
              btnType="button"
              btnText="Delete"
              btnColor="danger"
              className="test"
              onClickFunc={confirmDeleteAccountPW}
            />
            <Button
              btnType="button"
              btnText="Cancel"
              btnColor="lightGray"
              onClickFunc={closeDeleteAccountField}
            />
          </div>
        )}
        {isDeleteAccountFieldOpen && (
          <div className="delete-account-field-container">
            <label className={`profile-form-label${deleteAccountConfirmPWErr ? '--error' : ''}`}>
              Confirm Password
              <input
                type={showDeleteConfirmPW ? "text" : "password"}
                placeholder="Enter Password To Delete"
                value={deleteAccountConfirmPW}
                onChange={handleDeleteConfirmPWChange}
                onKeyUp={disableDeleteAccountConfirmPWErr}
                className="profile-form-field"
              />
              <span
                className="profile-show-pw-icon-container"
                onClick={handleShowDeleteConfirmPW}>
                {showDeleteConfirmPW ? <EyeOpenIcon /> : <EyeCloseIcon />}
              </span>
              {deleteAccountConfirmPWErr && <small>Password does not correct.</small>}
            </label>
          </div>
        )}
      </div>
      {isDeleteAccountModalOpen && (
        <ConfirmModal
          confirmMsg="We will immediately delete all of your account information. Once you delete your account, you cannot restore your deleted account. Do you really want to delete all of your account information?"
          confirmAction={handleDeleteAccount}
          closeModalFunc={closeDeleteAccountModal}
        />
      )}
    </React.Fragment>
  );
}

const mapStateToProps = (state) => ({
  user: state.auth.user
})

export default connect(mapStateToProps, {
  updateProfileData,
  updateUserPassword,
  deleteAccount,
  loadUser,
  showAlert
})(ProfileUserInfo);
