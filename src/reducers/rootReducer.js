import { combineReducers } from 'redux';

import authReducer from './authReducer';
import portfolioReducer from './portfolioReducer';
import alertReducer from './alertReducer';
import stockReducer from './stockReducer';
import cashReducer from './cashReducer';

export default combineReducers({
  auth: authReducer,
  alert: alertReducer,
  cash: cashReducer,
  portfolio: portfolioReducer,
  stock: stockReducer
});