import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Button from '../button/Button';
import { addCash } from '../../actions/cashAction';
import { showAlert } from '../../actions/alertAction';

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
    }
    else {
      showAlert('Something went wrong. Please try again!', 'error');
      closeAddCashModal();
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
              className="transaction-type-cash"
              value="deposit"
              checked={transactionType === 'deposit'}
              onChange={handleChange}
            />
          </label>
          <label>WITHDRAW
          <input
              type="radio"
              name="transactionType"
              className="transaction-type-cash"
              value="withdraw"
              checked={transactionType === 'withdraw'}
              onChange={handleChange}
            />
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
  );
}

AddCash.propTypes = {
  defaultPortfolio: PropTypes.number,
  closeAddCashModal: PropTypes.func,
  addCash: PropTypes.func
};

const mapStateToProps = (state) => ({
  defaultPortfolio: state.portfolio.defaultPortfolio
});

export default connect(mapStateToProps, {
  addCash,
  showAlert
})(AddCash);
