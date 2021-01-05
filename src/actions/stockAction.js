import {
  RESET_STOCK_LOADING,
  RESET_REALIZE_STOCK_LOADING,
  CHECK_MARKET_STATUS,
  CHECK_MARKET_STATUS_ERROR,
  GET_STOCK_LIST,
  GET_EMPTY_STOCK_LIST,
  GET_STOCK_ERROR,
  GET_STOCK_GROUP,
  GET_STOCK_GROUP_ERROR,
  GET_REALIZED_STOCKS,
  GET_REALIZED_STOCKS_ERROR,
  ADD_STOCK,
  EDIT_STOCK,
  DELETE_STOCK,
  EDIT_DAILY_RETURN,
  EDIT_OVERALL_RETURN,
  GET_SECTOR_ERROR,
  GET_SECTOR,
  CLOSE_POSITION,
  CLOSE_POSITION_ERROR
} from './actionTypes';

import axios from 'axios';
import { sortStocks } from '../utils/sortStocks';

export const checkMarketStatus = () => async (dispatch) => {
  const config = { withCredentials: true };
  try {
    const marketStatusResponse = await axios.get(`${process.env.REACT_APP_SERVER_URL}/stock/marketStatus`, config);
    dispatch({
      type: CHECK_MARKET_STATUS,
      payload: marketStatusResponse.data
    });
  } catch (error) {
    console.error(error);
    dispatch({ type: CHECK_MARKET_STATUS_ERROR });
  }
}

export const getStocks = (portfolioId) => async (dispatch) => {
  const config = { withCredentials: true };
  try {
    const stocksResult = await axios.get(`${process.env.REACT_APP_SERVER_URL}/portfolio/stocks/${portfolioId}`, config);
    if (stocksResult.data !== null) {
      const sortedStocks = await sortStocks(stocksResult.data);
      dispatch({
        type: GET_STOCK_LIST,
        payload: sortedStocks
      });
    }
    else {
      dispatch({
        type: GET_EMPTY_STOCK_LIST,
        payload: []
      });
    }
  } catch (error) {
    console.error(error);
    dispatch({ type: GET_STOCK_ERROR });
  }
}

export const getSectorInfo = (ticker) => async (dispatch) => {
  const config = { withCredentials: true };

  try {
    const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/stock/sector/${ticker}`, config);

    dispatch({
      type: GET_SECTOR,
      payload: { ticker, sector: response.data }
    });
  } catch (error) {
    console.error(error);
    dispatch({ type: GET_SECTOR_ERROR });
  }
}

export const addStock = (portfolioId, formData, currentAvgCost) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    },
    withCredentials: true
  };

  try {
    const reqBody = JSON.stringify({ portfolioId, ...formData, currentAvgCost });

    await axios.post(`${process.env.REACT_APP_SERVER_URL}/stock`, reqBody, config);
    dispatch({ type: ADD_STOCK });
    return 0;
  } catch (error) {
    console.error(error);
    return -1;
  }
}

export const editStock = (formData, currentAvgCost) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    },
    withCredentials: true
  };
  const { stockId, price, quantity, transactionDate, transactionType } = formData;
  try {
    const reqBody = JSON.stringify({ price, quantity, transactionDate, transactionType, currentAvgCost });
    await axios.put(`${process.env.REACT_APP_SERVER_URL}/stock/${stockId}`, reqBody, config);
    dispatch({ type: EDIT_STOCK });
    return 0;
  } catch (error) {
    console.error(error);
    return -1;
  }
}

export const deleteStock = (stockId) => async (dispatch) => {
  const config = { withCredentials: true };
  try {
    await axios.delete(`${process.env.REACT_APP_SERVER_URL}/stock/${stockId}`, config);
    dispatch({ type: DELETE_STOCK });
    return 0;
  } catch (error) {
    console.error(error);
    return -1;
  }
}

export const editDailyReturn = (ticker, dailyReturn) => (dispatch) => {
  dispatch({
    type: EDIT_DAILY_RETURN,
    payload: { ticker, dailyReturn }
  });
}

export const editOverallReturn = (ticker, overallReturn) => (dispatch) => {
  dispatch({
    type: EDIT_OVERALL_RETURN,
    payload: { ticker, overallReturn }
  });
}

export const getStocksByTickerGroup = (portfolioId, ticker) => async (dispatch) => {
  const config = { withCredentials: true };
  try {
    const tickerGroupResult = await axios.get(`${process.env.REACT_APP_SERVER_URL}/portfolio/group/${portfolioId}/${ticker}`, config);

    dispatch({
      type: GET_STOCK_GROUP,
      payload: tickerGroupResult.data
    });
  } catch (error) {
    console.error(error);
    dispatch({ type: GET_STOCK_GROUP_ERROR });
  }
}

export const getRealizedStocks = (portfolioId) => async (dispatch) => {
  const config = { withCredentials: true };
  try {
    const realizedStocksResult = await axios.get(`${process.env.REACT_APP_SERVER_URL}/portfolio/realized/${portfolioId}`, config);

    dispatch({
      type: GET_REALIZED_STOCKS,
      payload: realizedStocksResult.data
    });
  } catch (error) {
    console.error(error);
    dispatch({ type: GET_REALIZED_STOCKS_ERROR });
  }
}

export const resetStockLoading = () => (dispatch) => {
  dispatch({ type: RESET_STOCK_LOADING });
}

export const resetRealizeStockLoading = () => (dispatch) => {
  dispatch({ type: RESET_REALIZE_STOCK_LOADING });
}

export const closePosition = (portfolioId, ticker) => async (dispatch) => {
  const config = { withCredentials: true };
  try {
    await axios.delete(`${process.env.REACT_APP_SERVER_URL}/stock/${portfolioId}/${ticker}`, config);
    dispatch({ type: CLOSE_POSITION });
    return 0;
  } catch (error) {
    console.error(error);
    dispatch({ type: CLOSE_POSITION_ERROR });
    return -1;
  }
}