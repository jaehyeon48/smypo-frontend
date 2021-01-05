import {
  GET_TOTAL_CASH,
  GET_CASH_LIST,
  GET_CASH_ERROR,
  ADD_CASH,
  ADD_CASH_ERROR,
  EDIT_CASH,
  EDIT_CASH_ERROR,
  DELETE_CASH,
  DELETE_CASH_ERROR
} from './actionTypes';

import axios from 'axios';
import SERVER_URL from './serverURL';

import { calculateTotalCashAmount } from '../utils/calculateTotalCash';

export const getCash = (portfolioId) => async (dispatch) => {
  const config = { withCredentials: true };

  try {
    const cashResponse = await axios.get(`${SERVER_URL}/portfolio/cash/${portfolioId}`, config);
    dispatch({
      type: GET_CASH_LIST,
      payload: cashResponse.data
    });
  } catch (error) {
    console.error(error);
    dispatch({ type: GET_CASH_ERROR });
  }
}

export const getTotalCash = (portfolioId) => async (dispatch) => {
  const config = { withCredentials: true };

  try {
    const cashResponse = await axios.get(`${SERVER_URL}/portfolio/cash/${portfolioId}`, config);
    if (cashResponse.data.length > 0) {
      const totalCash = calculateTotalCashAmount(cashResponse.data);
      dispatch({
        type: GET_TOTAL_CASH,
        payload: totalCash
      });
    }
  } catch (error) {
    console.error(error);
    dispatch({ type: GET_CASH_ERROR });
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
    await axios.post(`${SERVER_URL}/cash`, reqBody, config);
    dispatch({ type: ADD_CASH });
    dispatch(getTotalCash(portfolioId));
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

    await axios.put(`${SERVER_URL}/cash/${cashId}`, reqBody, config);
    dispatch({ type: EDIT_CASH });
    return 0;
  } catch (error) {
    console.error(error);
    dispatch({ type: EDIT_CASH_ERROR });
    return -1;
  }
}

export const deleteCash = (cashId) => async (dispatch) => {
  const config = { withCredentials: true };

  try {
    await axios.delete(`${SERVER_URL}/cash/${cashId}`, config);
    dispatch({ type: DELETE_CASH });
    return 0;
  } catch (error) {
    console.error(error);
    dispatch({ type: DELETE_CASH_ERROR });
    return -1;
  }
}