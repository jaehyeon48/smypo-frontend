import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { findCompanyNameByTicker } from '../../utils/findNameByTicker';

const HeldStockItem = ({
  ticker,
  price,
  change,
  overallReturnData,
  defaultPortfolio,
}) => {
  const colorPL = (value) => {
    if (value > 0) return 'stock-item--return-positive';
    else if (value < 0) return 'stock-item--return-negative';
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
      <td className="stock-item__realtime">
        {price}
      </td>
      <td className="stock-item__change">
          {change}
      </td>
      <td className="stock-item__tgain">
        <span className={colorPL(overallReturnData[0])}>
          {overallReturnData[0]} &#40;{overallReturnData[0] > 0 && '+'}{overallReturnData[1]}%&#41;
          </span>
      </td>
    </tr>
  )
}

const mapStateToProps = (state) => ({
  portfolio: state.portfolio
});

export default connect(mapStateToProps)(HeldStockItem);
