import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import Button from '../button/Button';
import {
  editStock,
  deleteStock
} from '../../actions/stockAction';
import CartIcon from '../icons/CartIcon';
import HandHoldingUSDIcon from '../icons/HandHoldingUSDIcon';

const EditTransaction = ({
  formData,
  setFormData,
  stockList,
  editStock,
  deleteStock
}) => {
  const [currentAvgCost, setCurrentAvgCost] = useState(0);
  const { ticker, price, quantity, transactionType, transactionDate } = formData;

  useEffect(() => {
    if (stockList && stockList.length > 0 && ticker.trim() !== '' && transactionType === 'sell') {
      const stockItem = stockList.filter(stock => stock.ticker === ticker.toLowerCase());
      if (stockItem[0]) {
        const avgCostOfStock = stockItem[0].avgCost;
        setCurrentAvgCost(avgCostOfStock);
      }
    }
  }, [stockList, ticker, transactionType]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  const handleEditStock = async (e) => {
    e.preventDefault();
    const editResult = await editStock(formData, currentAvgCost);
    if (editResult === 0) {
      window.location.reload();
    }
  }


  return (
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
        <label className="add-transaction-label">
          Price
          <input
            type="number"
            name="price"
            value={price}
            onChange={handleChange}
            min="0"
            step="0.01"
            className="add-transaction-field"
            required={true}
          />
        </label>
        <label className="add-transaction-label">
          Quantity
          <input
            type="number"
            name="quantity"
            value={quantity}
            onChange={handleChange}
            className="add-transaction-field"
            required={true}
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
          btnText={'Edit transaction'}
          btnColor={'warning'}
        />
      </form>
    </div>
  );
}

const mapStateToProps = (state) => ({
  stockList: state.stock.stockList
});

export default connect(mapStateToProps, {
  editStock,
  deleteStock
})(EditTransaction);
