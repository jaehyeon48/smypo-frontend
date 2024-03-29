import {
  BEGIN_LOAD_USER,
  SUCCESS_LOAD_USER,
  FAIL_LOAD_USER,
  SUCCESS_SIGNUP,
  FAIL_SIGNUP,
  SUCCESS_LOGIN,
  FAIL_LOGIN,
  LOGOUT_SUCCESS,
  LOGOUT_FAIL,
  DISCONNECT_SSE
} from './actionTypes';
import { showAlert } from './alertAction';
import axios from 'axios';

export const loadUser = () => async dispatch => {
  dispatch({ type: BEGIN_LOAD_USER });
  try {
    const loadResponse = await axios.get(`${process.env.REACT_APP_SERVER_URL}/auth`, { withCredentials: true });
    dispatch({
      type: SUCCESS_LOAD_USER,
      payload: loadResponse.data
    })
  } catch (error) {
    dispatch({
      type: FAIL_LOAD_USER,
      payload: error.response.data.errorMsg
    });
  }
}

export const login = (formData) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    },
    withCredentials: true
  };
  const reqBody = JSON.stringify(formData);

  try {
    const loginRes = await axios.post(`${process.env.REACT_APP_SERVER_URL}/auth/login`, reqBody, config);
    if (loginRes.data[0] === 0) {
      dispatch({ type: SUCCESS_LOGIN });
      dispatch(loadUser());
      return 0;
    } else if (loginRes.data[0] === -1) { // id(username or email) or pw is invalid
      dispatch({ type: FAIL_LOGIN });
      return -1;
    } else { // server error
      dispatch({ type: FAIL_LOGIN });
      return -2;
    }
  } catch (error) {
    dispatch({ type: FAIL_LOGIN });
    return -2;
  }
}

export const signUp = (formData) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    },
    withCredentials: true
  };
  const reqBody = JSON.stringify(formData);

  try {
    await axios.post(`${process.env.REACT_APP_SERVER_URL}/auth/signup`, reqBody, config);

    dispatch({ type: SUCCESS_SIGNUP });
    dispatch(loadUser());
    return 0;
  } catch (error) {
    dispatch({ type: FAIL_SIGNUP });
    return error.response.data.errorMsg;
  }
}

export const logout = () => async (dispatch) => {
  try {
    await axios.get(`${process.env.REACT_APP_SERVER_URL}/auth/logout`, { withCredentials: true });
    dispatch({ type: LOGOUT_SUCCESS });
    dispatch({ type: DISCONNECT_SSE });
  } catch (error) {
    dispatch({
      type: LOGOUT_FAIL,
      payload: error.message
    });
  }
}

export const sessionOut = () => async (dispatch) => {
  await dispatch(logout());
  dispatch(showAlert('Session has timed out. Please login again.', 'error'));
}