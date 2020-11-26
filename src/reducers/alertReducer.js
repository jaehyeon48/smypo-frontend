import {
  SHOW_ALERT,
  HIDE_ALERT
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
      }
    case HIDE_ALERT:
      return {
        ...state,
        isAlertOn: false,
        alertMessage: '',
        alertType: ''
      }
    default:
      return state;
  }
}