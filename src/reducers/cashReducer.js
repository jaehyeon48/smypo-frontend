import {
  GET_TOTAL_CASH,
  GET_CASH_LIST,
  GET_CASH_ERROR,
  ADD_CASH,
  ADD_CASH_ERROR,
  EDIT_CASH,
  EDIT_CASH_ERROR,
  DELETE_CASH,
  DELETE_CASH_ERROR,
  LOGOUT_SUCCESS,
  LOGOUT_FAIL
} from '../actions/actionTypes';

const initialState = {
  cashList: [],
  totalCash: 0,
  cashLoading: true
}

export default function cashReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_CASH_LIST:
      return {
        ...state,
        cashList: payload,
        cashLoading: false
      };
    case GET_TOTAL_CASH:
      return {
        ...state,
        totalCash: payload,
        cashLoading: false
      };
    case LOGOUT_SUCCESS:
    case LOGOUT_FAIL:
      return {
        ...initialState
      };
    case ADD_CASH:
    case EDIT_CASH:
    case DELETE_CASH:
      return {
        ...state,
        cashLoading: true
      };
    case ADD_CASH_ERROR:
    case EDIT_CASH_ERROR:
    case GET_CASH_ERROR:
    case DELETE_CASH_ERROR:
    default:
      return {
        ...state,
        cashLoading: false
      };
  }
}