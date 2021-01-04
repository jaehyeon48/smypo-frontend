import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store';
import LandingPage from './components/landingpage/LandingPage';
import Navbar from './components/navbar/Navbar';
import SignUp from './components/auth/SignUp';
import Login from './components/auth/Login';
import MainPage from './components/mainpage/MainPage';
import Stock from './components/stock/Stocks';
import RealizedStocks from './components/stock/RealizedStocks';
import Cash from './components/cash/Cash';
import Portfolios from './components/portfolio/Portfolios';
import Profile from './components/portfolio/Profile';
import Alert from './components/alert/Alert';
import PositionDetail from './components/position/PositionDetail';
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
            {/* <Route path="/dashboard" component={MainPage} exact={true} /> */}
            {/* <Route path="/stocks" component={Stock} exact={true} /> */}
            {/* <Route path="/stocks/realized" component={RealizedStocks} exact={true} /> */}
            {/* <Route path="/cash" component={Cash} exact={true} /> */}
            <Route path="/portfolios" component={Portfolios} exact={true} />
            {/* <Route path="/profile" component={Profile} exact={true} /> */}
            {/* <Route path="/position/:portfolioId/:ticker" component={PositionDetail} exact={true} /> */}
            <Footer />
          </Navbar>
        </Switch>
      </Router>
    </Provider>
  );
}