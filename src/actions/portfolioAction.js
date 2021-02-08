import {
  CHOOSE_DEFAULT_PORTFOLIO,
  START_LOAD_DEFAULT_PORTFOLIO,
  SUCCESS_LOAD_DEFAULT_PORTFOLIO,
  FAIL_LOAD_DEFAULT_PORTFOLIO,
  START_LOAD_PORTFOLIO_LIST,
  SUCCESS_LOAD_PORTFOLIO_LIST,
  FAIL_LOAD_PORTFOLIO_LIST,
  CREATE_PORTFOLIO,
  EDIT_PORTFOLIO,
  DELETE_PORTFOLIO,
  PORTFOLIO_CREATE_ERROR,
  PORTFOLIO_EDIT_ERROR,
  PORTFOLIO_DELETE_ERROR,
  EMPTY_PORTFOLIO
} from './actionTypes';
import axios from 'axios';


export const loadPortfolios = () => async (dispatch) => {
  try {
    dispatch({ type: START_LOAD_PORTFOLIO_LIST });
    const portfolioResponse = await axios.get(`${process.env.REACT_APP_SERVER_URL}/portfolio`, { withCredentials: true });

    dispatch({
      type: SUCCESS_LOAD_PORTFOLIO_LIST,
      payload: portfolioResponse.data
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
    const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/portfolio/default`, reqBody, config);
    dispatch({
      type: CHOOSE_DEFAULT_PORTFOLIO,
      payload: response.data.defaultPortfolioId
    });
  } catch (error) {
    console.error(error);
    dispatch({ type: EMPTY_PORTFOLIO });
  }
}

export const getDefaultPortfolio = () => async (dispatch) => {
  try {
    dispatch({type: START_LOAD_DEFAULT_PORTFOLIO});
    const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/portfolio/default`, { withCredentials: true });

    dispatch({
      type: SUCCESS_LOAD_DEFAULT_PORTFOLIO,
      payload: response.data.defaultPortfolioId
    });
  } catch (error) {
    if (error.response.status === 404) { // if the user's portfolio does not exist
      dispatch({ type: EMPTY_PORTFOLIO });
    }
    else {
      console.error(error);
      dispatch({type: FAIL_LOAD_DEFAULT_PORTFOLIO});
    }
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
    await axios.post(`${process.env.REACT_APP_SERVER_URL}/portfolio`, reqBody, config);

    dispatch({ type: CREATE_PORTFOLIO });
    dispatch(loadPortfolios());
    dispatch(getDefaultPortfolio());
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
    await axios.put(`${process.env.REACT_APP_SERVER_URL}/portfolio/${portfolioId}`, reqBody, config);

    dispatch({ type: EDIT_PORTFOLIO });
    dispatch(loadPortfolios());
    dispatch(getDefaultPortfolio());
  } catch (error) {
    console.error(error);
    dispatch({ type: PORTFOLIO_EDIT_ERROR });
  }
}

export const deletePortfolio = (portfolioId) => async (dispatch) => {
  try {
    await axios.delete(`${process.env.REACT_APP_SERVER_URL}/portfolio/${portfolioId}`, { withCredentials: true });

    dispatch({ type: DELETE_PORTFOLIO });
    dispatch(loadPortfolios());
    dispatch(getDefaultPortfolio());
  } catch (error) {
    dispatch({ type: PORTFOLIO_DELETE_ERROR });
    console.error(error.response);
  }
}