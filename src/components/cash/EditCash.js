import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Button from '../button/Button';
import { editCash } from '../../actions/cashAction';
import { showAlert } from '../../actions/alertAction';

const EditCash = ({
  closeEditCashModal,
  formData,
  setFormData,
  editCash,
  showAlert
}) => {
  const { amount, transactionType, transactionDate } = formData;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const addCashResult = await editCash(formData);
    if (addCashResult !== 0) {
      showAlert('Something went wrong. Please try again!', 'fail');
      closeEditCashModal();
    }
  }

  return (
    <div className="add-transaction-container">
      <form autoComplete="off" onSubmit={handleSubmit} className="add-transaction-form">
        <div className="transaction-type-container">
          <label>Deposit
          <input
              type="radio"
              name="transactionType"
              value="deposit"
              className="transaction-type-cash"
              checked={transactionType === 'deposit'}
              onChange={handleChange}
            />
          </label>
          <label>Withdraw
          <input
              type="radio"
              name="transactionType"
              value="withdraw"
              className="transaction-type-cash"
              checked={transactionType === 'withdraw'}
              onChange={handleChange}
            />
          </label>
          <label>Dividend
          <input
              type="radio"
              name="transactionType"
              className="transaction-type-cash"
              value="dividend"
              checked={transactionType === 'dividend'}
              onChange={handleChange}
            />
          </label>
          <label>Purchased
          <input
              type="radio"
              name="transactionType"
              value="purchased"
              className="transaction-type-cash"
              checked={transactionType === 'purchased'}
              onChange={handleChange}
            />
          </label>
          <label>Sold
          <input
              type="radio"
              name="transactionType"
              value="sold"
              className="transaction-type-cash"
              checked={transactionType === 'sold'}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="ticker-container">
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
        </div>
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
          btnText={'Edit cash transaction'}
          btnColor={'warning'}
        />
      </form>
    </div>
  );
}

EditCash.propTypes = {
  currentPortfolio: PropTypes.number,
  closeAddCashModal: PropTypes.func,
  formData: PropTypes.object,
  setFormData: PropTypes.func,
  editCash: PropTypes.func
};

export default connect(null, {
  editCash,
  showAlert
})(EditCash);
