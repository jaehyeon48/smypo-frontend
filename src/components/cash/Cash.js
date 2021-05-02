import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import CashItem from './CashItem';
import CurrentPortfolioName from '../portfolio/CurrentPortfolioName';
import PortfolioDataSpinner from '../spinners/PortfolioDataSpinner';
import Modal from '../modal/Modal';
import ModalButton from '../modal/ModalButton';
import AddCash from './AddCash';
import EditCash from './EditCash';
import { getDefaultPortfolio } from '../../actions/portfolioAction';
import {
  getTotalCash,
  getCash
} from '../../actions/cashAction';

const Cash = ({
  portfolio,
  stock,
  cash,
  getCash,
  getTotalCash
}) => {
  const [isAddCashModalOpen, setIsAddCashModalOpen] = useState(false);
  const [isEditCashModalOpen, setIsEditCashModalOpen] = useState(false);
  const [isMemoModalOpen, setIsMemoModalOpen] = useState(false);
  const [isLoadingPortfolioData, setIsLoadingPortfolioData] = useState(false);
  const [memoData, setMemoData] = useState(false);
  const [formData, setFormData] = useState({
    cashId: '',
    amount: '',
    transactionType: 'deposit',
    transactionDate: new Date().toJSON().slice(0, 10)
  });

  useEffect(() => {
    if (portfolio.defaultPortfolioStatus === 'initial' ||
      portfolio.defaultPortfolioStatus === 'idle') {
      getDefaultPortfolio();
    }
  }, [portfolio.defaultPortfolioStatus]);

  useEffect(() => {
    if (portfolio.defaultPortfolio && (
      cash.cashListStatus === 'initial' ||
      cash.cashListStatus === 'idle' ||
      cash.totalCashStatus === 'initial' ||
      cash.totalCashStatus === 'idle'
    )) {
      getCash(portfolio.defaultPortfolio);
      getTotalCash(portfolio.defaultPortfolio);
    }
  }, [
    portfolio.defaultPortfolio,
    cash.cashListStatus,
    cash.totalCashStatus,
    getCash,
    getTotalCash
  ]);

  useEffect(() => {
    if (portfolio.portfolioListStatus === 'loading' ||
      portfolio.defaultPortfolioStatus === 'loading' ||
      stock.stockStatus === 'loading' ||
      stock.stockGroupStatus === 'loading' ||
      cash.cashListStatus === 'loading' ||
      cash.totalCashStatus === 'loading') {
      setIsLoadingPortfolioData(true);
    } else {
      setIsLoadingPortfolioData(false);
    }
  }, [
    portfolio.portfolioListStatus,
    portfolio.defaultPortfolioStatus,
    stock.stockStatus,
    stock.stockGroupStatus,
    cash.cashListStatus,
    cash.totalCashStatus
  ]);

  const openAddCashModal = () => {
    setIsAddCashModalOpen(true);
  }

  const closeAddCashModal = () => {
    setIsAddCashModalOpen(false);
  }

  const openEditCashModal = () => {
    setIsEditCashModalOpen(true);
  }

  const closeEditCashModal = () => {
    setIsEditCashModalOpen(false);
  }

  const openMemoModal = (memoData) => {
    document.body.style.overflow = 'hidden';
    setMemoData(memoData);
    setIsMemoModalOpen(true);
  }
  const closeMemoModal = () => {
    setIsMemoModalOpen(false);
  }

  return (
    <React.Fragment>
      <main className="cash-main">
        <CurrentPortfolioName />
        <div className="cash-total-amount">
          <span>Total Cash</span>
          <div className="cash-total-amount-crossbar"></div>
          <span>{cash.totalCash}</span>
        </div>
        <section className="cash-list-section">
          <div className="cash-btn-container">
            <ModalButton
              btnType={'button'}
              btnText={'Add cash transaction'}
              isDisabled={isLoadingPortfolioData}
              openModalFunc={openAddCashModal}
            />
          </div>
          <div className="cash-items-container">
            {isLoadingPortfolioData && <PortfolioDataSpinner />}
            <header className="cash-items__header">
              Cash
            </header>
            <div className="cash-table-wrapper">
              {cash && cash.cashList.length > 0 ? (
                <table className="cash-table">
                  <thead>
                    <tr>
                      <th className="cash-item__type-header">Type</th>
                      <th className="cash-item__amount-header">Amount</th>
                      <th className="cash-item__date-header">Date</th>
                      <th className="cash-item__memo-header">Memo</th>
                      <th></th> {/* table header for edit button*/}
                      <th></th> {/* table header for delete button*/}
                    </tr>
                  </thead>
                  <tbody>
                    {cash.cashList.map((cash) => (
                      <CashItem
                        key={cash.cashId}
                        cashId={cash.cashId}
                        amount={cash.amount}
                        cashMemo={cash.memo}
                        transactionType={cash.transactionType}
                        transactionDate={new Date(cash.transactionDate).toJSON().slice(0, 10)}
                        formData={formData}
                        setFormData={setFormData}
                        openMemoModal={openMemoModal}
                        openEditCashModal={openEditCashModal}
                      />
                    ))}
                  </tbody>
                </table>
              ) : (
                <div className="notice-no-cash">
                  <p>Cash list is empty.</p>
                </div>
              )}
            </div>
          </div>
        </section>
        {isAddCashModalOpen && (
          <Modal closeModalFunc={closeAddCashModal}>
            <AddCash closeAddCashModal={closeAddCashModal} />
          </Modal>
        )}
        {isEditCashModalOpen && (
          <Modal closeModalFunc={closeEditCashModal}>
            <EditCash
              closeEditCashModal={closeEditCashModal}
              formData={formData}
              setFormData={setFormData} />
          </Modal>
        )}
        {isMemoModalOpen && (
          <Modal closeModalFunc={closeMemoModal}>
            <div className="cash-memo-container">
              <header className="cash-memo-header">Cash Memo</header>
              <p className="cash-memo-content">{memoData}</p>
            </div>
          </Modal>
        )}
      </main>
    </React.Fragment>
  );
}

const mapStateToProps = (state) => ({
  portfolio: state.portfolio,
  stock: state.stock,
  cash: state.cash
});

export default connect(mapStateToProps, {
  getCash,
  getTotalCash
})(Cash);
