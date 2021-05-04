import {
  START_GET_CASH_LIST,
  SUCCESS_GET_CASH_LIST,
  FAIL_GET_CASH_LIST,
  START_GET_TOTAL_CASH,
  SUCCESS_GET_TOTAL_CASH,
  FAIL_GET_TOTAL_CASH,
  ADD_CASH,
  ADD_CASH_ERROR,
  EDIT_CASH,
  EDIT_CASH_ERROR,
  DELETE_CASH,
  DELETE_CASH_ERROR,
  LOGOUT_SUCCESS,
  LOGOUT_FAIL,
  SUCCESS_ADD_STOCK
} from '../actions/actionTypes';

const initialState = {
  cashList: [],
  totalCash: 0,
  cashListStatus: 'initial',
  totalCashStatus: 'initial'
}

export default function cashReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case START_GET_CASH_LIST:
      return {
        ...state,
        cashListStatus: 'loading'
      };
    case SUCCESS_GET_CASH_LIST:
      return {
        ...state,
        cashList: payload,
        cashListStatus: 'succeeded'
      };
    case FAIL_GET_CASH_LIST:
      return {
        ...state,
        cashListStatus: 'failed'
      };
    case START_GET_TOTAL_CASH:
      return {
        ...state,
        totalCashStatus: 'loading'
      };
    case SUCCESS_GET_TOTAL_CASH:
      return {
        ...state,
        totalCash: payload,
        totalCashStatus: 'succeeded'
      };
    case FAIL_GET_TOTAL_CASH:
      return {
        ...state,
        totalCashStatus: 'failed'
      };
    case LOGOUT_SUCCESS:
    case LOGOUT_FAIL:
      return { ...initialState };
    case SUCCESS_ADD_STOCK:
    case ADD_CASH:
    case EDIT_CASH:
    case DELETE_CASH:
      return {
        ...state,
        cashListStatus: 'idle',
        totalCashStatus: 'idle'
      };
    case ADD_CASH_ERROR:
    case EDIT_CASH_ERROR:
    case DELETE_CASH_ERROR:
    default:
      return {
        ...state,
        cashLoading: false
      };
  }
}