import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store';
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

export default function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store} >
      <Router>
        <Switch>
          <Route path="/" component={LandingPage} exact={true} />
          <Navbar>
            <Alert />
            <Route path="/signup" component={SignUp} exact={true} />
            <Route path="/login" component={Login} exact={true} />
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
      </Router>
    </Provider>
  );
}