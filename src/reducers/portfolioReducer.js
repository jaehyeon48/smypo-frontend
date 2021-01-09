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
  EMPTY_PORTFOLIO,
  LOGOUT
} from '../actions/actionTypes'

const initialState = {
  portfolioList: [],
  defaultPortfolio: null
};

export default function portfolioReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case CHOOSE_DEFAULT_PORTFOLIO:
      return {
        ...state,
        defaultPortfolio: payload
      };
    case GET_DEFAULT_PORTFOLIO:
      return {
        ...state,
        defaultPortfolio: payload
      };
    case LOAD_PORTFOLIO:
      return {
        ...state,
        portfolioList: payload
      };
    case PORTFOLIO_LOAD_ERROR:
    case EMPTY_PORTFOLIO:
    case LOGOUT:
      return {
        ...state,
        portfolioList: [],
        defaultPortfolio: null
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