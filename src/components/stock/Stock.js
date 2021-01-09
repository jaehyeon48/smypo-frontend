import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';
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
  loading,
  isAuthenticated,
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

  if (!loading && !isAuthenticated) {
    return <Redirect to="/login" />
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
            {stock.stockList && stock.stockList.length > 0 ? stock.stockList.map(eachStock => (
              <StockItem
                key={eachStock.ticker}
                ticker={eachStock.ticker}
                avgCost={eachStock.avgCost}
                quantity={eachStock.quantity}
              />
            )) : (
                <div className="notice-empty-stocklist">
                  <p>The stock list is empty. Please Add Your Stock First!</p>
                </div>
              )}
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
  isAuthenticated: PropTypes.bool,
  stock: PropTypes.object,
  defaultPortfolio: PropTypes.number,
  getTotalCash: PropTypes.func,
  getStocks: PropTypes.func,
  getDefaultPortfolio: PropTypes.func
};

const mapStateToProps = (state) => ({
  loading: state.auth.loading,
  isAuthenticated: state.auth.isAuthenticated,
  stock: state.stock,
  defaultPortfolio: state.portfolio.defaultPortfolio
});

export default connect(mapStateToProps, {
  getTotalCash,
  getStocks,
  getDefaultPortfolio
})(Stock);
