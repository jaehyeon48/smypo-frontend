import React from 'react';
import { connect } from 'react-redux';

import Button from '../button/Button';
import { editCash } from '../../actions/cashAction';
import { showAlert } from '../../actions/alertAction';
import DepositIcon from '../icons/DepositIcon';
import WithdrawIcon from '../icons/WithdrawIcon';
import DividendIcon from '../icons/DividendIcon';
import CartIcon from '../icons/CartIcon';
import HandHoldingUSDIcon from '../icons/HandHoldingUSDIcon';

const EditCash = ({
  closeEditCashModal,
  formData,
  setFormData,
  editCash,
  showAlert
}) => {
  const { amount, cashMemo, transactionType, transactionDate } = formData;

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
      showAlert('Successfully modified the cash transaction.', 'success');
      closeEditCashModal();
    } else {
      showAlert('Something went wrong. Please try again!', 'fail');
      closeEditCashModal();
    }
  }

  return (
    <React.Fragment>
      <header className="add-transaction-header">Edit Cash Transaction</header>
      <div className="add-transaction-container">
        <form autoComplete="off"
          onSubmit={handleSubmit}
          className="add-transaction-form edit-cash-form">
          <div className="transaction-type-container cash-type-container">
            <p className="type-container-title">Type</p>
            <label className="edit-cash-label">
              <input
                type="radio"
                name="transactionType"
                value="deposit"
                checked={transactionType === 'deposit'}
                onChange={handleChange}
              />
              <div className="radio-box edit-cash-radio-box">
                <DepositIcon />
                Deposit
              </div>
            </label>
            <label className="edit-cash-label">
              <input
                type="radio"
                name="transactionType"
                value="withdraw"
                checked={transactionType === 'withdraw'}
                onChange={handleChange}
              />
              <div className="radio-box edit-cash-radio-box">
                <WithdrawIcon />
                Withdraw
              </div>
            </label>
            <label className="edit-cash-label">
              <input
                type="radio"
                name="transactionType"
                value="dividend"
                checked={transactionType === 'dividend'}
                onChange={handleChange}
              />
              <div className="radio-box edit-cash-radio-box">
                <DividendIcon />
                Dividend
              </div>
            </label>
            <label className="edit-cash-label">
              <input
                type="radio"
                name="transactionType"
                value="purchased"
                checked={transactionType === 'purchased'}
                onChange={handleChange}
              />
              <div className="radio-box edit-cash-radio-box">
                <CartIcon />
                Purchased
              </div>
            </label>
            <label className="edit-cash-label">
              <input
                type="radio"
                name="transactionType"
                value="sold"
                checked={transactionType === 'sold'}
                onChange={handleChange}
              />
              <div className="radio-box edit-cash-radio-box">
                <HandHoldingUSDIcon />
                Sold
              </div>
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
          <label className="add-transaction-label">
            Memo
          <textarea
              name="cashMemo"
              value={cashMemo ?? ''}
              onChange={handleChange}
              className="add-transaction-field"
            ></textarea>
          </label>
          <Button
            btnType={'submit'}
            btnText={'Edit cash transaction'}
            btnColor={'warning'}
          />
        </form>
      </div>
    </React.Fragment>
  );
}

export default connect(null, {
  editCash,
  showAlert
})(EditCash);
