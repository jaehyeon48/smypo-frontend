import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import tickerAutoComplete from '../../utils/tickerAutoComplete';
import AutoCompleteResult from './AutoCompleteResult';
import Button from '../button/Button';
import CartIcon from '../icons/CartIcon';
import HandHoldingUSDIcon from '../icons/HandHoldingUSDIcon';
import { closeModalWrapper } from '../../utils/closeModalWrapper';
import { addStock } from '../../actions/stockAction';
import { showAlert } from '../../actions/alertAction';

const AddTransaction = ({
  closeAddTransactionModal,
  portfolio,
  cash,
  stock,
  addStock,
  showAlert
}) => {
  const [formData, setFormData] = useState({
    ticker: '',
    price: '',
    quantity: '',
    stockMemo: '',
    referCash: false,
    transactionDate: new Date().toJSON().slice(0, 10),
    transactionType: 'buy'
  });
  const [companyName, setCompanyName] = useState('');
  const [currentAvgCost, setCurrentAvgCost] = useState(0);
  const [tickerInput, setTickerInput] = useState('');
  const [autoCompleteResults, setAutoCompleteResults] = useState([]);
  const [renderAutoComplete, setRenderAutoComplete] = useState(false);
  const [isFirstSubmit, setIsFirstSubmit] = useState(false);
  const [tickerErr, setTickerErr] = useState(false);
  const [priceErr, setPriceErr] = useState(false);
  const [qtyErr, setQtyErr] = useState(false);
  const [disableBtn, setDisableBtn] = useState(false);

  const { ticker, price, quantity, stockMemo,
    referCash, transactionDate, transactionType
  } = formData;

  useEffect(() => {
    if (autoCompleteResults.length > 0) setRenderAutoComplete(true);
    else setRenderAutoComplete(false);
  }, [autoCompleteResults]);

  useEffect(() => {
    // if the ticker is empty (in case the user deletes the ticker input)
    if (ticker.trim() === '' && companyName !== '') {
      setCompanyName('');
    }
  }, [ticker, companyName]);

  useEffect(() => {
    if (Object.keys(stock.stockList).length > 0 && ticker.trim() !== '' && transactionType === 'sell') {
      const stockItem = Object.values(stock.stockList).filter(stock => stock.ticker === ticker.toLowerCase());
      if (stockItem[0]) {
        const avgCostOfStock = stockItem[0].avgCost;
        setCurrentAvgCost(avgCostOfStock);
      }
    }
  }, [stock.stockList, ticker, transactionType]);

  // form validation
  useEffect(() => {
    if (isFirstSubmit) {
      if (ticker.trim() === '') setTickerErr(true);
      else setTickerErr(false);

      if (price.trim() === '') setPriceErr(true);
      else setPriceErr(false);

      if (quantity.trim() === '') setQtyErr(true);
      else setQtyErr(false);
    }
  }, [isFirstSubmit, ticker, price, quantity]);

  useEffect(() => {
    if (tickerErr || priceErr || qtyErr) setDisableBtn(true);
    else setDisableBtn(false);
  }, [tickerErr, priceErr, qtyErr]);


  const handleTickerInput = (e) => {
    setTickerInput(e.target.value);
    if (e.target.value.trim() === '') return setAutoCompleteResults([]);
    const tickerResult = tickerAutoComplete(e.target.value);
    setAutoCompleteResults(tickerResult);
  }

  // in case the user clicks one of the auto-completion results
  const handleClickItem = (ticker, companyName) => {
    setFormData({ ...formData, ticker });
    setCompanyName(companyName);
    setRenderAutoComplete(false);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsFirstSubmit(true);
    if (ticker.trim() === '' ||
      price.trim() === '' ||
      quantity.trim() === '') return;

    if (referCash && transactionType === 'buy' && cash && cash.totalCash < (price * quantity)) {
      window.alert(
        `Not enough cash to make this purchase. You have ${cash.totalCash} USD in this portfolio but need ${price * quantity} USD`
      );
      return;
    }
    else {
      // currentAvgCost is used when the user sells a stock
      const addStockResult = await addStock(portfolio.defaultPortfolio, formData, currentAvgCost);
      if (addStockResult === 0) {
        showAlert('Successfully added a transaction', 'success');
      }
      else {
        showAlert('Something went wrong. Please try again!', 'error');
      }
      closeModalWrapper(closeAddTransactionModal);
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
    <React.Fragment>
      <header className="add-transaction-header">Add Transaction</header>
      <div className="add-transaction-container">
        <form autoComplete="off" onSubmit={handleSubmit} className="add-transaction-form">
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
            <label className={`add-transaction-label${tickerErr ? '--error' : ''}`}>
              Ticker
            <div className="auto-complete-field-wrapper">
                <input
                  type="text"
                  name="ticker"
                  value={ticker}
                  onChange={handleChange}
                  onInput={handleTickerInput}
                  className={`add-transaction-field${tickerErr ? '--error' : ''}`}
                />
                {renderAutoComplete && <AutoCompleteResult
                  results={autoCompleteResults}
                  userInput={tickerInput}
                  handleClickItem={handleClickItem}
                />}
              </div>
            </label>
          </div>
          <label className="add-transaction-label">
            Company
          <input
              type="text"
              value={companyName}
              className="add-transaction-field"
              disabled={true}
            />
          </label>
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
              value={stockMemo}
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
  portfolio: state.portfolio,
  cash: state.cash,
  stock: state.stock
});

export default connect(mapStateToProps, {
  addStock,
  showAlert
})(AddTransaction);
