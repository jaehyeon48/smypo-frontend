import axios from 'axios';

import {
  UPLOAD_AVATAR,
  FAIL_UPLOAD_AVATAR,
  UPDATE_USER,
  FAIL_UPDATE_USER,
  UPDATE_PASSWORD,
  FAIL_UPDATE_PASSWORD,
  DELETE_AVATAR,
  FAIL_DELETE_AVATAR,
  DELETE_ACCOUNT,
  FAIL_DELETE_ACCOUNT
} from './actionTypes';
import { sessionOut, logout } from './authAction';
import { checkUsernameAvailability } from '../utils/checkingAvailability';

import { loadUser } from './authAction';

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

    const res = await axios.post(`${process.env.REACT_APP_SERVER_URL}/user/avatar`, avatarFile, config);
    if (res.data === -999) {
      dispatch(sessionOut());
      return;
    }
    /* wait for 1s to retrieve image */
    await new Promise(resolve => setTimeout(resolve, 1000));
    dispatch({
      type: UPLOAD_AVATAR,
      payload: res.data.avatar
    });
    return 0;
  } catch (error) {
    console.error(error);
    dispatch({ type: FAIL_UPLOAD_AVATAR });
  }
  return -1;
}

export const updateProfileData = (formData, shouldCheckUsername) => async (dispatch) => {
  if (shouldCheckUsername) {
    const usernameCheck = await checkUsernameAvailability(formData.username);
    if (usernameCheck === -1) {
      return -2;
    }
  }

  const config = {
    headers: {
      'Content-Type': 'application/json'
    },
    withCredentials: true
  };
  try {
    const reqBody = JSON.stringify(formData);
    const res = await axios.put(`${process.env.REACT_APP_SERVER_URL}/user/profile`, reqBody, config);
    if (res.data === -999) {
      dispatch(sessionOut());
      return;
    }
    dispatch(loadUser());
    dispatch({ type: UPDATE_USER });
    return 0;
  } catch (error) {
    console.error(error);
    dispatch({ type: FAIL_UPDATE_USER });
    return -1;
  }
}

export const updateUserPassword = (formData) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    },
    withCredentials: true
  };
  try {
    const reqBody = JSON.stringify(formData);
    const res = await axios.put(`${process.env.REACT_APP_SERVER_URL}/user/password`, reqBody, config);
    if (res.data === -999) {
      dispatch(sessionOut());
      return;
    }
    if (res.data === -2) { // current password does not match
      return -2;
    }
    dispatch({ type: UPDATE_PASSWORD });
    return 0;
  } catch (error) {
    dispatch({ type: FAIL_UPDATE_PASSWORD });
    return -1;
  }
}

export const deleteAvatar = () => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    },
    withCredentials: true
  };

  try {
    const res = await axios.delete(`${process.env.REACT_APP_SERVER_URL}/user/avatar`, config);
    if (res.data === -999) {
      dispatch(sessionOut());
      return;
    }
    dispatch({ type: DELETE_AVATAR });
  } catch (error) {
    dispatch({ type: FAIL_DELETE_AVATAR });
  }
}

export const deleteAccount = () => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    },
    withCredentials: true
  };

  try {
    const res = await axios.delete(`${process.env.REACT_APP_SERVER_URL}/user`, config);
    if (res.data === -999) {
      dispatch(sessionOut());
      return;
    }
    if (res.data === 0) {
      dispatch({ type: DELETE_ACCOUNT });
      dispatch(logout());
      return 0;
    }
    dispatch({ type: FAIL_DELETE_ACCOUNT });
    return -1;
  } catch (error) {
    dispatch({ type: FAIL_DELETE_ACCOUNT });
    return -1;
  }
}