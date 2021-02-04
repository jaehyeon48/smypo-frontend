import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import StockItem from './StockItem';
import Button from '../button/Button';
import Modal from '../modal/Modal';
import AddTransaction from './AddTransaction';
import Spinner from '../spinner/Spinner';
import { getTotalCash } from '../../actions/cashAction';
import { getStocks } from '../../actions/stockAction';
import { getDefaultPortfolio } from '../../actions/portfolioAction';

const Stock = ({
  stock,
  defaultPortfolio,
  getTotalCash,
  getStocks,
  getDefaultPortfolio
}) => {
  let history = useHistory();
  const [defaultPortfolioId, setDefaultPortfolioId] = useState();
  const [isAddTransactionModalOpen, setIsAddTransactionModalOpen] = useState(false);
  const [currentPortfolioName, setCurrentPortfolioName] = useState('');

  useEffect(() => {
    getDefaultPortfolio();
    setDefaultPortfolioId((prevId) => {
      if (prevId !== defaultPortfolio) {
        return defaultPortfolio;
      }
      else return prevId;
    });
  }, [defaultPortfolio]);

  useEffect(() => {
    if (defaultPortfolio) {
      (async () => {
        try {
          const res = await axios.get(`${process.env.REACT_APP_SERVER_URL}/portfolio/default/name/${defaultPortfolio}`);
          setCurrentPortfolioName(res.data.name);
        } catch (error) {
          console.error(error);
        }
      })();
    }
  }, [defaultPortfolio]);

  useEffect(() => {
    if (defaultPortfolioId) {
      // use total cash when adding a new transaction
      getTotalCash(defaultPortfolioId);
      getStocks(defaultPortfolioId);
    }
  }, [defaultPortfolioId]);

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
      {defaultPortfolio && (
        <div className="current-portfolio">
          <span>Current Portfolio: </span>
          <span>{currentPortfolioName}</span>
        </div>
      )}
      <div className="stocks-btn-container">
        <Button
          btnType={'button'}
          btnText={'Add transaction'}
          onClickFunc={openAddTransactionModal}
        />
        <Button
          btnType={'button'}
          btnText={'Realized stocks'}
          btnColor={'primary'}
          onClickFunc={redirectToRealizedStocks}
        />
      </div>
      {stock && !stock.stockLoading ? (
        <React.Fragment>
          <div className="stocks-container">
            <header className="stocks-container__header">
              Holdings
            </header>
            <div className="stocks-table-wrapper">
              {stock.stockList && stock.stockList.length > 0 ? (
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
                    {stock.stockList.map(eachStock => (
                      <StockItem
                        key={eachStock.ticker}
                        ticker={eachStock.ticker}
                        avgCost={eachStock.avgCost}
                        quantity={eachStock.quantity}
                      />
                    ))}
                  </tbody>
                </table>) : (
                  <div className="notice-empty-stocklist">
                    <p>The stock list is empty. Please Add Your Stock First!</p>
                  </div>
                )}
            </div>
          </div>
          {isAddTransactionModalOpen && <Modal closeModalFunc={closeAddTransactionModal} overflowY={true}>
            <AddTransaction closeAddTransactionModal={closeAddTransactionModal} />
          </Modal>}
        </React.Fragment>
      ) : <Spinner />}
    </main>
  );
}

Stock.propTypes = {
  stock: PropTypes.object,
  defaultPortfolio: PropTypes.number,
  getTotalCash: PropTypes.func,
  getStocks: PropTypes.func,
  getDefaultPortfolio: PropTypes.func
};

const mapStateToProps = (state) => ({
  stock: state.stock,
  defaultPortfolio: state.portfolio.defaultPortfolio
});

export default connect(mapStateToProps, {
  getTotalCash,
  getStocks,
  getDefaultPortfolio
})(Stock);
