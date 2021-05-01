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
  LOGOUT_SUCCESS,
  LOGOUT_FAIL,
  UPDATE_PROGRESS,
  DONE_PROGRESS,
  FAIL_PROGRESS,
  CHOOSE_DEFAULT_PORTFOLIO,
  GET_REALTIME_PRICE,
  DISCONNECT_SSE
} from '../actions/actionTypes';

const initialState = {
  stockList: {},
  stockGroup: {},
  realizedStocks: [],
  isMarketOpen: false,
  isSSEDisconnected: true,
  stockStatus: 'initial',
  stockGroupStatus: 'initial',
  realizedStockStatus: 'initial',
  calcProgress: 0 // progress of the calculating return process
};

let evtSource = null;
export default function stockReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case CHOOSE_DEFAULT_PORTFOLIO:
      return {
        ...state,
        calcProgress: 0
      };
    case CHECK_MARKET_STATUS:
      return {
        ...state,
        isMarketOpen: payload
      };
    case START_GET_STOCK_LIST:
      return {
        ...state,
        stockStatus: 'loading'
      };
    case SUCCESS_GET_STOCK_LIST:
      return {
        ...state,
        stockList: payload,
        stockStatus: 'succeeded',
      };
    case FAIL_GET_STOCK_LIST:
      return {
        ...state,
        stockList: [],
        stockStatus: 'failed'
      };
    case GET_REALTIME_PRICE:
      const { realtimeTicker, realtimePrice, realtimeChange } = payload;
      // initialize evtSource to close it after logging out
      evtSource = payload.evtSource;
      // if the data is invalid, skip
      if (isNaN(realtimePrice) || isNaN(realtimeChange)) {
        return { ...state };
      }
      const targetTickerData = state.stockList[realtimeTicker];
      return {
        ...state,
        isSSEDisconnected: false,
        stockList: {
          ...state.stockList,
          [realtimeTicker]: {
            ...state.stockList[realtimeTicker],
            change: realtimeChange,
            price: realtimePrice,
            dailyReturn: calcDailyReturnHelper(realtimeChange, targetTickerData?.quantity),
            overallReturn: calcOverallReturnHelper(realtimePrice, targetTickerData?.avgCost, targetTickerData?.quantity)
          }
        }
      };
    case DISCONNECT_SSE:
      if (evtSource !== null) {
        evtSource.close();
        return {
          ...state,
          isSSEDisconnected: true
        }
      } else {
        return { ...state };
      }
    case START_GET_STOCK_GROUP:
      return {
        ...state,
        stockGroupStatus: 'loading'
      };
    case SUCCESS_GET_STOCK_GROUP:
      const { ticker, data } = payload;
      return {
        ...state,
        stockGroupStatus: 'succeeded',
        stockGroup: {
          ...state.stockGroup,
          [ticker]: data
        }
      };
    case FAIL_GET_STOCK_GROUP:
      return {
        ...state,
        stockGroupStatus: 'failed'
      };
    case START_GET_REALIZED_STOCKS:
      return {
        ...state,
        realizedStockStatus: 'loading'
      };
    case SUCCESS_GET_REALIZED_STOCKS:
      return {
        ...state,
        realizedStockStatus: 'succeeded',
        realizedStocks: payload
      };
    case FAIL_GET_REALIZED_STOCKS:
      return {
        ...state,
        realizedStockStatus: 'failed'
      };
    case SUCCESS_CALCULATE_RETURN:
      return {
        ...state,
        stockList: payload
      };
    case FAIL_CALCULATE_RETURN:
      return {
        ...state,
      };
    case UPDATE_PROGRESS:
      return {
        ...state,
        calcProgress: payload
      };
    case DONE_PROGRESS:
    case FAIL_PROGRESS:
      return {
        ...state,
        calcProgress: 0
      };
    case SUCCESS_ADD_STOCK:
    case SUCCESS_EDIT_STOCK:
      return {
        ...state,
        stockStatus: 'idle',
        stockGroupStatus: 'idle',
      };
    case FAIL_ADD_STOCK:
    case FAIL_EDIT_STOCK:
      return {
        ...state
      };
    case LOGOUT_SUCCESS:
    case LOGOUT_FAIL:
      // console.log(evtSource);
      return { ...initialState };
    case DELETE_QUOTE:
    case DELETE_QUOTE_ERROR:
    case CHECK_MARKET_STATUS_ERROR:
    case DELETE_STOCK:
    default:
      return state;
  }
}

// calculating daily return of each ticker helper function
function calcDailyReturnHelper(change, quantity) {
  return parseFloat((change * quantity).toFixed(2));
}

// calculating overall return of each ticker helper function
function calcOverallReturnHelper(price, avgCost, quantity) {
  return parseFloat(((price - avgCost) * quantity).toFixed(2));
}