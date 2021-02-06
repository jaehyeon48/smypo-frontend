import {
  BEGIN_LOAD_USER,
  SUCCESS_LOAD_USER,
  FAIL_LOAD_USER,
  SUCCESS_SIGNUP,
  FAIL_SIGNUP,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  LOGOUT_FAIL,
} from './actionTypes';
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
    await axios.post(`${process.env.REACT_APP_SERVER_URL}/auth/login`, reqBody, config);

    dispatch({ type: LOGIN_SUCCESS });
    dispatch(loadUser());
    return 0;
  } catch (error) {
    dispatch({ type: LOGIN_FAIL });
    console.error(error);
    return -1;
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
  } catch (error) {
    dispatch({
      type: LOGOUT_FAIL,
      payload: error.message
    });
  }
}