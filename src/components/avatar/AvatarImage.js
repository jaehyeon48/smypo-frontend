import React from 'react';
import { connect } from 'react-redux';

import defaultAvatar from '../../images/default_avatar.png';
import './avatarImage.css';

const AVATAR_URL = 'https://tyros.cf/avatars';

const AvatarImage = ({
  user
}) => {
  return (
    <div className="avatar-container">
      <img
        src={user && user.avatar ? `${AVATAR_URL}/${user.avatar}` : defaultAvatar}
        alt="user's avatar"
        className="avatar-image"
      />
    </div>
  )
}

const mapStateToProps = (state) => ({
  user: state.auth.user
});

export default connect(mapStateToProps)(AvatarImage);
