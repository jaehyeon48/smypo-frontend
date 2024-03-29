import {
  CHECK_MARKET_STATUS,
  CHECK_MARKET_STATUS_ERROR,
  START_GET_STOCK_LIST,
  SUCCESS_GET_STOCK_LIST,
  FAIL_GET_STOCK_LIST,
  START_GET_STOCK_GROUP,
  SUCCESS_GET_STOCK_GROUP,
  FAIL_GET_STOCK_GROUP,
  START_GET_REALIZED_STOCKS,
  SUCCESS_GET_REALIZED_STOCKS,
  FAIL_GET_REALIZED_STOCKS,
  SUCCESS_ADD_STOCK,
  FAIL_ADD_STOCK,
  SUCCESS_EDIT_STOCK,
  FAIL_EDIT_STOCK,
  DELETE_STOCK,
  SUCCESS_CALCULATE_RETURN,
  FAIL_CALCULATE_RETURN,
  DELETE_QUOTE,
  DELETE_QUOTE_ERROR,
  UPDATE_PROGRESS,
  DONE_PROGRESS,
  FAIL_PROGRESS,
  GET_REALTIME_PRICE,
  DISCONNECT_SSE
} from './actionTypes';

import axios from 'axios';
import { sessionOut } from './authAction';
import { sortStocks } from '../utils/sortStocks';

// check if the market is currently open
export const checkMarketStatus = (autoCheck = false) => async (dispatch, getState) => {
  const config = { withCredentials: true };

  try {
    const res = await axios.get(`${process.env.REACT_APP_SERVER_URL}/stock/marketStatus`, config);
    if (res.data === -999) {
      dispatch(sessionOut());
      return;
    }

    dispatch({
      type: CHECK_MARKET_STATUS,
      payload: res.data
    });

    // if market is opened && SSE is currently disconnected
    if (autoCheck && res.data &&
      getState().stock.isSSEDisconnected &&
      getState().stock.stockStatus === 'succeeded') {
      dispatch(getRealTimeStockPrice(Object.keys(getState().stock.stockList)));
    }

    // if the market is closed && SSE is currently connected
    if (autoCheck && !res.data && !getState().stock.isSSEDisconnected) {
      dispatch({ type: DISCONNECT_SSE });
    }
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
      payload: 0
    });
    const res = await axios.get(`${process.env.REACT_APP_SERVER_URL}/portfolio/stocks/${portfolioId}`, config);
    if (res.data === -999) {
      dispatch(sessionOut());
      return;
    }

    const sortedStocks = await sortStocks(res.data);

    const [calcResCode, calcResult] = await calculateReturnLogic(sortedStocks, getState(), dispatch);
    dispatch({
      type: SUCCESS_GET_STOCK_LIST,
      payload: calcResult
    });

    // if the market is currently open, connect SSE
    if (getState().stock.isMarketOpen) {
      dispatch(getRealTimeStockPrice(Object.keys(calcResult)));
    }
    if (calcResCode === -1) {
      dispatch({ type: FAIL_CALCULATE_RETURN });
    }
  } catch (error) {
    console.error(error);
    dispatch({ type: FAIL_GET_STOCK_LIST });
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
    const res = await axios.post(`${process.env.REACT_APP_SERVER_URL}/stock`, reqBody, config);
    if (res.data === -999) {
      dispatch(sessionOut());
      return;
    }

    dispatch({ type: SUCCESS_ADD_STOCK });
    if (formData.transactionType === 'sell') {
      dispatch(getRealizedStocks(portfolioId));
    }
    return 0;
  } catch (error) {
    dispatch({ type: FAIL_ADD_STOCK });
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
  const { stockId, price, quantity, stockMemo, transactionDate, transactionType } = formData;
  try {
    const reqBody = JSON.stringify({ price, quantity, stockMemo, transactionDate, transactionType, currentAvgCost });
    const res = await axios.put(`${process.env.REACT_APP_SERVER_URL}/stock/${stockId}`, reqBody, config);
    if (res.data === -999) {
      dispatch(sessionOut());
      return;
    }

    dispatch({ type: SUCCESS_EDIT_STOCK });
    return 0;
  } catch (error) {
    dispatch({ type: FAIL_EDIT_STOCK });
    console.error(error);
    return -1;
  }
}

export const deleteStock = (stockId) => async (dispatch) => {
  const config = { withCredentials: true };
  try {
    const res = await axios.delete(`${process.env.REACT_APP_SERVER_URL}/stock/${stockId}`, config);
    if (res.data === -999) {
      dispatch(sessionOut());
      return;
    }

    dispatch({ type: DELETE_STOCK });
    return 0;
  } catch (error) {
    console.error(error);
    return -1;
  }
}

