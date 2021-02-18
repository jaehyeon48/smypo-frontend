import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import StockItem from './StockItem';
import CurrentPortfolioName from '../portfolio/CurrentPortfolioName';
import Button from '../button/Button';
import Modal from '../modal/Modal';
import AddTransaction from './AddTransaction';
import StockLoadingSpinner from '../spinners/StockLoadingSpinner';
import { getTotalCash } from '../../actions/cashAction';
import { getStocks } from '../../actions/stockAction';
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
  getDefaultPortfolio,
  getDefaultPortfolioName
}) => {
  let history = useHistory();
  const [isAddTransactionModalOpen, setIsAddTransactionModalOpen] = useState(false);

  useEffect(() => {
    if (portfolio && (portfolio.defaultPortfolioStatus === 'initial' ||
      portfolio.defaultPortfolioStatus === 'idle')) {
      getDefaultPortfolio();
    }
  }, [portfolio, getDefaultPortfolio, getDefaultPortfolioName]);

  useEffect(() => {
    if (portfolio.defaultPortfolio) {
      if (stock && (stock.stockStatus === 'initial' ||
        stock.stockStatus === 'idle')) {
        getStocks(portfolio.defaultPortfolio);
      }
      if (cash && (cash.totalCashStatus === 'initial' ||
        cash.totalCashStatus === 'idle')) {
        // use total cash when adding a new transaction
        getTotalCash(portfolio.defaultPortfolio);
      }
    }
  }, [portfolio, stock, cash, getStocks, getTotalCash]);

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
          <div className="stocks-container">
            <header className="stocks-container__header">
              Holdings
            </header>
            <div className="stocks-table-wrapper">
              {stock.stockList && Object.keys(stock.stockList).length > 0 ? (
                <table className="stocks-table">
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
          {isAddTransactionModalOpen && <Modal closeModalFunc={closeAddTransactionModal} overflowY={true}>
            <AddTransaction closeAddTransactionModal={closeAddTransactionModal} />
          </Modal>}
        </React.Fragment>
      ) : <StockLoadingSpinner loadingProgress={stock.calcProgress} />}
    </main>
  );
}

Stock.propTypes = {
  stock: PropTypes.object,
  getTotalCash: PropTypes.func,
  getStocks: PropTypes.func,
  getDefaultPortfolio: PropTypes.func
};

const mapStateToProps = (state) => ({
  stock: state.stock,
  cash: state.cash,
  portfolio: state.portfolio
});

export default connect(mapStateToProps, {
  getTotalCash,
  getStocks,
  getDefaultPortfolio,
  getDefaultPortfolioName
})(Stock);
