import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getRealTimePrice } from '../../utils/getRealTimePrice';
import { getClosePrice } from '../../utils/getClosePrice';

import {
  editDailyReturn,
  editOverallReturn
} from '../../actions/stockAction';

const GetStockPrice = ({
  ticker,
  avgCost,
  quantity,
  stock,
  editDailyReturn,
  editOverallReturn
}) => {
  const [isFirstRender, setIsFirstRender] = useState(true);
  const [stockPriceData, setStockPriceData] = useState({
    price: 0,
    change: 0,
    changePercent: 0
  });
  const [dailyReturn, setDailyReturn] = useState(0);
  const [overallReturn, setOverallReturn] = useState(0);

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
    editDailyReturn(ticker, dailyReturn);
  }, [dailyReturn]);

  useEffect(() => {
    editOverallReturn(ticker, overallReturn);
  }, [overallReturn]);

  return (null);
}

GetStockPrice.propTypes = {
  stock: PropTypes.object,
  editDailyReturn: PropTypes.func,
  editOverallReturn: PropTypes.func
};

const mapStateToProps = (state) => ({
  stock: state.stock
});

export default connect(mapStateToProps, {
  editDailyReturn,
  editOverallReturn
})(GetStockPrice);
