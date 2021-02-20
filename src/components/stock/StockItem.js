import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { findCompanyNameByTicker } from '../../utils/findNameByTicker';

const StockItem = ({
  ticker,
  price,
  change,
  avgCost,
  quantity,
  dailyReturn,
  overallReturn,
  defaultPortfolio,
}) => {
  const [dailyReturnPercent, setDailyReturnPercent] = useState(0);
  const [overallReturnPercent, setOverallReturnPercent] = useState(0);

  useEffect(() => {
    setDailyReturnPercent(parseFloat((change / price) * 100).toFixed(2));
  }, [dailyReturn, change, price]);

  useEffect(() => {
    setOverallReturnPercent(parseFloat((overallReturn / (avgCost * quantity) * 100).toFixed(2)));
  }, [overallReturn, avgCost, quantity]);

  const colorDailyPL = () => {
    if (dailyReturn > 0) return 'stock-item--return-positive';
    else if (dailyReturn < 0) return 'stock-item--return-negative';
    else return 'stock-item--return-zero';
  }

  const colorOverallPL = () => {
    if (overallReturn > 0) return 'stock-item--return-positive';
    else if (overallReturn < 0) return 'stock-item--return-negative';
    else return 'stock-item--return-zero';
  }

  return (
    <tr className="stock-item">
      <td className="stock-item__ticker">
        <Link
          to={`/position/${defaultPortfolio}/${ticker}`}
          title={findCompanyNameByTicker(ticker)}>
          {ticker.toUpperCase()}
        </Link>
      </td>
      <td className={`stock-item__realtime ${colorDailyPL()}`}>
        {price}
      </td>
      <td className="stock-item__change">
        <span className={colorDailyPL()}>
          {change}
        </span>
      </td>
      <td className="stock-item__cost">{avgCost}</td>
      <td className="stock-item__shares">{quantity}</td>
      <td className="stock-item__mv">{(price * quantity).toFixed(2)}</td>
      <td className="stock-item__dgain">
        {quantity > 0 ? (
          <span className={colorDailyPL()}>
            {dailyReturn} &#40;{dailyReturn > 0 && '+'}{dailyReturnPercent}%&#41;
          </span>
        ) : 0}
      </td>
      <td className="stock-item__tgain">
        {quantity ? (
          <span className={colorOverallPL()}>
            {overallReturn} &#40;{overallReturn > 0 && '+'}{overallReturnPercent}%&#41;
          </span>
        ) : 0}
      </td>
    </tr>
  )
}

StockItem.propTypes = {
  ticker: PropTypes.string,
  avgCost: PropTypes.number,
  quantity: PropTypes.number,
  defaultPortfolio: PropTypes.number,
  totalDailyPL: PropTypes.number,
  totalOverallPL: PropTypes.number,
  setTotalDailyPL: PropTypes.func,
  setTotalOverallPL: PropTypes.func,
};

const mapStateToProps = (state) => ({
  stock: state.stock
});

export default connect(mapStateToProps)(StockItem);
