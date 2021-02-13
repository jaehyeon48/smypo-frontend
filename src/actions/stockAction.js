import {
  CHECK_MARKET_STATUS,
  CHECK_MARKET_STATUS_ERROR,
  START_GET_STOCK_LIST,
  SUCCESS_GET_STOCK_LIST,
  FAIL_GET_STOCK_LIST,
  GET_STOCK_GROUP,
  GET_STOCK_GROUP_ERROR,
  GET_REALIZED_STOCKS,
  GET_REALIZED_STOCKS_ERROR,
  ADD_STOCK,
  EDIT_STOCK,
  DELETE_STOCK,
  SUCCESS_CALCULATE_RETURN,
  FAIL_CALCULATE_RETURN,
  GET_SECTOR_ERROR,
  GET_SECTOR,
  CLOSE_POSITION,
  CLOSE_POSITION_ERROR,
  UPDATE_PROGRESS,
  DONE_PROGRESS,
  FAIL_PROGRESS
} from './actionTypes';

import axios from 'axios';
import { sortStocks } from '../utils/sortStocks';

// check if the market is currently open
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

export const getStocks = (portfolioId) => async (dispatch, getState) => {
  const config = { withCredentials: true };
  try {
    dispatch({ type: START_GET_STOCK_LIST });
    dispatch({
      type: UPDATE_PROGRESS,
      payload: 3
    });
    const stocksResult = await axios.get(`${process.env.REACT_APP_SERVER_URL}/portfolio/stocks/${portfolioId}`,
      config);
    const sortedStocks = await sortStocks(stocksResult.data);
    const [calcResCode, calcResult] = await calculateReturnLogic(sortedStocks, getState(), dispatch);
    dispatch({
      type: SUCCESS_GET_STOCK_LIST,
      payload: calcResult
    });
    if (calcResCode === -1) {
      dispatch({ type: FAIL_CALCULATE_RETURN });
    }
  } catch (error) {
    console.error(error);
    dispatch({ type: FAIL_GET_STOCK_LIST });
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

// calculate realtime daily & overall return
export const calculateReturn = (stocks) => async (dispatch, getState) => {
  const [calcResCode, calcResult] = await calculateReturnLogic(stocks, getState());
  if (calcResCode === 0) {
    dispatch({
      type: SUCCESS_CALCULATE_RETURN,
      payload: calcResult
    });
  }
  else {
    dispatch({ type: FAIL_CALCULATE_RETURN });
  }
}

export const editDailyReturn = (ticker, dailyReturn) => (dispatch) => {
  // dispatch({
  //   type: EDIT_DAILY_RETURN,
  //   payload: { ticker, dailyReturn }
  // });
}

export const editOverallReturn = (ticker, overallReturn) => (dispatch) => {
  // dispatch({
  //   type: EDIT_OVERALL_RETURN,
  //   payload: { ticker, overallReturn }
  // });
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

async function calculateReturnLogic(stocks, state, dispatch) {
  if (stocks && stocks.length === 0) return;
  const config = { withCredentials: true };
  let calculatedStocks = { ...stocks };
  let totalStuffsToDo = Object.keys(stocks).length;
  let finishedStuffs = 0;
  try {
    for (const [ticker, stockItem] of Object.entries(stocks)) {
      finishedStuffs += 0.3;
      dispatch({
        type: UPDATE_PROGRESS,
        payload: (3 + parseFloat((finishedStuffs / totalStuffsToDo) * 100)).toFixed(0)
      });
      let stockPriceForDailyReturn = 0;
      let stockPriceForOverallReturn = 0;
      if (state.stock.isMarketOpen) {
        const res = await axios.get(`${process.env.REACT_APP_SERVER_URL}/stock/realTime/${ticker}`, config);
        stockPriceForDailyReturn = res.data.change;
        stockPriceForOverallReturn = res.data.price;
      } else {
        const res = await axios.get(`${process.env.REACT_APP_SERVER_URL}/stock/close/${ticker}`, config);
        stockPriceForDailyReturn = res.data.change;
        stockPriceForOverallReturn = res.data.price;
      }
      const dailyReturnVal = parseFloat((stockPriceForDailyReturn * stockItem.quantity).toFixed(2));
      const overallReturnVal = parseFloat(((stockPriceForOverallReturn - stockItem.avgCost) * stockItem.quantity).toFixed(2));
      calculatedStocks[ticker].dailyReturn = dailyReturnVal;
      calculatedStocks[ticker].overallReturn = overallReturnVal;
      // add 'price' property for later use
      calculatedStocks[ticker].price = stockPriceForOverallReturn;
      finishedStuffs += 0.7;
      if (totalStuffsToDo === finishedStuffs) {
        dispatch({ type: DONE_PROGRESS });
      } else {
        dispatch({
          type: UPDATE_PROGRESS,
          payload: (3 + parseFloat((finishedStuffs / totalStuffsToDo) * 100)).toFixed(0)
        });
      }
    }
    return [0, calculatedStocks];
  } catch (error) {
    dispatch({ type: FAIL_PROGRESS });
    console.error(error);
    return [-1, stocks];
  }
}