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
  LOGOUT_SUCCESS,
  LOGOUT_FAIL
} from '../actions/actionTypes'

const initialState = {
  portfolioList: [],
  defaultPortfolio: null,
  defaultPortfolioName: '',
  portfolioListStatus: 'initial', // initial, idle, loading, succeeded, failed
  defaultPortfolioStatus: 'initial' // initial, idle, loading, succeeded, failed
};

export default function portfolioReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case CHOOSE_DEFAULT_PORTFOLIO:
      return {
        ...state,
        defaultPortfolioStatus: 'idle',
        portfolioListStatus: 'idle',
        defaultPortfolio: payload
      };
    case START_LOAD_DEFAULT_PORTFOLIO:
      return {
        ...state,
        defaultPortfolioStatus: 'loading'
      };
    case SUCCESS_LOAD_DEFAULT_PORTFOLIO:
      return {
        ...state,
        defaultPortfolioStatus: 'succeeded',
        defaultPortfolio: payload
      };
    case FAIL_LOAD_DEFAULT_PORTFOLIO:
      return {
        ...state,
        defaultPortfolioStatus: 'failed'
      };
    case SUCCESS_GET_DEFAULT_PORTFOLIO_NAME:
      return {
        ...state,
        defaultPortfolioName: payload
      };
    case FAIL_GET_DEFAULT_PORTFOLIO_NAME:
      return {
        ...state
      };
    case START_LOAD_PORTFOLIO_LIST:
      return {
        ...state,
        portfolioListStatus: 'loading'
      };
    case SUCCESS_LOAD_PORTFOLIO_LIST:
      return {
        ...state,
        portfolioListStatus: 'succeeded',
        portfolioList: payload
      };
    case FAIL_LOAD_PORTFOLIO_LIST:
      return {
        ...state,
        portfolioListStatus: 'failed'
      };
    case EMPTY_PORTFOLIO_LIST:
      return {
        ...state,
        portfolioListStatus: 'succeeded',
        defaultPortfolioStatus: 'succeeded'
      };
    case LOGOUT_SUCCESS:
    case LOGOUT_FAIL:
      return {
        ...initialState
      };
    case PORTFOLIO_CREATE_ERROR:
    case PORTFOLIO_EDIT_ERROR:
    case PORTFOLIO_DELETE_ERROR:
    case CREATE_PORTFOLIO:
    case EDIT_PORTFOLIO:
    case DELETE_PORTFOLIO:
    default:
      return state;
  };
}