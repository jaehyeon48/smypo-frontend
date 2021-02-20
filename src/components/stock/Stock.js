import React, { useState, useEffect, useCallback } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import StockItem from './StockItem';
import HeldStockItem from './HeldStockItem';
import CurrentPortfolioName from '../portfolio/CurrentPortfolioName';
import Button from '../button/Button';
import Modal from '../modal/Modal';
import AddTransaction from './AddTransaction';
import StockLoadingSpinner from '../spinners/StockLoadingSpinner';
import { getTotalCash } from '../../actions/cashAction';
import {
  getStocks,
  getRealizedStocks
} from '../../actions/stockAction';
import {
  getDefaultPortfolio,
  getDefaultPortfolioName
} from '../../actions/portfolioAction';

const Stock = ({
  stock,
  cash,
  portfolio,
  getTotalCash,
  getStocks,
  getRealizedStocks,
  getDefaultPortfolio,
  getDefaultPortfolioName
}) => {
  let history = useHistory();
  const [isAddTransactionModalOpen, setIsAddTransactionModalOpen] = useState(false);
  const [isHeldStocksExist, setIsHeldStocksExist] = useState(false);

  useEffect(() => {
    if (portfolio.defaultPortfolioStatus === 'initial' ||
      portfolio.defaultPortfolioStatus === 'idle') {
      getDefaultPortfolio();
    }
  }, [
    portfolio.defaultPortfolioStatus,
    getDefaultPortfolio,
    getDefaultPortfolioName
  ]);

  useEffect(() => {
    if (portfolio.defaultPortfolio) {
      if (stock.stockStatus === 'initial' ||
        stock.stockStatus === 'idle') {
        getStocks(portfolio.defaultPortfolio);
      }
      if (stock.realizedStockStatus === 'initial' ||
        stock.realizedStockStatus === 'idle') {
        getRealizedStocks(portfolio.defaultPortfolio);
      }
      if (cash.totalCashStatus === 'initial' ||
        cash.totalCashStatus === 'idle') {
        // use total cash when adding a new transaction
        getTotalCash(portfolio.defaultPortfolio);
      }
    }
  }, [
    portfolio.defaultPortfolio,
    stock.stockStatus,
    stock.realizedStockStatus,
    cash.totalCashStatus,
    getStocks,
    getRealizedStocks,
    getTotalCash
  ]);

  useEffect(() => {
    if (Object.keys(stock.stockList).length > 0) {
      if (Object.values(stock.stockList).filter((stockItem) => stockItem.quantity === 0).length > 0) {
        setIsHeldStocksExist(true);
      } else {
        setIsHeldStocksExist(false);
      }
    }
  }, [stock.stockList]);

  const calcTotalGainForHeldStock = useCallback((ticker) => {
    if (stock.realizedStocks) {
      const heldStockData = Object.values(stock.realizedStocks).filter(
        (stockItem) => stockItem.ticker === ticker.toUpperCase());
      let sumOfGainForEachTransaction = 0;
      let sumOfAvgCost = 0;
      for (const heldStockDataItem of heldStockData) {
        const { price, quantity, avgCost } = heldStockDataItem;
        sumOfGainForEachTransaction += (price - avgCost) * quantity;
        sumOfAvgCost += avgCost * quantity;
      }
      return [
        sumOfGainForEachTransaction.toFixed(2),
        ((sumOfGainForEachTransaction / sumOfAvgCost) * 100).toFixed(2)
      ];
    }
    return [0, 0];
  }, [stock.realizedStocks]);

  const openAddTransactionModal = () => {
    setIsAddTransactionModalOpen(true);
  }

  const closeAddTransactionModal = () => {
    setIsAddTransactionModalOpen(false);
  }

  const redirectToRealizedStocks = () => {
    history.push('/stocks/realized');
  }

  return (
    <main className="stock-main">
      <CurrentPortfolioName />
      <div className="stocks-btn-container">
        <Button
          btnType={'button'}
          btnText={'Add transaction'}
          onClickFunc={openAddTransactionModal}
          isDisabled={portfolio && portfolio.portfolioList.length === 0}
        />
        <Button
          btnType={'button'}
          btnText={'Realized stocks'}
          btnColor={'primary'}
          onClickFunc={redirectToRealizedStocks}
        />
      </div>
      {stock && stock.stockStatus !== 'loading' ? (
        <React.Fragment>
          <div className="holdings-container">
            <header className="holdings-container__header">
              Holdings
            </header>
            <div className="holdings-table-wrapper">
              {stock.stockList && Object.keys(stock.stockList).length > 0 ? (
                <table className="holdings-table">
                  <thead>
                    <tr>
                      <th className="stock-item__ticker-header">Ticker</th>
                      <th className="stock-item__price-header">Price</th>
                      <th className="stock-item__change-header">Change</th>
                      <th className="stock-item__cost-header">Cost</th>
                      <th className="stock-item__shares-header">Shares</th>
                      <th className="stock-item__mv-header">Market Value</th>
                      <th className="stock-item__dgain-header">Daily Gain</th>
                      <th className="stock-item__tgain-header">Total Gain</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Object.values(stock.stockList).map((stockItem) => {
                      if (stockItem && stockItem.quantity > 0) {
                        return (
                          <StockItem
                            key={stockItem.ticker}
                            ticker={stockItem.ticker}
                            price={stockItem.price}
                            change={stockItem.change}
                            avgCost={stockItem.avgCost}
                            quantity={stockItem.quantity}
                            dailyReturn={stockItem.dailyReturn}
                            overallReturn={stockItem.overallReturn}
                            defaultPortfolio={portfolio.defaultPortfolio}
                          />
                        );
                      }
                      return null;
                    })}
                  </tbody>
                </table>
              ) : (
                  <React.Fragment>
                    {portfolio && portfolio.portfolioList.length === 0 ? (
                      <div className="notice-empty-portfolio-list">
                        <p>Please add your portfolio first.</p>
                      </div>
                    ) : (
                        <div className="notice-empty-stocklist">
                          <p>Stock list is empty. Start by adding your transactions!</p>
                        </div>
                      )}
                  </React.Fragment>
                )}
            </div>
          </div>
          <div className="held-container">
            <header className="held-container__header">
              Held Stocks
            </header>
            <div className="held-table-wrapper">
              {isHeldStocksExist ? (
                <table className="held-table">
                  <thead>
                    <tr>
                      <th className="stock-item__ticker-header">Ticker</th>
                      <th className="stock-item__price-header">Price</th>
                      <th className="stock-item__change-header">Change</th>
                      <th className="stock-item__tgain-header">Total Gain</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Object.values(stock.stockList).map((stockItem) => {
                      if (stockItem && stockItem.quantity === 0) {
                        calcTotalGainForHeldStock(stockItem.ticker);
                        return (
                          <HeldStockItem
                            key={stockItem.ticker}
                            ticker={stockItem.ticker}
                            price={stockItem.price}
                            change={stockItem.change}
                            overallReturnData={calcTotalGainForHeldStock(stockItem.ticker)}
                            defaultPortfolio={portfolio.defaultPortfolio}
                          />
                        );
                      }
                      return null;
                    })}
                  </tbody>
                </table>
              ) : (
                  <React.Fragment>
                    {portfolio && portfolio.portfolioList.length === 0 ? (
                      <div className="notice-empty-portfolio-list">
                        <p>Please add your portfolio first.</p>
                      </div>
                    ) : (
                        <div className="notice-empty-stocklist">
                          <p>There are no stocks you previously held.</p>
                        </div>
                      )}
                  </React.Fragment>
                )}
            </div>
          </div>
          {isAddTransactionModalOpen && <Modal closeModalFunc={closeAddTransactionModal} overflowY={true}>
            <AddTransaction closeAddTransactionModal={closeAddTransactionModal} />
          </Modal>}
        </React.Fragment>
      ) : <StockLoadingSpinner loadingProgress={stock.calcProgress} />}
    </main>
  );
}

const mapStateToProps = (state) => ({
  stock: state.stock,
  cash: state.cash,
  portfolio: state.portfolio
});

export default connect(mapStateToProps, {
  getTotalCash,
  getStocks,
  getRealizedStocks,
  getDefaultPortfolio,
  getDefaultPortfolioName
})(Stock);
