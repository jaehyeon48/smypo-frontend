import React, { useEffect } from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';

import { store, persistor } from './store';
import CheckAuthOnRouteChange from './CheckAuthOnRouteChange';
import PublicRoute from './components/PublicRoute';
import PrivateRoute from './components/PrivateRoute';
import LandingPage from './components/landingpage/LandingPage';
import Navbar from './components/navbar/Navbar';
import SignUp from './components/auth/SignUp';
import Login from './components/auth/Login';
import Dashboard from './components/dashboard/Dashboard';
import Stock from './components/stock/Stock';
import RealizedStocks from './components/stock/RealizedStocks';
import Cash from './components/cash/Cash';
import Portfolios from './components/portfolio/Portfolios';
import Profile from './components/profile/Profile';
import Alert from './components/alert/Alert';
import Position from './components/position/Position';
import Footer from './components/footer/Footer';
import './app.css';
import './styles/index.scss';

import { loadUser } from './actions/authAction';
import { getRealTimeStockPrice } from './actions/stockAction';

export default function App() {
  const history = createBrowserHistory();
  useEffect(() => {
    if (store.getState().auth.isAuthenticated) {
      store.dispatch(loadUser());
    }
  }, []);

  useEffect(() => {
    const stockState = store.getState().stock;
    if (!stockState.isSSEDisconnected) {
      store.dispatch(getRealTimeStockPrice(Object.keys(stockState.stockList)));
    }
  }, []);

  useEffect(() => {
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <CheckAuthOnRouteChange>
            <Switch>
              <Route path="/" component={LandingPage} exact={true} />
              <Navbar>
                <Alert />
                <PublicRoute path="/signup" component={SignUp} exact={true} />
                <PublicRoute path="/login" component={Login} exact={true} />
                <PrivateRoute path="/dashboard" component={Dashboard} exact={true} />
                <PrivateRoute path="/stocks" component={Stock} exact={true} />
                <PrivateRoute path="/stocks/realized" component={RealizedStocks} exact={true} />
                <PrivateRoute path="/cash" component={Cash} exact={true} />
                <PrivateRoute path="/portfolios" component={Portfolios} exact={true} />
                <PrivateRoute path="/profile" component={Profile} exact={true} />
                <PrivateRoute path="/position/:portfolioId/:ticker" component={Position} exact={true} />
                <Footer />
              </Navbar>
            </Switch>
          </CheckAuthOnRouteChange>
        </Router>
      </PersistGate>
    </Provider>
  );
}