import {
  CHECK_MARKET_STATUS,
  CHECK_MARKET_STATUS_ERROR,
  START_GET_STOCK_LIST,
  SUCCESS_GET_STOCK_LIST,
  FAIL_GET_STOCK_LIST,
  START_GET_STOCK_GROUP,
  SUCCESS_GET_STOCK_GROUP,
  FAIL_GET_STOCK_GROUP,
  GET_SECTOR,
  GET_SECTOR_ERROR,
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
  CLOSE_POSITION,
  CLOSE_POSITION_ERROR,
  LOGOUT_SUCCESS,
  LOGOUT_FAIL,
  UPDATE_PROGRESS,
  DONE_PROGRESS,
  FAIL_PROGRESS,
  CHOOSE_DEFAULT_PORTFOLIO
} from '../actions/actionTypes';

const initialState = {
  stockList: {},
  stockGroup: {},
  realizedStocks: [],
  isMarketOpen: false,
  stockStatus: 'initial',
  stockGroupStatus: 'initial',
  realizedStockStatus: 'initial',
  calcProgress: 0 // progress of the calculating return process
};

const sortByTicker = (a, b) => {
  if (a.ticker > b.ticker) {
    return 1;
  }
  if (a.ticker < b.ticker) {
    return -1;
  }
  return 0;
}

/* compare each property but daily & overall returns in previous stock list 
 * and current stock list (which is passed by payload) and returns false if 
 * two stock lists are different.
*/
// const compareStockList = (prevStockList, nextStockList) => {
//   if (Object.keys(prevStockList).length !== Object.keys(nextStockList).length) return false;

//   for (const [ticker, stockItem] of Object.entries(prevStockList)) {
//     if prevStockList[ticker]
//   }
//   for (let i = 0; i < prevStockList.length; i++) {
//     if (prevStockList[i].ticker !== nextStockList[i].ticker) return false;
//     if (prevStockList[i].avgCost !== nextStockList[i].avgCost) return false;
//     if (prevStockList[i].quantity !== nextStockList[i].quantity) return false;
//     if (prevStockList[i].sector !== nextStockList[i].sector) return false;
//   }
//   return true;
// }

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
    case GET_SECTOR:
      const targetStockObj = state.stockList.filter(stock => stock.ticker === payload.ticker);
      const otherStockObjs = state.stockList.filter(stock => stock.ticker !== payload.ticker);
      targetStockObj[0].sector = payload.sector;
      const newStockList = [...targetStockObj, ...otherStockObjs].sort(sortByTicker);
      return {
        ...state,
        stockList: newStockList
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
      return {
        ...initialState
      };
    case GET_SECTOR_ERROR:
    case CLOSE_POSITION:
    case CLOSE_POSITION_ERROR:
    case CHECK_MARKET_STATUS_ERROR:
    case DELETE_STOCK:
    default:
      return state;
  }
}