import {
  SHOW_ALERT,
  HIDE_ALERT,
  LOGOUT_SUCCESS,
} from '../actions/actionTypes';

const initialState = {
  isAlertOn: false,
  alertMessage: '',
  alertType: ''
};

export default function alertReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SHOW_ALERT:
      const { alertMessage, alertType } = payload
      return {
        ...state,
        isAlertOn: true,
        alertMessage,
        alertType
      };
    case HIDE_ALERT:
    case LOGOUT_SUCCESS:
      return {
        ...initialState
      };
    default:
      return state;
  }
}