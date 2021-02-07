import {
  CHOOSE_DEFAULT_PORTFOLIO,
  GET_DEFAULT_PORTFOLIO,
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
import axios from 'axios';


export const loadPortfolios = () => async (dispatch) => {
  try {
    const portfolioResponse = await axios.get(`${process.env.REACT_APP_SERVER_URL}/portfolio`, { withCredentials: true });

    dispatch({
      type: LOAD_PORTFOLIO,
      payload: portfolioResponse.data
    });
  } catch (error) {
    console.error(error);
    dispatch({ type: PORTFOLIO_LOAD_ERROR });
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
    const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/portfolio/default`, { withCredentials: true });

    dispatch({
      type: GET_DEFAULT_PORTFOLIO,
      payload: response.data.defaultPortfolioId
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