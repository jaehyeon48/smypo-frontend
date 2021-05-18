import React, { useState } from 'react';
import { connect } from 'react-redux';

import { deleteAvatar } from '../../actions/userAction';
import { showAlert } from '../../actions/alertAction';
import AvatarImage from '../avatar/AvatarImage';
import Modal from '../modal/Modal';
import ConfirmModal from '../modal/ConfirmModal';
import EditIcon from '../icons/EditIcon';
import DeleteIcon from '../icons/DeleteIcon';
import UploadAvatar from '../avatar/UploadAvatar';
import ProfileUserInfo from './ProfileUserInfo';

const Profile = ({
  deleteAvatar,
  showAlert
}) => {
  const [isAvatarEditModalOpen, setIsEditAvatarEditModalOpen] = useState(false);
  const [isDeleteAvatarModalOpen, setIsDeleteAvatarModalOpen] = useState(false);
  // indicates which part of the profile page is currently opened
  const [currentOpenPage, setCurrentOpenPage] = useState('userInfo');

  const openAvatarEditModal = () => {
    document.body.style.overflow = 'hidden';
    setIsEditAvatarEditModalOpen(true);
  }

  const closeAvatarEditModal = () => {
    document.body.style.overflow = 'visible';
    setIsEditAvatarEditModalOpen(false);
  }

  const openDeleteAvatarModal = () => {
    document.body.style.overflow = 'hidden';
    setIsDeleteAvatarModalOpen(true);
  }

  const closeDeleteAvatarModal = () => {
    setIsDeleteAvatarModalOpen(false);
  }

  const handleDeleteAvatar = async () => {
    try {
      await deleteAvatar();
      showAlert('Successfully deleted your avatar.', 'success');
      closeDeleteAvatarModal();
    } catch (error) {
      showAlert('Something went wrong. Please try again.', 'error');
    }
  }

  const setCurrentPageToUserInfo = () => {
    setCurrentOpenPage('userInfo');
  }

  return (
    <React.Fragment>
      <main className="profile-main">
        <div className="profile-avatar-container">
          <AvatarImage />
          <div className="profile-avatar-container__actions">
            <button
              type="button"
              className="btn-profile-avatar-edit"
              onClick={openAvatarEditModal}
              title="Edit Avatar"
            >
              <EditIcon />
            </button>
            <button
              type="button"
              className="btn-profile-avatar-delete"
              title="Delete Avatar"
              onClick={openDeleteAvatarModal}
            >
              <DeleteIcon />
            </button>
          </div>
        </div>
        <div className="profile-nav">
          <button
            type="button"
            className={`${currentOpenPage === 'userInfo' && 'profile-nav--selected'} btn-profile-nav`}
            onClick={setCurrentPageToUserInfo}
          >User Profile
          </button>
        </div>
        {currentOpenPage === 'userInfo' && <ProfileUserInfo />}
      </main>
      {isAvatarEditModalOpen && (
        <Modal closeModalFunc={closeAvatarEditModal}>
          <header className="edit-avatar-header">Edit Your Avatar</header>
          <UploadAvatar closeModalFunc={closeAvatarEditModal} />
        </Modal>
      )}
      {isDeleteAvatarModalOpen && (
        <ConfirmModal
          confirmMsg="Do you really want to delete the avatar?"
          confirmAction={handleDeleteAvatar}
          closeModalFunc={closeDeleteAvatarModal}
        />
      )}
    </React.Fragment>
  )
}

export default connect(null, {
  deleteAvatar,
  showAlert
})(Profile);