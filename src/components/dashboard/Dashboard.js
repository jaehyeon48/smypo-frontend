import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';

import {
  loadPortfolios,
  getDefaultPortfolio
} from '../../actions/portfolioAction';
import {
  checkMarketStatus,
  getStocks,
  resetStockLoading
} from '../../actions/stockAction';
import { getTotalCash } from '../../actions/cashAction';
import ChartSolidIcon from '../icons/ChartSolidIcon';
import ChartRegularIcon from '../icons/ChartRegularIcon';
import SackDollarIcon from '../icons/SackDollarIcon';
import GetStockPrice from './GetStockPrice';
import ValuePieChart from './ValuePieChart';
import SectorPieChart from './SectorPieChart';
import LineChart from './LineChart';
import Spinner from '../spinner/Spinner';
import { Line } from 'react-chartjs-2';

const Dashboard = ({
  loading,
  isAuthenticated,
  stock,
  totalCash,
  portfolioList,
  defaultPortfolio,
  loadPortfolios,
  getDefaultPortfolio,
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
  useEffect(() => { getDefaultPortfolio(); }, []);
  useEffect(() => { resetStockLoading(); }, []);

  useEffect(() => {
    loadPortfolios();
  }, [loadPortfolios]);

  useEffect(() => {
    if (defaultPortfolio) {
      getStocks(defaultPortfolio);
      getTotalCash(defaultPortfolio);
    }
  }, [defaultPortfolio]);

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
        <main className="dashboard-main">
          {!stock.stockLoading ? (
            <React.Fragment>
              {stock.stockList.length > 0 ? (
                <React.Fragment>
                  <div className="display-return-container">
                    <div
                      className={`return-item daily-return ${colorReturnItemBottom(totalDailyReturn)}`}
                    >
                      <div className="return-item-icon">
                        <ChartRegularIcon />
                      </div>
                      <div className="return-item-content">
                        <span>Daily Return</span>
                        <span className={`return-numbers ${colorReturnItem(totalDailyReturn)}`}>
                          <span>
                            {totalDailyReturn}
                          </span>
                          <span>
                            ({totalDailyReturn > 0 && '+'}
                            {isNaN(dailyReturnPercent.toFixed(2)) ? (0) : (
                              dailyReturnPercent.toFixed(2)
                            )}%)
                          </span>
                        </span>
                      </div>
                    </div>
                    <div
                      className={`return-item overall-return ${colorReturnItemBottom(totalOverallReturn)}`}
                    >
                      <div className="return-item-icon">
                        <ChartSolidIcon />
                      </div>
                      <div className="return-item-content">
                        <span>Total Return</span>
                        <span className={`return-numbers ${colorReturnItem(totalOverallReturn)}`}>
                          <span>
                            {totalOverallReturn}
                          </span>
                          <span>
                            ({totalOverallReturn > 0 && '+'}
                            {isNaN(overallReturnPercent.toFixed(2)) ? (0) : (
                              overallReturnPercent.toFixed(2)
                            )}%)
                          </span>
                        </span>
                      </div>
                    </div>
                    <div className={`return-item total-value ${colorReturnItemBottom(totalValue)}`}>
                      <div className="return-item-icon">
                        <SackDollarIcon />
                      </div>
                      <div className="return-item-content">
                        <span>Total Asset</span>
                        <span className={`return-numbers ${colorReturnItem(totalValue)}`}>
                          {(totalValue).toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>
                  {stock.stockList && stock.stockList.length > 0 && (
                    <div className="dashboard-pie-charts">
                      <ValuePieChart stockListLength={stock.stockList.length} />
                      <SectorPieChart />
                    </div>
                  )}
                  <LineChart defaultPortfolioId={defaultPortfolio} />
                </React.Fragment>
              ) : (
                  <div className="notice-empty-stocklist">
                    <p>Your stock list is empty. Please add your stock first.</p>
                    <Link to="/stocks">
                      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="plus" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path fill="currentColor" d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                      </svg>
                      Add new stock
                    </Link>
                  </div>
                )}
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
        </main>
      ) : (
          <main className="notice-empty-portfolio-list">
            <p>Portfolio list is empty. Would you like to create a new one?</p>
            <Link to="/portfolios">
              <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="plus" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path fill="currentColor" d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
              </svg>
              Add new portfolio
            </Link>
          </main>
        )}
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
  defaultPortfolio: PropTypes.number,
  loadPortfolios: PropTypes.func,
  checkMarketStatus: PropTypes.func,
  getDefaultPortfolio: PropTypes.func,
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
  defaultPortfolio: state.portfolio.defaultPortfolio
});

export default connect(mapStateToProps, {
  loadPortfolios,
  getDefaultPortfolio,
  checkMarketStatus,
  getStocks,
  getTotalCash,
  resetStockLoading
})(Dashboard);