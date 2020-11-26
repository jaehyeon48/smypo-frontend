import {
  SELECT_PORTFOLIO,
  GET_SELECTED_PORTFOLIO,
  LOAD_PORTFOLIO,
  CREATE_PORTFOLIO,
  EDIT_PORTFOLIO,
  DELETE_PORTFOLIO,
  PORTFOLIO_LOAD_ERROR,
  PORTFOLIO_CREATE_ERROR,
  PORTFOLIO_EDIT_ERROR,
  PORTFOLIO_DELETE_ERROR,
  EMPTY_PORTFOLIO
} from './actionTypes';
import SERVER_URL from './serverURL';

import axios from 'axios';

export const loadPortfolios = (userId) => async (dispatch) => {
  try {
    const portfolioResponse = await axios.get(`${SERVER_URL}/api/portfolio`, { withCredentials: true });

    dispatch({
      type: LOAD_PORTFOLIO,
      payload: portfolioResponse.data
    });
  } catch (error) {
    console.error(error);
    dispatch({ type: PORTFOLIO_LOAD_ERROR });
  }
}

export const selectPortfolio = (portfolioId) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    },
    withCredentials: true
  };
  try {
    const reqBody = JSON.stringify({ portfolioId });
    const selectedPortfolioResult = await axios.post(`${SERVER_URL}/api/portfolio/select`, reqBody, config);
    dispatch({
      type: SELECT_PORTFOLIO,
      payload: selectedPortfolioResult.data
    });
  } catch (error) {
    console.error(error);
    dispatch({ type: EMPTY_PORTFOLIO });
  }
}

export const getSelectedPortfolio = () => async (dispatch) => {
  try {
    const selectResponse = await axios.get(`${SERVER_URL}/api/portfolio/select`, { withCredentials: true });

    const selectedPortfolioId = selectResponse.data.selectedPortfolioId;

    dispatch({
      type: GET_SELECTED_PORTFOLIO,
      payload: selectedPortfolioId
    });
  } catch (error) {
    if (error.response.status === 404) { // if the user's portfolio does not exist
      dispatch({ type: EMPTY_PORTFOLIO });
    }
    else {
      console.error(error);
    }
  }
}

export const createPortfolio = (portfolioName) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    },
    withCredentials: true
  };

  const reqBody = JSON.stringify({ portfolioName });

  try {
    await axios.post(`${SERVER_URL}/api/portfolio`, reqBody, config);

    dispatch({ type: CREATE_PORTFOLIO });
    dispatch(loadPortfolios());
    dispatch(getSelectedPortfolio());
    return false;
  } catch (error) {
    console.error(error);
    dispatch({ type: PORTFOLIO_CREATE_ERROR });
    if (error.response.status === 400) {
      return true; // true for name duplication
    }
    else {
      return false;
    }
  }
}

export const editPortfolio = (portfolioId, newPortfolioName) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    },
    withCredentials: true
  };

  const reqBody = JSON.stringify({ newPortfolioName });
  try {
    await axios.put(`${SERVER_URL}/api/portfolio/${portfolioId}`, reqBody, config);

    dispatch({ type: EDIT_PORTFOLIO });
    dispatch(loadPortfolios());
    dispatch(getSelectedPortfolio());
    return false;
  } catch (error) {
    console.error(error);
    dispatch({ type: PORTFOLIO_EDIT_ERROR });
    if (error.response.status === 400) {
      return true; // true for name duplication
    }
    return false;
  }
}

export const deletePortfolio = (portfolioId) => async (dispatch) => {
  try {
    await axios.delete(`${SERVER_URL}/api/portfolio/${portfolioId}`, { withCredentials: true });

    dispatch({ type: DELETE_PORTFOLIO });
    dispatch(loadPortfolios());
    dispatch(getSelectedPortfolio());
  } catch (error) {
    dispatch({ type: PORTFOLIO_DELETE_ERROR });
    console.error(error.response);
  }
}