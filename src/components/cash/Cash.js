import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import CashItem from './CashItem';
import CurrentPortfolioName from '../portfolio/CurrentPortfolioName';
import PortfolioDataSpinner from '../spinners/PortfolioDataSpinner';
import Modal from '../modal/Modal';
import Button from '../button/Button';
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
  const [isLoadingPortfolioData, setIsLoadingPortfolioData] = useState(false);
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
            <Button
              btnType={'button'}
              btnText={'Add cash transaction'}
              onClickFunc={openAddCashModal}
              isDisabled={isLoadingPortfolioData}
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
                      <th></th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {cash.cashList.map((cash) => (
                      <CashItem
                        key={cash.cashId}
                        cashId={cash.cashId}
                        amount={cash.amount}
                        transactionType={cash.transactionType}
                        transactionDate={new Date(cash.transactionDate).toJSON().slice(0, 10)}
                        formData={formData}
                        setFormData={setFormData}
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
