import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import tickerAutoComplete from '../../utils/tickerAutoComplete';
import AutoCompleteResult from './AutoCompleteResult';
import Button from '../button/Button';

import { addStock } from '../../actions/stockAction';
import { showAlert } from '../../actions/alertAction';

const AddTransaction = ({
  closeAddTransactionModal,
  defaultPortfolio,
  totalCash,
  stockList,
  addStock,
  showAlert
}) => {
  const [formData, setFormData] = useState({
    ticker: '',
    price: '',
    quantity: '',
    companyName: '',
    referCash: false,
    transactionDate: new Date().toJSON().slice(0, 10),
    transactionType: 'buy'
  });
  const [currentAvgCost, setCurrentAvgCost] = useState(0);
  const [tickerInput, setTickerInput] = useState('');
  const [autoCompleteResults, setAutoCompleteResults] = useState([]);
  const [renderAutoComplete, setRenderAutoComplete] = useState(false);

  const { ticker, price, quantity, companyName, referCash, transactionDate, transactionType } = formData;

  useEffect(() => {
    if (autoCompleteResults.length > 0) setRenderAutoComplete(true);
    else setRenderAutoComplete(false);
  }, [autoCompleteResults]);

  useEffect(() => {
    if (ticker.trim() === '' && companyName !== '') {
      setFormData({ ...formData, companyName: '' });
    }
  }, [ticker, companyName]);

  useEffect(() => {
    if (stockList && stockList.length > 0 && ticker.trim() !== '' && transactionType === 'sell') {
      const stockItem = stockList.filter(stock => stock.ticker === ticker.toLowerCase());
      if (stockItem[0]) {
        const avgCostOfStock = stockItem[0].avgCost;
        setCurrentAvgCost(avgCostOfStock);
      }
    }
  }, [stockList, ticker, transactionType]);


  const handleTickerInput = (e) => {
    setTickerInput(e.target.value);
    if (e.target.value.trim() === '') return setAutoCompleteResults([]);
    const tickerResult = tickerAutoComplete(e.target.value);
    setAutoCompleteResults(tickerResult);
  }

  const handleClickItem = (ticker, companyName) => {
    setFormData({ ...formData, ticker, companyName });
    setRenderAutoComplete(false);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (referCash && transactionType === 'buy' && totalCash < (price * quantity)) {
      window.alert(`Not enough cash to make this purchase. You have ${totalCash} USD in this portfolio but need ${price * quantity} USD`);
      return;
    }
    else {
      // currentAvgCost is used when the user sells a stock
      if (referCash) {
        if (transactionType === 'buy') {
          formData['transactionType'] = 'purchased';
        } else if (transactionType === 'sell') {
          formData['transactionType'] = 'sold';
        }
      }
      const addStockResult = await addStock(defaultPortfolio, formData, currentAvgCost);

      if (addStockResult === 0) {
        closeAddTransactionModal();
        showAlert('Successfully added a transaction', 'success');
      }
      else {
        showAlert('Something went wrong. Please try again!', 'error');
        closeAddTransactionModal();
      }
    }
  }

  const handleChange = (e) => {
    if (e.target.name === 'referCash') {
      setFormData({
        ...formData,
        referCash: !referCash
      });
    }
    else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
    }
  }

  return (
    <div className="add-transaction-container">
      <form autoComplete="off" onSubmit={handleSubmit} className="add-transaction-form">
        <div className="transaction-type-container">
          <label>BUY
          <input
              type="radio"
              name="transactionType"
              value="buy"
              checked={transactionType === 'buy'}
              onChange={handleChange}
            />
          </label>
          <label>SELL
          <input
              type="radio"
              name="transactionType"
              value="sell"
              checked={transactionType === 'sell'}
              onChange={handleChange}
            />
          </label>
        </div>
        <div className="refer-cash-container">
          {transactionType === 'buy' ? (
            <label>
              <input
                type="checkbox"
                name="referCash"
                value={referCash}
                onChange={handleChange}
              /> Withdraw cash from portfolio to purchase
            </label>
          ) : (
              <label>
                <input
                  type="checkbox"
                  name="referCash"
                  value={referCash}
                  onChange={handleChange}
                /> Deposit cash to portfolio from sale
              </label>
            )}
        </div>
        <div className="ticker-container">
          <label className="add-transaction-label">
            Ticker
          <input
              type="text"
              name="ticker"
              value={ticker}
              onChange={handleChange}
              onInput={handleTickerInput}
              className="add-transaction-field"
            />
          </label>
        </div>
        <label className="add-transaction-label">
          Company
          <div className="auto-complete-field-wrapper">
            <input
              type="text"
              value={companyName}
              className="add-transaction-field"
              disabled={true}
            />
            {renderAutoComplete && <AutoCompleteResult
              results={autoCompleteResults}
              userInput={tickerInput}
              handleClickItem={handleClickItem}
            />}
          </div>
        </label>
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

AddTransaction.propTypes = {
  closeAddTransactionModal: PropTypes.func,
  defaultPortfolio: PropTypes.number,
  totalCash: PropTypes.number,
  stockList: PropTypes.array,
  addStock: PropTypes.func,
  showAlert: PropTypes.func
}

const mapStateToProps = (state) => ({
  defaultPortfolio: state.portfolio.defaultPortfolio,
  totalCash: state.cash.totalCash,
  stockList: state.stock.stockList
});

export default connect(mapStateToProps, {
  addStock,
  showAlert
})(AddTransaction);
