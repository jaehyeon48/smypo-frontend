import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';

import StockGroupItem from './StockGroupItem';
import ModalButton from '../modal/ModalButton';
import Modal from '../modal/Modal';
import ConfirmModal from '../modal/ConfirmModal';
import StockLogo from '../stock/StockLogo';
import {
  getStocks,
  getStocksByTickerGroup,
  deleteQuote
} from '../../actions/stockAction';
import { showAlert } from '../../actions/alertAction';
import { deleteStock } from '../../actions/stockAction';
import { getCompanyInfo } from '../../utils/getCompanyInfo';
import EditTransaction from './EditTransaction';
import { closeModalWrapper } from '../../utils/closeModalWrapper';
import CompanyInfo from './CompanyInfo';
import StockLoadingSpinner from '../spinners/StockLoadingSpinner';
import StockGroupLoadingSpinner from '../spinners/StockGroupLoadingSpinner';

const Position = ({
  match,
  stock,
  getStocks,
  getStocksByTickerGroup,
  deleteQuote,
  deleteStock,
  showAlert
}) => {
  let history = useHistory();
  const PORTFOLIO_ID = match.params.portfolioId;
  const TICKER = match.params.ticker;
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);
  // 'DT' for Delete Transaction
  const [isDTConfirmModalOpen, setIsDTConfirmModalOpen] = useState(false);
  // 'CP' for Close Position
  const [isCPConfirmModalOpen, setISCPConfirmModalOpen] = useState(false);
  const [isMemoModalOpen, setIsMemoModalOpen] = useState(false);
  const [memoData, setMemoData] = useState('');
  const [toDeleteStockId, setToDeleteStockId] = useState(null);
  const [currentPrice, setCurrentPrice] = useState(0);
  const [currentPriceChg, setCurrentPriceChg] = useState(0);
  const [dailyReturnPercent, setDailyReturnPercent] = useState(0);
  const [formData, setFormData] = useState({
    stockId: '',
    ticker: TICKER.toUpperCase(),
    price: '',
    quantity: '',
    stockMemo: '',
    transactionType: '',
    transactionDate: ''
  });
  const [companyInfo, setCompanyInfo] = useState({});

  useEffect(() => {
    if (PORTFOLIO_ID && TICKER) {
      if (stock.stockStatus === 'initial' ||
        stock.stockStatus === 'idle') {
        getStocks(PORTFOLIO_ID);
      }

      if (!(TICKER in stock.stockGroup) ||
        stock.stockGroupStatus === 'initial' ||
        stock.stockGroupStatus === 'idle') {
        getStocksByTickerGroup(PORTFOLIO_ID, TICKER);
      }
    }
  }, [stock, PORTFOLIO_ID, TICKER, getStocks, getStocksByTickerGroup]);

  useEffect(() => {
    setCurrentPrice(stock.stockList[TICKER]?.price);
  }, [stock, TICKER]);

  useEffect(() => {
    setCurrentPriceChg(stock.stockList[TICKER]?.change);
  }, [stock, TICKER]);

  useEffect(() => {
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
  }

  const closeEditModal = () => {
    setIsEditModalOpen(false);
  }

  const openInfoModal = () => {
    setIsInfoModalOpen(true);
  }

  const closeInfoModal = () => {
    setIsInfoModalOpen(false);
  }

  const openCPConfirmModal = () => {
    setISCPConfirmModalOpen(true);
  }

  const openDTConfirmModal = () => {
    setIsDTConfirmModalOpen(true);
  }

  const closeCPConfirmModal = () => {
    setISCPConfirmModalOpen(false);
  }

  const handleCloseDTConfirmModal = () => {
    setIsDTConfirmModalOpen(false);
  }

  const openMemoModal = (memoData, isMemoEmpty) => {
    if (isMemoEmpty) return;
    document.body.style.overflow = 'hidden';
    setMemoData(memoData);
    setIsMemoModalOpen(true);
  }

  const closeMemoModal = () => {
    setIsMemoModalOpen(false);
  }

  const colorPrice = (priceData) => {
    if (priceData > 0) return 'stock-item--return-positive';
    else if (priceData < 0) return 'stock-item--return-negative';
    else return 'stock-item--return-zero';
  }

  const handleDeleteQuote = async () => {
    const deleteQuoteRes = await deleteQuote(PORTFOLIO_ID, TICKER);
    if (deleteQuoteRes === 0) {
      document.body.style.overflow = 'visible';
      getStocks(PORTFOLIO_ID);
      history.push('/stocks');
    } else {
      closeModalWrapper(closeCPConfirmModal);
      showAlert('Something went wrong. Please try again.', 'error');
    }
  }

  const handleDeleteTransaction = async () => {
    const res = await deleteStock(toDeleteStockId);
    if (res === 0) {
      getStocks(PORTFOLIO_ID);
      getStocksByTickerGroup(PORTFOLIO_ID, TICKER);
      closeModalWrapper(handleCloseDTConfirmModal);
    }
    else {
      showAlert('error', 'Something went wrong. Please try again.')
    }
  }

  return (
    <main className="position-main">
      {stock?.stockStatus !== 'loading' ? (
        <React.Fragment>
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
          <ModalButton
            btnType={'button'}
            btnText={'Delete quote'}
            btnColor={'danger'}
            openModalFunc={openCPConfirmModal}
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
                        <th className="stock-group-item__memo-header">Memo</th>
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
                          stockMemo={stockItem.memo}
                          transactionType={stockItem.transactionType}
                          transactionDate={new Date(stockItem.transactionDate).toJSON().slice(0, 10)}
                          formData={formData}
                          openEditModal={openEditModal}
                          openMemoModal={openMemoModal}
                          openConfirmModal={openDTConfirmModal}
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
        </React.Fragment>
      ) : (
        <StockLoadingSpinner />
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
      {isCPConfirmModalOpen && (
        <ConfirmModal
          confirmMsg={'Do you really want to close this position?'}
          confirmAction={handleDeleteQuote}
          closeModalFunc={closeCPConfirmModal}
        />
      )}
      {isDTConfirmModalOpen && (
        <ConfirmModal
          confirmMsg={'Do you really want to delete this transaction record?'}
          confirmAction={handleDeleteTransaction}
          closeModalFunc={handleCloseDTConfirmModal}
        />
      )}
      {isMemoModalOpen && (
        <Modal closeModalFunc={closeMemoModal}>
          <div className="memo-container">
            <header className="memo-header">Stock Memo</header>
            <p className="memo-content">{memoData}</p>
          </div>
        </Modal>
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
  deleteQuote,
  deleteStock,
  showAlert
})(Position);
