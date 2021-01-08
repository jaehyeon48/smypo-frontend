import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import {
  loadPortfolios,
  getSelectedPortfolio
} from '../../actions/portfolioAction';
import {
  checkMarketStatus,
  getStocks,
  resetStockLoading
} from '../../actions/stockAction';
import { getTotalCash } from '../../actions/cashAction';
import GetStockPrice from './GetStockPrice';
import ValuePieChart from './ValuePieChart';
import SectorPieChart from './SectorPieChart';
import TenDayChart from './TenDayChart';
import DollarSignIcon from '../icons/DollarSignIcon';
import Spinner from '../spinner/Spinner';
import './mainpage.css';

const Dashboard = ({
  loading,
  isAuthenticated,
  stock,
  totalCash,
  portfolioList,
  currentPortfolio,
  loadPortfolios,
  getSelectedPortfolio,
  checkMarketStatus,
  getStocks,
  getTotalCash,
  resetStockLoading
}) => {
  const [totalDailyReturn, setTotalDailyReturn] = useState(0);
  const [totalOverallReturn, setTotalOverallReturn] = useState(0);
  const [dailyReturnPercent, setDailyReturnPercent] = useState(0);
  const [overallReturnPercent, setOverallReturnPercent] = useState(0);
  const [totalCost, setTotalCost] = useState(0);
  const [cashToDisplay, setCashToDisplay] = useState(totalCash);
  const [totalValue, setTotalValue] = useState(0);

  useEffect(() => { checkMarketStatus(); }, []);
  useEffect(() => { getSelectedPortfolio(); }, []);
  useEffect(() => { resetStockLoading(); }, []);

  useEffect(() => {
    loadPortfolios();
  }, [loadPortfolios]);

  useEffect(() => {
    if (currentPortfolio) {
      getStocks(currentPortfolio);
      getTotalCash(currentPortfolio);
    }
  }, [currentPortfolio]);

  useEffect(() => {
    if (stock.stockList.length > 0) {
      let sumOfCost = 0;
      stock.stockList.forEach(stock => {
        sumOfCost += (stock.avgCost * stock.quantity);
      });
      setTotalCost(parseFloat(sumOfCost.toFixed(2)));
    }
  }, [stock.stockList]);

  useEffect(() => {
    if (stock.stockList.length > 0) {
      let sumOfDailyReturn = 0;
      stock.stockList.forEach(stock => {
        sumOfDailyReturn += stock.dailyReturn;
      });
      setTotalDailyReturn(parseFloat(sumOfDailyReturn.toFixed(2)));
    }
  }, [stock.stockList]);

  useEffect(() => {
    if (stock.stockList.length > 0) {
      let sumOfOverallReturn = 0;
      stock.stockList.forEach(stock => {
        sumOfOverallReturn += stock.overallReturn;
      });
      setTotalOverallReturn(parseFloat(sumOfOverallReturn.toFixed(2)));
    }
  }, [stock.stockList]);

  useEffect(() => {
    setDailyReturnPercent((totalDailyReturn / (totalOverallReturn + totalCost - totalDailyReturn) * 100));
  }, [totalDailyReturn, totalOverallReturn, totalCost]);

  useEffect(() => {
    setOverallReturnPercent(totalOverallReturn / totalCost * 100);
  }, [totalOverallReturn, totalCost]);

  useEffect(() => {
    setTotalValue(totalOverallReturn + totalCost + cashToDisplay);
  }, [totalOverallReturn, totalCost, cashToDisplay]);

  useEffect(() => {
    if (totalCash < 0) {
      setCashToDisplay(0);
    }
    else {
      setCashToDisplay(totalCash);
    }
  }, [totalCash]);

  if (!isAuthenticated && !loading) {
    return <Redirect to="/login" />
  }

  const colorReturnItem = (value) => {
    if (value > 0) return 'return-positive';
    else if (value < 0) return 'return-negative';
    else return 'return-zero';
  }

  const colorReturnItemBottom = (value) => {
    if (value > 0) return 'return-item-bottom-positive';
    else if (value < 0) return 'return-item-bottom-negative';
    else return 'return-item-bottom-zero';
  }

  return (
    <React.Fragment>
      {portfolioList && portfolioList.length > 0 ? (
        <div className="main-container">
          {!stock.stockLoading ? (
            <React.Fragment>
              {stock.stockList.length > 0 ? (
                <React.Fragment>
                  <div className="display-return-container">
                    <div
                      className={`return-item daily-return ${colorReturnItemBottom(totalDailyReturn)}`}
                    >
                      <span>Daily Return</span>
                      <span className={`${colorReturnItem(totalDailyReturn)}`}>
                        <DollarSignIcon />
                        {totalDailyReturn} ({totalDailyReturn > 0 && '+'}
                        {isNaN(dailyReturnPercent.toFixed(2)) ? (0) : (
                          dailyReturnPercent.toFixed(2)
                        )}%)
                        </span>
                    </div>
                    <div
                      className={`return-item overall-return ${colorReturnItemBottom(totalOverallReturn)}`}
                    >
                      <span>Overall Return</span>
                      <span className={`${colorReturnItem(totalOverallReturn)}`}>
                        <DollarSignIcon />
                        {totalOverallReturn} ({totalOverallReturn > 0 && '+'}
                        {isNaN(overallReturnPercent.toFixed(2)) ? (0) : (
                          overallReturnPercent.toFixed(2)
                        )}%)
                      </span>
                    </div>
                    <div className={`return-item total-value ${colorReturnItemBottom(totalValue)}`}>
                      <span>Total Value</span>
                      <span className={`${colorReturnItem(totalValue)}`}>
                        <DollarSignIcon />
                        {(totalValue).toFixed(2)}
                      </span>
                    </div>
                  </div>
                  {stock.stockList.length > 0 && <ValuePieChart stockListLength={stock.stockList.length} />}
                  {stock.stockList.length > 0 && <SectorPieChart />}
                  <TenDayChart currentPortfolioId={currentPortfolio} />
                </React.Fragment>
              ) : <div className="notice-empty-stocklist">The stock list is empty. Please Add Your Stock First!</div>}
            </React.Fragment>
          ) : <div className="dashboard-spinner"><Spinner /></div>}
          <div className="portfolio-actions">
          </div>
          {stock && !stock.stockLoading && stock.stockList.map(eachStock => (
            <GetStockPrice
              key={eachStock.ticker}
              ticker={eachStock.ticker}
              avgCost={eachStock.avgCost}
              quantity={eachStock.quantity}
            />
          ))}
        </div>
      ) : <div className="notice-empty-portfoliolist">Portfolio Does Not Exist! Why Don't You Create Your First Portfolio?</div>}
    </React.Fragment>
  );
}


Dashboard.propTypes = {
  theme: PropTypes.string,
  loading: PropTypes.bool,
  isAuthenticated: PropTypes.bool,
  totalCost: PropTypes.number,
  totalCash: PropTypes.number,
  portfolioList: PropTypes.array,
  currentPortfolio: PropTypes.number,
  loadPortfolios: PropTypes.func,
  checkMarketStatus: PropTypes.func,
  getSelectedPortfolio: PropTypes.func,
  getStocks: PropTypes.func,
  addTotalCost: PropTypes.func,
  getTotalCash: PropTypes.func,
  resetStockLoading: PropTypes.func,
};

const mapStateToProps = (state) => ({
  theme: state.auth.theme,
  loading: state.auth.loading,
  isAuthenticated: state.auth.isAuthenticated,
  stock: state.stock,
  totalCash: state.cash.totalCash,
  portfolioList: state.portfolio.portfolioList,
  currentPortfolio: state.portfolio.currentPortfolio
});

export default connect(mapStateToProps, {
  loadPortfolios,
  getSelectedPortfolio,
  checkMarketStatus,
  getStocks,
  getTotalCash,
  resetStockLoading
})(Dashboard);