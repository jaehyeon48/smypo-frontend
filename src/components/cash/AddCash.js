import React, { useState } from 'react';
import { connect } from 'react-redux';

import Button from '../button/Button';
import { addCash } from '../../actions/cashAction';
import { showAlert } from '../../actions/alertAction';
import DepositIcon from '../icons/DepositIcon';
import WithdrawIcon from '../icons/WithdrawIcon';
import DividendIcon from '../icons/DividendIcon';

const AddCash = ({
  defaultPortfolio,
  closeAddCashModal,
  addCash,
  showAlert
}) => {
  const [formData, setFormData] = useState({
    amount: '',
    transactionType: 'deposit',
    transactionDate: new Date().toJSON().slice(0, 10)
  });

  const { amount, transactionType, transactionDate } = formData;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const addCashResult = await addCash(defaultPortfolio, formData);
    if (addCashResult === 0) {
      closeAddCashModal();
      showAlert('Successfully added a cash record.', 'success');
    }
    else {
      showAlert('Something went wrong. Please try again!', 'error');
      closeAddCashModal();
    }
  }

  return (
    <React.Fragment>
      <header className="add-transaction-header">Add Cash Transaction</header>
      <div className="add-transaction-container">
        <form autoComplete="off" onSubmit={handleSubmit} className="add-transaction-form">
          <div className="transaction-type-container cash-type-container">
            <p className="type-container-title">Type</p>
            <label>
              <input
                type="radio"
                name="transactionType"
                value="deposit"
                checked={transactionType === 'deposit'}
                onChange={handleChange}
              />
              <div className="radio-box">
                <DepositIcon />
                Deposit
              </div>
            </label>
            <label>
              <input
                type="radio"
                name="transactionType"
                value="withdraw"
                checked={transactionType === 'withdraw'}
                onChange={handleChange}
              />
              <div className="radio-box">
                <WithdrawIcon />
                Withdraw
              </div>
            </label>
            <label>
              <input
                type="radio"
                name="transactionType"
                value="dividend"
                checked={transactionType === 'dividend'}
                onChange={handleChange}
              />
              <div className="radio-box">
                <DividendIcon />
                Dividend
              </div>
            </label>
          </div>
          <label className="add-transaction-label">
            AMOUNT
          <input
              type="number"
              name="amount"
              min="0"
              step="0.01"
              value={amount}
              onChange={handleChange}
              className="add-transaction-field"
            />
          </label>
          <label className="add-transaction-label">
            Date
          <input
              type="date"
              name="transactionDate"
              value={transactionDate}
              onChange={handleChange}
              className="add-transaction-date-field"
            />
          </label>
          <Button
            btnType={'submit'}
            btnText={'Add transaction'}
          />
        </form>
      </div>
    </React.Fragment>
  );
}

const mapStateToProps = (state) => ({
  defaultPortfolio: state.portfolio.defaultPortfolio
});

export default connect(mapStateToProps, {
  addCash,
  showAlert
})(AddCash);
