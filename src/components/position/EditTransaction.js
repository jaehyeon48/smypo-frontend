import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import Button from '../button/Button';
import {
  editStock,
  deleteStock
} from '../../actions/stockAction';
import { showAlert } from '../../actions/alertAction';
import { closeModalWrapper } from '../../utils/closeModalWrapper';
import CartIcon from '../icons/CartIcon';
import HandHoldingUSDIcon from '../icons/HandHoldingUSDIcon';

const EditTransaction = ({
  formData,
  setFormData,
  stockList,
  editStock,
  showAlert,
  closeEditModal
}) => {
  const [currentAvgCost, setCurrentAvgCost] = useState(0);
  const [isFirstSubmit, setIsFirstSubmit] = useState(false);
  const [priceErr, setPriceErr] = useState(false);
  const [qtyErr, setQtyErr] = useState(false);
  const [disableBtn, setDisableBtn] = useState(false);
  const { ticker, price, quantity, stockMemo, transactionType, transactionDate } = formData;

  useEffect(() => {
    if (stockList && stockList.length > 0 && ticker.trim() !== '' && transactionType === 'sell') {
      const stockItem = stockList.filter(stock => stock.ticker === ticker.toLowerCase());
      if (stockItem[0]) {
        const avgCostOfStock = stockItem[0].avgCost;
        setCurrentAvgCost(avgCostOfStock);
      }
    }
  }, [stockList, ticker, transactionType]);

  // form validation
  useEffect(() => {
    if (isFirstSubmit) {
      if (price === '') setPriceErr(true);
      else setPriceErr(false);

      if (quantity === '') setQtyErr(true);
      else setQtyErr(false);
    }
  }, [isFirstSubmit, ticker, price, quantity]);

  useEffect(() => {
    if (priceErr || qtyErr) setDisableBtn(true);
    else setDisableBtn(false);
  }, [priceErr, qtyErr]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  const handleEditStock = async (e) => {
    e.preventDefault();
    setIsFirstSubmit(true);
    if (ticker.trim() === '' ||
      price === '' ||
      quantity === '') return;

    const editResult = await editStock(formData, currentAvgCost);
    if (editResult === 0) {
      showAlert('Successfully edited a transaction record.', 'success');
    } else {
      showAlert('Failed to edit the record. Please try again.', 'error');
    }
    closeModalWrapper(closeEditModal);
  }


  return (
    <React.Fragment>
      <header className="add-transaction-header">Edit Transaction</header>
      <div className="add-transaction-container">
        <form autoComplete="off" onSubmit={handleEditStock} className="add-transaction-form">
          <div className="transaction-type-container">
            <p className="type-container-title">Type</p>
            <label>
              <input
                type="radio"
                name="transactionType"
                value="buy"
                checked={transactionType === 'buy'}
                onChange={handleChange}
              />
              <div className="radio-box">
                <CartIcon />
                Buy
              </div>
            </label>
            <label>
              <input
                type="radio"
                name="transactionType"
                value="sell"
                checked={transactionType === 'sell'}
                onChange={handleChange}
              />
              <div className="radio-box">
                <HandHoldingUSDIcon />
                Sell
              </div>
            </label>
          </div>
          <div className="ticker-container">
            <label className="add-transaction-label">
              Ticker
          <input
                type="text"
                name="ticker"
                value={ticker}
                className="add-transaction-field"
                disabled={true}
              />
            </label>
          </div>
          <label className={`add-transaction-label${priceErr ? '--error' : ''}`}>
            Price
          <input
              type="number"
              name="price"
              value={price}
              onChange={handleChange}
              min="0"
              step="0.01"
              className={`add-transaction-field${priceErr ? '--error' : ''}`}
            />
          </label>
          <label className={`add-transaction-label${qtyErr ? '--error' : ''}`}>
            Quantity
          <input
              type="number"
              name="quantity"
              value={quantity}
              onChange={handleChange}
              className={`add-transaction-field${qtyErr ? '--error' : ''}`}
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
              name="stockMemo"
              value={stockMemo ?? ''}
              onChange={handleChange}
              className="add-transaction-field"
            ></textarea>
          </label>
          <Button
            btnType={'submit'}
            btnText={'Edit transaction'}
            btnColor={'warning'}
            isDisabled={disableBtn}
          />
        </form>
      </div>
    </React.Fragment>
  );
}

const mapStateToProps = (state) => ({
  stockList: state.stock.stockList
});

export default connect(mapStateToProps, {
  editStock,
  deleteStock,
  showAlert
})(EditTransaction);