// calculate realtime daily & overall return
export const calculateReturn = (stocks) => async (dispatch, getState) => {
  const [calcResCode, calcResult] = await calculateReturnLogic(stocks, getState(), dispatch);
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

export const getStocksByTickerGroup = (portfolioId, ticker) => async (dispatch) => {
  const config = { withCredentials: true };
  try {
    dispatch({ type: START_GET_STOCK_GROUP });
    const res = await axios.get(`${process.env.REACT_APP_SERVER_URL}/portfolio/group/${portfolioId}/${ticker}`, config);
    if (res.data === -999) {
      dispatch(sessionOut());
      return;
    }
    dispatch({
      type: SUCCESS_GET_STOCK_GROUP,
      payload: { ticker, data: res.data }
    });
  } catch (error) {
    console.error(error);
    dispatch({ type: FAIL_GET_STOCK_GROUP });
  }
}

export const getRealizedStocks = (portfolioId) => async (dispatch) => {
  const config = { withCredentials: true };
  try {
    dispatch({ type: START_GET_REALIZED_STOCKS });
    const res = await axios.get(`${process.env.REACT_APP_SERVER_URL}/portfolio/realized/${portfolioId}`, config);
    if (res.data === -999) {
      dispatch(sessionOut());
      return;
    }

    dispatch({
      type: SUCCESS_GET_REALIZED_STOCKS,
      payload: res.data
    });
  } catch (error) {
    console.error(error);
    dispatch({ type: FAIL_GET_REALIZED_STOCKS });
  }
}

export const getRealTimeStockPrice = (tickers) => async (dispatch, getState) => {
  tickers = tickers.join(',');
  if (tickers === '') return; // if the stockList is empty

  const evtSource = new EventSource(`https://cloud-sse.iexapis.com/stable/stocksUSNoUTP5Second?token=${process.env.REACT_APP_IEX_API_KEY}&symbols=${tickers}`);

  evtSource.onmessage = function (event) {
    const realtimeData = JSON.parse(event.data)[0];
    const realtimeTicker = realtimeData?.symbol.toLowerCase();
    const realtimeChange = parseFloat(realtimeData?.change.toFixed(2));
    const realtimePrice = parseFloat(realtimeData?.iexRealtimePrice.toFixed(2));

    dispatch({
      type: GET_REALTIME_PRICE,
      payload: { realtimeTicker, realtimePrice, realtimeChange, evtSource }
    });
  }

  evtSource.onerror = function (err) {
    console.log(err);
  }
}

export const deleteQuote = (portfolioId, ticker) => async (dispatch) => {
  const config = { withCredentials: true };
  try {
    const res = await axios.delete(`${process.env.REACT_APP_SERVER_URL}/stock/${portfolioId}/${ticker}`, config);
    if (res.data === -999) {
      dispatch(sessionOut());
      return;
    }
    dispatch({ type: DELETE_QUOTE });
    return 0;
  } catch (error) {
    console.error(error);
    dispatch({ type: DELETE_QUOTE_ERROR });
    return -1;
  }
}

async function calculateReturnLogic(stocks, state, dispatch) {
  if (stocks && stocks.length === 0) return [0, 0];
  let calculatedStocks = { ...stocks };
  let totalStuffsToDo = Object.keys(stocks).length;
  let finishedStuffs = 0;
  try {
    for (const [ticker, stockItem] of Object.entries(stocks)) {
      let stockPriceForDailyReturn = 0;
      let stockPriceForOverallReturn = 0;
      let priceData;

      // get realtime price data or closed price data 
      if (state.stock.isMarketOpen) {
        const priceRes = await axios.get(`https://cloud.iexapis.com/stable/stock/${ticker}/quote?token=${process.env.REACT_APP_IEX_API_KEY}`);
        priceData = {
          change: priceRes.data.change,
          price: priceRes.data.iexRealtimePrice
        }
      } else {
        const priceRes = await axios.get(`https://cloud.iexapis.com/stable/stock/${ticker}/quote?token=${process.env.REACT_APP_IEX_API_KEY}`);
        priceData = {
          change: priceRes.data.change,
          price: priceRes.data.latestPrice
        }
      }
      stockPriceForDailyReturn = priceData.change;
      stockPriceForOverallReturn = priceData.price;

      // calculate daily return and overall return
      const dailyReturnVal = parseFloat((stockPriceForDailyReturn * stockItem.quantity).toFixed(2));
      const overallReturnVal = parseFloat(((stockPriceForOverallReturn - stockItem.avgCost) * stockItem.quantity).toFixed(2));
      calculatedStocks[ticker].dailyReturn = dailyReturnVal;
      calculatedStocks[ticker].overallReturn = overallReturnVal;
      // add 'price' property for later use
      calculatedStocks[ticker].change = stockPriceForDailyReturn;
      calculatedStocks[ticker].price = stockPriceForOverallReturn;

      // done current task
      finishedStuffs += 1;
      if (totalStuffsToDo === finishedStuffs) {
        dispatch({ type: DONE_PROGRESS });
      } else {
        dispatch({
          type: UPDATE_PROGRESS,
          payload: (parseFloat((finishedStuffs / totalStuffsToDo) * 100)).toFixed(0)
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