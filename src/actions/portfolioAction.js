import {
  CHOOSE_DEFAULT_PORTFOLIO,
  START_LOAD_DEFAULT_PORTFOLIO,
  SUCCESS_LOAD_DEFAULT_PORTFOLIO,
  FAIL_LOAD_DEFAULT_PORTFOLIO,
  SUCCESS_GET_DEFAULT_PORTFOLIO_NAME,
  FAIL_GET_DEFAULT_PORTFOLIO_NAME,
  START_LOAD_PORTFOLIO_LIST,
  SUCCESS_LOAD_PORTFOLIO_LIST,
  FAIL_LOAD_PORTFOLIO_LIST,
  CREATE_PORTFOLIO,
  EDIT_PORTFOLIO,
  DELETE_PORTFOLIO,
  PORTFOLIO_CREATE_ERROR,
  PORTFOLIO_EDIT_ERROR,
  PORTFOLIO_DELETE_ERROR,
  EMPTY_PORTFOLIO_LIST,
  DISCONNECT_SSE
} from './actionTypes';
import {sessionOut} from './authAction';
import {
  getStocks,
  getRealizedStocks
} from './stockAction';
import {
  getCash,
  getTotalCash
} from './cashAction';

import axios from 'axios';


export const loadPortfolios = () => async (dispatch) => {
  try {
    dispatch({ type: START_LOAD_PORTFOLIO_LIST });
    const res = await axios.get(`${process.env.REACT_APP_SERVER_URL}/portfolio`, { withCredentials: true });
    if (res.data === -999) {
      dispatch(sessionOut());
      return;
    }

    dispatch({
      type: SUCCESS_LOAD_PORTFOLIO_LIST,
      payload: res.data
    });
  } catch (error) {
    console.error(error);
    dispatch({ type: FAIL_LOAD_PORTFOLIO_LIST });
  }
}

export const chooseDefaultPortfolio = (portfolioId) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    },
    withCredentials: true
  };
  try {
    const reqBody = JSON.stringify({ portfolioId });
    const res = await axios.post(`${process.env.REACT_APP_SERVER_URL}/portfolio/default`, reqBody, config);
    if (res.data === -999) {
      dispatch(sessionOut());
      return;
    }
    dispatch({
      type: CHOOSE_DEFAULT_PORTFOLIO,
      payload: res.data.defaultPortfolioId
    });
    // disconnect previous SSE connection when changing portfolio
    dispatch({ type: DISCONNECT_SSE });
    dispatch(getDefaultPortfolioName());
    dispatch(getStocks(portfolioId));
    dispatch(getRealizedStocks(portfolioId));
    dispatch(getCash(portfolioId));
    dispatch(getTotalCash(portfolioId));
  } catch (error) {
    console.error(error);
    dispatch({ type: EMPTY_PORTFOLIO_LIST });
  }
}

export const getDefaultPortfolio = () => async (dispatch) => {
  try {
    dispatch({ type: START_LOAD_DEFAULT_PORTFOLIO });
    const res = await axios.get(`${process.env.REACT_APP_SERVER_URL}/portfolio/default`, { withCredentials: true });
    if (res.data === -999) {
      dispatch(sessionOut());
      return;
    }

    dispatch({
      type: SUCCESS_LOAD_DEFAULT_PORTFOLIO,
      payload: res.data.defaultPortfolioId
    });
    dispatch(getDefaultPortfolioName());
  } catch (error) {
    if (error.response.status === 404) { // if the user's portfolio does not exist
      dispatch({ type: EMPTY_PORTFOLIO_LIST });
    }
    else {
      console.error(error);
      dispatch({ type: FAIL_LOAD_DEFAULT_PORTFOLIO });
    }
  }
}

export const getDefaultPortfolioName = () => async (dispatch, getState) => {
  const defaultPortfolioId = getState().portfolio.defaultPortfolio;

  try {
    const res = await axios.get(`${process.env.REACT_APP_SERVER_URL}/portfolio/default/name/${defaultPortfolioId}`);
    if (res.data === -999) {
      dispatch(sessionOut());
      return;
    }

    dispatch({
      type: SUCCESS_GET_DEFAULT_PORTFOLIO_NAME,
      payload: res.data.name
    });
  } catch (error) {
    console.error(error);
    dispatch({ type: FAIL_GET_DEFAULT_PORTFOLIO_NAME });
  }
}

export const createPortfolio = (portfolioName, privacy) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    },
    withCredentials: true
  };

  const reqBody = JSON.stringify({ portfolioName, privacy });

  try {
    const res = await axios.post(`${process.env.REACT_APP_SERVER_URL}/portfolio`, reqBody, config);
    if (res.data === -999) {
      dispatch(sessionOut());
      return;
    }

    dispatch({ type: CREATE_PORTFOLIO });
  } catch (error) {
    console.error(error);
    dispatch({ type: PORTFOLIO_CREATE_ERROR });
  }
}

export const editPortfolio = ({
  portfolioId,
  newPortfolioName,
  newPortfolioPrivacy
}) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    },
    withCredentials: true
  };

  const reqBody = JSON.stringify({ newPortfolioName, newPortfolioPrivacy });
  try {
    const res = await axios.put(`${process.env.REACT_APP_SERVER_URL}/portfolio/${portfolioId}`, reqBody, config);
    if (res.data === -999) {
      dispatch(sessionOut());
      return;
    }

    dispatch({ type: EDIT_PORTFOLIO });
  } catch (error) {
    console.error(error);
    dispatch({ type: PORTFOLIO_EDIT_ERROR });
  }
}

export const deletePortfolio = (portfolioId) => async (dispatch) => {
  try {
    // 'res' contains newly chosen portfolioId
    const res = await axios.delete(`${process.env.REACT_APP_SERVER_URL}/portfolio/${portfolioId}`, { withCredentials: true });
    if (res.data === -999) {
      dispatch(sessionOut());
      return;
    }
    dispatch({ type: DELETE_PORTFOLIO });
    return [0, res.data];
  } catch (error) {
    dispatch({ type: PORTFOLIO_DELETE_ERROR });
    console.error(error.response);
    return [-1, null];
  }
}