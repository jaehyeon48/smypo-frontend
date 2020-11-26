import {
  RESET_STOCK_LOADING,
  RESET_REALIZE_STOCK_LOADING,
  CHECK_MARKET_STATUS,
  CHECK_MARKET_STATUS_ERROR,
  GET_STOCK_LIST,
  GET_EMPTY_STOCK_LIST,
  GET_STOCK_ERROR,
  GET_STOCK_GROUP,
  GET_STOCK_GROUP_ERROR,
  GET_SECTOR,
  GET_SECTOR_ERROR,
  GET_REALIZED_STOCKS,
  GET_REALIZED_STOCKS_ERROR,
  ADD_STOCK,
  EDIT_STOCK,
  DELETE_STOCK,
  EDIT_DAILY_RETURN,
  EDIT_OVERALL_RETURN,
  CLOSE_POSITION,
  CLOSE_POSITION_ERROR,
  LOGOUT,
} from '../actions/actionTypes';

const initialState = {
  stockList: [],
  stockGroup: [],
  realizedStocks: [],
  isMarketOpen: null,
  stockLoading: true,
  stockGroupLoading: true,
  realizedStockLoading: true
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
const compareStockList = (prevStockList, nextStockList) => {
  if (prevStockList.length !== nextStockList.length) return false;

  for (let i = 0; i < prevStockList.length; i++) {
    if (prevStockList[i].ticker !== nextStockList[i].ticker) return false;
    if (prevStockList[i].avgCost !== nextStockList[i].avgCost) return false;
    if (prevStockList[i].quantity !== nextStockList[i].quantity) return false;
    if (prevStockList[i].sector !== nextStockList[i].sector) return false;
  }
  return true;
}

export default function stockReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case CHECK_MARKET_STATUS:
      return {
        ...state,
        isMarketOpen: payload
      };
    case GET_STOCK_LIST:
      if (compareStockList(state.stockList, payload)) {
        return {
          ...state,
          stockLoading: false,
          stockGroupLoading: true
        };
      }
      return {
        ...state,
        stockList: payload,
        stockLoading: false,
        stockGroupLoading: true
      };
    case GET_EMPTY_STOCK_LIST:
      return {
        ...state,
        stockList: payload,
        stockLoading: false,
        stockGroupLoading: true
      };
    case GET_STOCK_ERROR:
      return {
        ...state,
        stockList: [],
        stockLoading: false,
        stockGroupLoading: true
      };
    case GET_STOCK_GROUP:
      return {
        ...state,
        stockGroup: payload,
        stockGroupLoading: false
      };
    case GET_STOCK_GROUP_ERROR:
      return {
        ...state,
        stockGroup: [],
        stockGroupLoading: false
      };
    case GET_REALIZED_STOCKS:
      return {
        ...state,
        realizedStocks: payload,
        realizedStockLoading: false
      };
    case GET_REALIZED_STOCKS_ERROR:
      return {
        ...state,
        realizedStockLoading: false
      };
    case EDIT_DAILY_RETURN:
      const tickerObjDaily = state.stockList.filter(stock => stock.ticker === payload.ticker);
      const otherStocksDaily = state.stockList.filter(stock => stock.ticker !== payload.ticker);
      tickerObjDaily[0].dailyReturn = payload.dailyReturn;
      const newStockListDaily = [...tickerObjDaily, ...otherStocksDaily].sort(sortByTicker);
      return {
        ...state,
        stockList: newStockListDaily
      };
    case EDIT_OVERALL_RETURN:
      const tickerObjOverall = state.stockList.filter(stock => stock.ticker === payload.ticker);
      const otherStocksOverall = state.stockList.filter(stock => stock.ticker !== payload.ticker);
      tickerObjOverall[0].overallReturn = payload.overallReturn;
      const newStockListOverall = [...tickerObjOverall, ...otherStocksOverall].sort(sortByTicker);
      return {
        ...state,
        stockList: newStockListOverall
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
    case RESET_STOCK_LOADING:
      return {
        ...state,
        stockLoading: true
      };
    case RESET_REALIZE_STOCK_LOADING:
      return {
        ...state,
        realizedStockLoading: true
      };
    case LOGOUT:
      return {
        stockList: [],
        isMarketOpen: null,
        stockLoading: true,
        stockGroupLoading: true
      };
    case GET_SECTOR_ERROR:
    case ADD_STOCK:
    case EDIT_STOCK:
    case CLOSE_POSITION:
    case CLOSE_POSITION_ERROR:
    case CHECK_MARKET_STATUS_ERROR:
    case DELETE_STOCK:
    default:
      return state;
  }
}