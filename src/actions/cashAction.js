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
  DELETE_CASH_ERROR
} from './actionTypes';

import axios from 'axios';

import { calculateTotalCashAmount } from '../utils/calculateTotalCash';

// retrieve user's cash list
export const getCash = (portfolioId) => async (dispatch) => {
  const config = { withCredentials: true };

  try {
    dispatch({ type: START_GET_CASH_LIST });
    const cashResponse = await axios.get(`${process.env.REACT_APP_SERVER_URL}/portfolio/cash/${portfolioId}`, config);
    dispatch({
      type: SUCCESS_GET_CASH_LIST,
      payload: cashResponse.data
    });
  } catch (error) {
    console.error(error);
    dispatch({ type: FAIL_GET_CASH_LIST });
  }
}

export const getTotalCash = (portfolioId) => async (dispatch) => {
  const config = { withCredentials: true };

  try {
    dispatch({ type: START_GET_TOTAL_CASH })
    const cashResponse = await axios.get(`${process.env.REACT_APP_SERVER_URL}/portfolio/cash/${portfolioId}`, config);
    if (cashResponse.data.length > 0) {
      const totalCash = calculateTotalCashAmount(cashResponse.data);
      dispatch({
        type: SUCCESS_GET_TOTAL_CASH,
        payload: totalCash
      });
    } else {
      dispatch({
        type: SUCCESS_GET_TOTAL_CASH,
        payload: 0
      });
    }
  } catch (error) {
    console.error(error);
    dispatch({ type: FAIL_GET_TOTAL_CASH });
  }
}

export const addCash = (portfolioId, formData) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    },
    withCredentials: true
  };

  try {
    const reqBody = JSON.stringify({ portfolioId, ...formData });
    await axios.post(`${process.env.REACT_APP_SERVER_URL}/cash`, reqBody, config);
    dispatch({ type: ADD_CASH });
    dispatch(getTotalCash(portfolioId));
    dispatch(getCash(portfolioId));
    return 0;
  } catch (error) {
    console.error(error);
    dispatch({ type: ADD_CASH_ERROR });
    return -1;
  }
}

export const editCash = (formData) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    },
    withCredentials: true
  };
  try {
    const { cashId } = formData;
    const reqBody = JSON.stringify(formData);

    await axios.put(`${process.env.REACT_APP_SERVER_URL}/cash/${cashId}`, reqBody, config);
    dispatch({ type: EDIT_CASH });
    return 0;
  } catch (error) {
    console.error(error);
    dispatch({ type: EDIT_CASH_ERROR });
    return -1;
  }
}

export const deleteCash = (cashId, portfolioId) => async (dispatch) => {
  const config = { withCredentials: true };

  try {
    await axios.delete(`${process.env.REACT_APP_SERVER_URL}/cash/${cashId}`, config);
    dispatch({ type: DELETE_CASH });
    dispatch(getCash(portfolioId));
    dispatch(getTotalCash(portfolioId));
    return 0;
  } catch (error) {
    console.error(error);
    dispatch({ type: DELETE_CASH_ERROR });
    return -1;
  }
}