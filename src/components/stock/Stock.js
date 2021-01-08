import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';

import StockItem from './StockItem';
import Button from '../button/Button';
import Modal from '../modal/Modal';
import AddTransaction from './AddTransaction';
import Spinner from '../spinner/Spinner';
import { getTotalCash } from '../../actions/cashAction';
import { getStocks } from '../../actions/stockAction';
import { getSelectedPortfolio } from '../../actions/portfolioAction';

const Stock = ({
  loading,
  isAuthenticated,
  stock,
  currentPortfolio,
  getTotalCash,
  getStocks,
  getSelectedPortfolio
}) => {
  let history = useHistory();
  const [currentPortfolioId, setCurrentPortfolioId] = useState();
  const [isAddTransactionModalOpen, setIsAddTransactionModalOpen] = useState(false);

  useEffect(() => {
    getSelectedPortfolio();
    setCurrentPortfolioId((prevId) => {
      if (prevId !== currentPortfolio) {
        return currentPortfolio;
      }
      else return prevId;
    });
  }, [currentPortfolio]);

  useEffect(() => {
    if (currentPortfolioId) {
      getTotalCash(currentPortfolioId);
      getStocks(currentPortfolioId);
    }
  }, [currentPortfolioId]);

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
  currentPortfolio: PropTypes.number,
  getTotalCash: PropTypes.func,
  getStocks: PropTypes.func,
  getSelectedPortfolio: PropTypes.func
};

const mapStateToProps = (state) => ({
  loading: state.auth.loading,
  isAuthenticated: state.auth.isAuthenticated,
  stock: state.stock,
  currentPortfolio: state.portfolio.currentPortfolio
});

export default connect(mapStateToProps, {
  getTotalCash,
  getStocks,
  getSelectedPortfolio
})(Stock);
