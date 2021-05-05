import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import Button from '../button/Button';
import { addCash } from '../../actions/cashAction';
import { showAlert } from '../../actions/alertAction';
import { closeModalWrapper } from '../../utils/closeModalWrapper';
import DepositIcon from '../icons/DepositIcon';
import WithdrawIcon from '../icons/WithdrawIcon';
import DividendIcon from '../icons/DividendIcon';

const AddCash = ({
  defaultPortfolio,
  closeAddCashModal,
  addCash,
  showAlert
}) => {
  const [isFirstSubmit, setIsFirstSubmit] = useState(false);
  const [amountErr, setAmountErr] = useState(false);
  const [disableBtn, setDisableBtn] = useState(false);

  const [formData, setFormData] = useState({
    amount: '',
    cashMemo: '',
    transactionType: 'deposit',
    transactionDate: new Date().toJSON().slice(0, 10)
  });
  const { amount, cashMemo, transactionType, transactionDate } = formData;

  // form validation
  useEffect(() => {
    if (isFirstSubmit) {
      if (amount.trim() === '') setAmountErr(true);
      else setAmountErr(false);
    }
  }, [isFirstSubmit, amount]);

  useEffect(() => {
    if (amountErr) setDisableBtn(true);
    else setDisableBtn(false);
  }, [amountErr]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsFirstSubmit(true);
    if (amount.trim() === '') return;

    const addCashResult = await addCash(defaultPortfolio, formData);
    if (addCashResult === 0) {
      showAlert('Successfully added a cash record.', 'success');
    } else {
      showAlert('Something went wrong. Please try again!', 'error');
    }
    closeModalWrapper(closeAddCashModal);
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
          <label className={amountErr ? "add-transaction-label--error" : "add-transaction-label"}>
            AMOUNT
          <input
              type="number"
              name="amount"
              min="0"
              step="0.01"
              value={amount}
              onChange={handleChange}
              className={amountErr ? "add-transaction-field--error" : "add-transaction-field"}
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
          <label className="add-transaction-label">
            Memo
          <textarea
              name="cashMemo"
              value={cashMemo}
              onChange={handleChange}
              className="add-transaction-field"
            ></textarea>
          </label>
          <Button
            btnType={'submit'}
            btnText={'Add transaction'}
            isDisabled={disableBtn}
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
