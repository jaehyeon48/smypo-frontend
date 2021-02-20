import React, { useState, useEffect, memo } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import {
  loadPortfolios,
  getDefaultPortfolio
} from '../../actions/portfolioAction';
import {
  checkMarketStatus,
  getStocks,
  getRealizedStocks
} from '../../actions/stockAction';
import { getTotalCash } from '../../actions/cashAction';
import ChartSolidIcon from '../icons/ChartSolidIcon';
import ChartRegularIcon from '../icons/ChartRegularIcon';
import SackDollarIcon from '../icons/SackDollarIcon';
import ValuePieChart from './ValuePieChart';
import SectorPieChart from './SectorPieChart';
import LineChart from './LineChart';
import MainLoadingSpinner from '../spinners/MainLoadingSpinner';
import StockLoadingSpinner from '../spinners/StockLoadingSpinner';

const Dashboard = ({
  stock,
  cash,
  portfolio,
  defaultPortfolio,
  loadPortfolios,
  getDefaultPortfolio,
  checkMarketStatus,
  getStocks,
  getRealizedStocks,
  getTotalCash,
}) => {
  const [totalDailyReturn, setTotalDailyReturn] = useState(0);
  const [totalOverallReturn, setTotalOverallReturn] = useState(0);
  const [dailyReturnPercent, setDailyReturnPercent] = useState(0);
  const [overallReturnPercent, setOverallReturnPercent] = useState(0);
  const [totalCost, setTotalCost] = useState(0);
  const [cashToDisplay, setCashToDisplay] = useState(cash.totalCash);
  const [totalValue, setTotalValue] = useState(0);

  useEffect(() => {
    checkMarketStatus();
  }, [checkMarketStatus]);

  useEffect(() => {
    if (portfolio.defaultPortfolioStatus === 'initial' ||
      portfolio.defaultPortfolioStatus === 'idle') {
      getDefaultPortfolio();
    }
  }, [portfolio.defaultPortfolioStatus, getDefaultPortfolio]);

  useEffect(() => {
    if (portfolio.portfolioListStatus === 'initial' ||
      portfolio.portfolioListStatus === 'idle') {
      loadPortfolios();
    }
  }, [portfolio.portfolioListStatus, loadPortfolios]);

  useEffect(() => {
    if (defaultPortfolio) {
      if (stock.stockStatus === 'initial' ||
        stock.stockStatus === 'idle') {
        getStocks(defaultPortfolio);
      }
      if (stock.realizedStockStatus === 'initial' ||
        stock.realizedStockStatus === 'idle') {
        getRealizedStocks(defaultPortfolio);
      }
      if (cash.totalCashStatus === 'initial' ||
        cash.totalCashStatus === 'idle') {
        getTotalCash(defaultPortfolio);
      }
    }
  }, [
    stock.stockStatus,
    stock.realizedStockStatus,
    cash.totalCashStatus,
    getStocks,
    getRealizedStocks,
    getTotalCash,
    defaultPortfolio
  ]);

  useEffect(() => {
    if (Object.keys(stock.stockList).length > 0) {
      let sumOfCost = 0;
      for (const stockInfo of Object.values(stock.stockList)) {
        sumOfCost += (stockInfo.avgCost * stockInfo.quantity);
      }
      setTotalCost(parseFloat(sumOfCost.toFixed(2)));
    }
  }, [stock.stockList]);

  useEffect(() => {
    if (Object.keys(stock.stockList).length > 0) {
      let sumOfDailyReturn = 0;
      for (const stockInfo of Object.values(stock.stockList)) {
        sumOfDailyReturn += stockInfo.dailyReturn;
      }
      setTotalDailyReturn(parseFloat(sumOfDailyReturn.toFixed(2)));
    }
  }, [stock.stockList]);

  useEffect(() => {
    if (Object.keys(stock.stockList).length > 0) {
      let sumOfOverallReturn = 0;
      for (const stockInfo of Object.values(stock.stockList)) {
        sumOfOverallReturn += stockInfo.overallReturn;
      }
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
    if (cash.totalCash < 0) {
      setCashToDisplay(0);
    }
    else {
      setCashToDisplay(cash.totalCash);
    }
  }, [cash.totalCash]);

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
      {portfolio && portfolio.status !== 'loading'
        && portfolio.portfolioList.length > 0 ? (
          <main className="dashboard-main">
            {stock && stock.stockStatus !== 'loading' ? (
              <React.Fragment>
                {Object.keys(stock.stockList).length > 0 ? (
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
                    {stock && Object.values(stock.stockList).length > 0 && (
                      <div className="dashboard-pie-charts">
                        <ValuePieChart />
                        <SectorPieChart />
                      </div>
                    )}
                    <LineChart defaultPortfolioId={defaultPortfolio} />
                  </React.Fragment>
                ) : (
                    <div className="dashboard-notice-empty-stocklist">
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
            ) : <StockLoadingSpinner loadingProgress={stock.calcProgress} />}
            <div className="portfolio-actions">
            </div>
          </main>
        ) : (
          portfolio.status === 'loading' ? (
            <MainLoadingSpinner loadingText={'Loading portfolio list...'} />
          ) : (
              <main className="dashboard-notice-empty-portfolio-list">
                <p>Portfolio list is empty. How about creating a new one?</p>
                <Link to="/portfolios">
                  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="plus" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path fill="currentColor" d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                  </svg>
              Add new portfolio
            </Link>
              </main>
            )
        )}
    </React.Fragment>
  );
}

const mapStateToProps = (state) => ({
  theme: state.auth.theme,
  stock: state.stock,
  cash: state.cash,
  portfolio: state.portfolio,
  defaultPortfolio: state.portfolio.defaultPortfolio
});

export default connect(mapStateToProps, {
  loadPortfolios,
  getDefaultPortfolio,
  checkMarketStatus,
  getStocks,
  getRealizedStocks,
  getTotalCash
})(memo(Dashboard));