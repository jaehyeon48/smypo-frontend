import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';

import StockGroupItem from './StockGroupItem';
import Button from '../button/Button';
import Modal from '../modal/Modal';
import ConfirmModal from '../modal/ConfirmModal';
import StockLogo from '../stock/StockLogo';
import {
  getStocks,
  getStocksByTickerGroup,
  closePosition
} from '../../actions/stockAction';
import { showAlert } from '../../actions/alertAction';
import { deleteStock } from '../../actions/stockAction';
import { getCompanyInfo } from '../../utils/getCompanyInfo';
import EditTransaction from './EditTransaction';
import CompanyInfo from './CompanyInfo';
import StockGroupLoadingSpinner from '../spinners/StockGroupLoadingSpinner';
import setBodyOverflowVisible from '../../utils/setBodyOverflowVisible';
import setBodyOverflowHidden from '../../utils/setBodyOverflowHidden';

const Position = ({
  match,
  stock,
  getStocks,
  getStocksByTickerGroup,
  closePosition,
  deleteStock,
  showAlert
}) => {
  let history = useHistory();
  const PORTFOLIO_ID = match.params.portfolioId;
  const TICKER = match.params.ticker;

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [toDeleteStockId, setToDeleteStockId] = useState(null);
  const [currentPrice, setCurrentPrice] = useState(0);
  const [currentPriceChg, setCurrentPriceChg] = useState(0);
  const [dailyReturnPercent, setDailyReturnPercent] = useState(0);
  const [formData, setFormData] = useState({
    stockId: '',
    ticker: TICKER.toUpperCase(),
    price: '',
    quantity: '',
    transactionType: '',
    transactionDate: ''
  });
  const [companyInfo, setCompanyInfo] = useState({});

  useEffect(() => {
    if (PORTFOLIO_ID && TICKER) {
      if (!(TICKER in stock.stockGroup) ||
        stock.stockGroupStatus === 'initial' ||
        stock.stockGroupStatus === 'idle') {
        getStocksByTickerGroup(PORTFOLIO_ID, TICKER);
      }
    }
  }, [
    stock.stockGroup,
    stock.stockGroupStatus,
    PORTFOLIO_ID,
    TICKER,
    getStocksByTickerGroup
  ]);

  useEffect(() => {
    setCurrentPrice(stock.stockList[TICKER]?.price);
  }, [stock, TICKER]);

  useEffect(() => {
    setCurrentPriceChg(stock.stockList[TICKER]?.change);
  }, [stock, TICKER]);

  useEffect(() => {
    console.log(currentPrice, currentPriceChg)
    setDailyReturnPercent(parseFloat((currentPriceChg / currentPrice) * 100).toFixed(2));
  }, [stock, TICKER, currentPrice, currentPriceChg]);


  useEffect(() => {
    (async () => {
      const companyInfoResult = await getCompanyInfo(TICKER);
      setCompanyInfo(companyInfoResult);
    })();
  }, [TICKER]);

  const openEditModal = () => {
    setIsEditModalOpen(true);
    setBodyOverflowHidden();
  }

  const closeEditModal = () => {
    setIsEditModalOpen(false);
    setBodyOverflowVisible();
  }

  const openInfoModal = () => {
    setIsInfoModalOpen(true);
  }

  const closeInfoModal = () => {
    setIsInfoModalOpen(false);
  }

  const openConfirmModal = () => {
    setIsConfirmModalOpen(true);
  }

  const handleCloseConfirmModal = () => {
    setIsConfirmModalOpen(false);
  }

  const colorPrice = (priceData) => {
    if (priceData > 0) return 'stock-item--return-positive';
    else if (priceData < 0) return 'stock-item--return-negative';
    else return 'stock-item--return-zero';
  }

  const handleClosePosition = async () => {
    if (window.confirm('Do you really want to close this position?')) {
      const closePositionResult = await closePosition(PORTFOLIO_ID, TICKER);
      if (closePositionResult === 0) {
        history.push('/stocks');
        window.location.reload();
      }
      else if (closePositionResult === -1) {
        showAlert('Something went wrong. Please try again!', 'fail');
      }
    }
  }

  const handleDeleteTransaction = async () => {
    const res = await deleteStock(toDeleteStockId);
    if (res === 0) {
      getStocks(PORTFOLIO_ID);
      getStocksByTickerGroup(PORTFOLIO_ID, TICKER);
      handleCloseConfirmModal();
    }
    else {
      showAlert('error', 'Something went wrong. Please try again.')
    }
  }

  return (
    <main className="position-main">
      <header className="position-header">
        <div className="position-header__logo-container">
          <StockLogo ticker={TICKER.toUpperCase()} />
        </div>
        <span
          className="position-header__ticker"
          onClick={openInfoModal}
        >
          {TICKER.toUpperCase()}
        </span>
        <span
          className="position-header__company-name"
        >
          {companyInfo && companyInfo.companyName}
        </span>
      </header>
      <div className="position-price-container">
        <span className="position-price-text">Current Price: </span>
        <span
          className={`position-price ${colorPrice(currentPriceChg)}`}
          data-ischgpositive={currentPriceChg >= 0}
        >
          {currentPrice}
        </span>
        <span className={`position-price-percent ${colorPrice(currentPriceChg)}`}>
          ({dailyReturnPercent}%)
        </span>
      </div>
      <Button
        btnType={'button'}
        btnText={'Close position'}
        btnColor={'danger'}
        onClickFunc={handleClosePosition}
      />
      {stock && stock.stockGroupStatus !== 'loading' ? (
        <div className="stock-group-container">
          <header className="stock-group__header">
            Transaction History
          </header>
          {stock && stock.stockGroup[TICKER] && Object.keys(stock.stockGroup[TICKER]).length > 0 ? (
            <div className="stock-group-table-wrapper">
              <table className="stock-group-table">
                <thead>
                  <tr>
                    <th className="stock-group-item__type-header">Type</th>
                    <th className="stock-group-item__amount-header">price</th>
                    <th className="stock-group-item__quantity-header">Quantity</th>
                    <th className="stock-group-item__date-header">Date</th>
                    <th></th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {stock && Object.values(stock.stockGroup[TICKER]).map(stockItem => (
                    <StockGroupItem
                      key={stockItem.stockId}
                      stockId={stockItem.stockId}
                      price={stockItem.price}
                      quantity={stockItem.quantity}
                      transactionType={stockItem.transactionType}
                      transactionDate={new Date(stockItem.transactionDate).toJSON().slice(0, 10)}
                      formData={formData}
                      openEditModal={openEditModal}
                      openConfirmModal={openConfirmModal}
                      setFormData={setFormData}
                      setToDeleteStockId={setToDeleteStockId}
                    />))}
                </tbody>
              </table>
            </div>
          ) : (
            <div>Transaction list is empty.</div>
          )}
        </div>
      ) : (
        <StockGroupLoadingSpinner />
      )}
      {isEditModalOpen && (
        <Modal closeModalFunc={closeEditModal}>
          <EditTransaction
            formData={formData}
            setFormData={setFormData}
            closeEditModal={closeEditModal}
          />
        </Modal>
      )}
      {/* {isInfoModalOpen && (
        <Modal closeModalFunc={closeInfoModal} overflowY={true}>
          <CompanyInfo companyInfo={companyInfo} />
        </Modal>
      )} */}
      {isConfirmModalOpen && (
        <ConfirmModal
          confirmMsg={'Do you really want to delete this transaction record?'}
          confirmAction={handleDeleteTransaction}
          closeModalFunc={handleCloseConfirmModal}
        />
      )}
    </main>
  );
}

const mapStateToProps = (state) => ({
  stock: state.stock
});

export default connect(mapStateToProps, {
  getStocksByTickerGroup,
  getStocks,
  closePosition,
  deleteStock,
  showAlert
})(Position);
