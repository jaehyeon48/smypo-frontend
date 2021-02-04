import {
  START_LOAD_USER,
  SUCCESS_LOAD_USER,
  FAIL_LOAD_USER,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  AUTH_FAIL
} from './actionTypes';
import axios from 'axios';

export const loadUser = () => async dispatch => {
  try {
    const loadResponse = await axios.get(`${process.env.REACT_APP_SERVER_URL}/auth`, { withCredentials: true });

    dispatch({ type: START_LOAD_USER });
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

    dispatch({ type: SIGNUP_SUCCESS });
    dispatch(loadUser());
    return 0;
  } catch (error) {
    dispatch({ type: SIGNUP_FAIL });
    console.error(error);
    return -1;
  }
}

export const logout = () => async (dispatch) => {
  try {
    await axios.get(`${process.env.REACT_APP_SERVER_URL}/auth/logout`, { withCredentials: true });
    dispatch({ type: LOGOUT });
  } catch (error) {
    console.error(error);
    dispatch({ type: AUTH_FAIL });
  }
}