import React, { useEffect } from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
import Test from './Test';
import './app.css';
import './styles/index.scss';

import { loadUser } from './actions/authAction';
import { checkMarketStatus } from './actions/stockAction';

export default function App() {
  useEffect(() => {
    if (store.getState().auth.isAuthenticated) {
      store.dispatch(loadUser());
    }
  }, []);

  // fire checking current stock market status
  useEffect(() => {
    const dateObj = new Date();
    const now = new Date(dateObj.getUTCFullYear(), dateObj.getUTCMonth(), dateObj.getUTCDate(), dateObj.getUTCHours(), dateObj.getUTCMinutes(), dateObj.getUTCSeconds(), dateObj.getUTCMilliseconds());
    // +2 seconds for the latency
    let millisTillOpen = new Date(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), 14, 30, 2, 0) - now;
    let millisTillClose = new Date(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), 21, 0, 2, 0) - now;

    if (millisTillOpen < 0) millisTillOpen += 86400000; // if it's after open time, try tomorrow.
    if (millisTillClose < 0) millisTillClose += 86400000; // if it's after close time, try tomorrow.

    setTimeout(() => {
      if (store.getState().auth.isAuthenticated) {
        store.dispatch(checkMarketStatus(true));
      }
    }, millisTillOpen);

    setTimeout(() => {
      if (store.getState().auth.isAuthenticated) {
        store.dispatch(checkMarketStatus(true));
      }
    }, millisTillClose);
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
                <PublicRoute path="/test" component={Test} exact={true} />
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