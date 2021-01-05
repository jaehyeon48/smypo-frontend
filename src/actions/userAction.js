import axios from 'axios';

import {
  UPLOAD_AVATAR,
  AVATAR_ERROR,
  UPDATE_USER,
  FAIL_UPDATE_USER
} from './actionTypes';

import { loadUser } from './authAction';
import SERVER_URL from './serverURL';

export const uploadAvatar = (avatarImage) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'multipart/form-data'
    },
    withCredentials: true
  };
  try {
    const avatarFile = new FormData();
    avatarFile.append('avatar', avatarImage);

    const uploadResponse = await axios.post(`${SERVER_URL}/user/avatar`, avatarFile, config);
    /* wait for 1s to retrieve image */
    await new Promise(resolve => setTimeout(resolve, 1000));
    dispatch({
      type: UPLOAD_AVATAR,
      payload: uploadResponse.data.avatar
    });
    return 0;
  } catch (error) {
    console.error(error);
    dispatch({ type: AVATAR_ERROR });
  }
  return -1;
}

export const updateProfile = (formData) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    },
    withCredentials: true
  };
  try {
    const reqBody = JSON.stringify(formData);
    await axios.put(`${SERVER_URL}/user`, reqBody, config);
    dispatch(loadUser());
    dispatch({ type: UPDATE_USER });
    return 0;
  } catch (error) {
    console.error(error);
    dispatch({ type: FAIL_UPDATE_USER });
    return -1;
  }
}