import {
  SHOW_ALERT,
  HIDE_ALERT
} from './actionTypes';

export const showAlert = (alertMessage, alertType) => (dispatch) => {
  dispatch({
    type: SHOW_ALERT,
    payload: { alertMessage, alertType }
  });
  setTimeout(() => {
    dispatch(hideAlert());
  }, 3000);
}

export const hideAlert = () => (dispatch) => {
  dispatch({ type: HIDE_ALERT });
}