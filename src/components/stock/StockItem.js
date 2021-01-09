import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { findCompanyNameByTicker } from '../../utils/findNameByTicker';
import { getRealTimePrice } from '../../utils/getRealTimePrice';
import { getClosePrice } from '../../utils/getClosePrice';
import {
  editDailyReturn,
  editOverallReturn
} from '../../actions/stockAction';

const StockItem = ({
  stock,
  ticker,
  avgCost,
  quantity,
  defaultPortfolio,
  editDailyReturn,
  editOverallReturn
}) => {
  let history = useHistory();
  const [isFirstRender, setIsFirstRender] = useState(true);
  const [stockPriceData, setStockPriceData] = useState({
    price: 0,
    change: 0,
    changePercent: 0
  });
  const [dailyReturn, setDailyReturn] = useState(0);
  const [overallReturn, setOverallReturn] = useState(0);
  const [overallReturnPercent, setOverallReturnPercent] = useState(0);

  useEffect(() => {
    let intervalId;
    let isCancelled = false;
    if (!isCancelled) {
      (async () => {
        if (stock.isMarketOpen) {
          if (isFirstRender) {
            setIsFirstRender(false);
            if (!isCancelled) {
              (async () => {
                const realTimeData = await getRealTimePrice(ticker);
                setStockPriceData({
                  price: realTimeData.price,
                  change: realTimeData.change,
                  changePercent: realTimeData.changePercent
                });
              })();
            }
          }
          intervalId = setInterval(async () => {
            const realTimeData = await getRealTimePrice(ticker);
            setStockPriceData({
              price: realTimeData.price,
              change: realTimeData.change,
              changePercent: realTimeData.changePercent
            });
          }, 10000);
        }
        else {
          if (!isCancelled) {
            const closeData = await getClosePrice(ticker);
            setStockPriceData({
              price: closeData.price,
              change: closeData.change,
              changePercent: closeData.changePercent
            });
          }
        }
      })();
    }
    return () => {
      isCancelled = true;
      clearInterval(intervalId);
    }
  }, []);

  useEffect(() => {
    if (stockPriceData.change !== null) {
      setDailyReturn(parseFloat((stockPriceData.change * quantity).toFixed(2)));
    }
  }, [quantity, stockPriceData.change]);

  useEffect(() => {
    if (stockPriceData.price !== null) {
      setOverallReturn(parseFloat(((stockPriceData.price - avgCost) * quantity).toFixed(2)));
    }
  }, [stockPriceData.price, avgCost, quantity]);

  useEffect(() => {
    setOverallReturnPercent(parseFloat((overallReturn / (avgCost * quantity) * 100).toFixed(2)));
  }, [overallReturn, avgCost, quantity]);

  useEffect(() => {
    editDailyReturn(ticker, dailyReturn);
  }, [dailyReturn]);

  useEffect(() => {
    editOverallReturn(ticker, overallReturn);
  }, [overallReturn]);

  const colorDailyPL = () => {
    if (dailyReturn > 0) return 'return-positive';
    else if (dailyReturn < 0) return 'return-negative';
    else return 'return-zero';
  }

  const colorOverallPL = () => {
    if (overallReturn > 0) return 'return-positive';
    else if (overallReturn < 0) return 'return-negative';
    else return 'return-zero';
  }

  const directToPositionDetailPage = () => {
    history.push(`/position/${defaultPortfolio}/${ticker}`);
  }

  return (
    <div className="stock-item" onClick={directToPositionDetailPage}>
      <div className="stock-item-info">
        <span className="stock-item-ticker">{ticker.toUpperCase()}</span>
        <span className="stock-item-name">{findCompanyNameByTicker(ticker)}</span>
      </div>
      <span className="stock-item-realtime">{stockPriceData.price}</span>
      <span className="stock-item-avgPrice">Cost: {avgCost}</span>
      <span className="stock-item-quantity">Quantity: {quantity}</span>
      {quantity > 0 && (
        <React.Fragment>
          <span className="stock-item-daily-pl">
            Daily: <span className={`stock-item-daily-pl ${colorDailyPL()}`}>
              {dailyReturn} ({dailyReturn > 0 && '+'}{stockPriceData.changePercent.toFixed(2)}%)</span>
          </span>
          <span className="stock-item-overall-pl">
            Overall: <span className={`stock-item-overall-pl ${colorOverallPL()}`}>
              {overallReturn} ({overallReturn > 0 && '+'}{overallReturnPercent}%)</span>
          </span>
        </React.Fragment>
      )}
    </div>
  )
}

StockItem.propTypes = {
  stock: PropTypes.object,
  ticker: PropTypes.string,
  avgCost: PropTypes.number,
  quantity: PropTypes.number,
  defaultPortfolio: PropTypes.number,
  totalDailyPL: PropTypes.number,
  totalOverallPL: PropTypes.number,
  setTotalDailyPL: PropTypes.func,
  setTotalOverallPL: PropTypes.func,
  editDailyReturn: PropTypes.func,
  editOverallReturn: PropTypes.func
};

const mapStateToProps = (state) => ({
  stock: state.stock,
  defaultPortfolio: state.portfolio.defaultPortfolio
});

export default connect(mapStateToProps, {
  editDailyReturn,
  editOverallReturn
})(StockItem);
