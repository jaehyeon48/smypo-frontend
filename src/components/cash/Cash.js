import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import CashItem from './CashItem';
import Modal from '../modal/Modal';
import Button from '../button/Button';
import AddCash from './AddCash';
import EditCash from './EditCash';
import {
  getTotalCash,
  getCash
} from '../../actions/cashAction';

const Cash = ({
  portfolio,
  cashLoading,
  totalCash,
  cashList,
  getCash,
  getTotalCash
}) => {
  const [isAddCashModalOpen, setIsAddCashModalOpen] = useState(false);
  const [isEditCashModalOpen, setIsEditCashModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    cashId: '',
    amount: '',
    transactionType: 'deposit',
    transactionDate: new Date().toJSON().slice(0, 10)
  });

  useEffect(() => {
    if (portfolio && portfolio.defaultPortfolio) {
      getCash(portfolio.defaultPortfolio);
      getTotalCash(portfolio.defaultPortfolio);
    }
  }, [portfolio, getCash, getTotalCash]);

  useEffect(() => {
    if (cashList.length > 0) {
    }
  }, [cashList]);

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
        <div className="current-portfolio">
          <span>Current Portfolio: </span>
          <span>{portfolio.defaultPortfolioName}</span>
        </div>
        <Button
          btnType={'button'}
          btnText={'Add cash transaction'}
          onClickFunc={openAddCashModal}
        />
        <div className="cash-total-amount">
          <span>Total Cash</span>
          <span>{totalCash}</span>
        </div>
        <div className="cash-items-container">
          <header className="cash-items__header">
            Cash
            </header>
          <div className="cash-table-wrapper">
            {cashList && cashList.length > 0 ? (
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
                  {cashList.map((cash) => (
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

Cash.propTypes = {
  defaultPortfolio: PropTypes.number,
  cashLoading: PropTypes.bool,
  cashList: PropTypes.array,
  totalCash: PropTypes.number,
  getDefaultPortfolio: PropTypes.func,
  getCash: PropTypes.func,
  getTotalCash: PropTypes.func
};

const mapStateToProps = (state) => ({
  portfolio: state.portfolio,
  cashLoading: state.cash.cashLoading,
  cashList: state.cash.cashList,
  totalCash: state.cash.totalCash
});

export default connect(mapStateToProps, {
  getCash,
  getTotalCash
})(Cash);
