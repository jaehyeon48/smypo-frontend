import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

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
    if (addCashResult === 0) {
      window.location.reload();
    }
    else {
      showAlert('Something went wrong. Please try again!', 'fail');
      closeEditCashModal();
    }
  }

  return (
    <div className="add-transaction-container">
      <form autoComplete="off" onSubmit={handleSubmit} className="add-transaction-form">
        <div className="transaction-type-container">
          <label>DEPOSIT
          <input
              type="radio"
              name="transactionType"
              value="deposit"
              checked={transactionType === 'deposit'}
              onChange={handleChange}
            />
          </label>
          <label>WITHDRAW
          <input
              type="radio"
              name="transactionType"
              value="withdraw"
              checked={transactionType === 'withdraw'}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="ticker-container">
          <label className="add-transaction-inputs">
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
        <label className="add-transaction-inputs">
          Date
          <input
            type="date"
            name="transactionDate"
            value={transactionDate}
            onChange={handleChange}
            className="add-transaction-date-field"
          />
        </label>
        <button type="submit" className="btn btn-edit-transaction">EDIT CASH TRANSACTION</button>
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
