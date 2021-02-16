import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Spinner from '../spinner/Spinner';
import CurrentPortfolioName from '../portfolio/CurrentPortfolioName';
import RealizedStockItem from './RealizedStockItem';
import {
  getRealizedStocks
} from '../../actions/stockAction';

const RealizedStocks = ({
  portfolio,
  getRealizedStocks,
  realizedStocks
}) => {
  const [totalRealizedReturn, setTotalRealizedReturn] = useState(0);

  useEffect(() => {
    if (portfolio && portfolio.defaultPortfolio) {
      getRealizedStocks(portfolio.defaultPortfolio);
    }
  }, [portfolio, getRealizedStocks]);

  const colorTotalRealizedReturn = () => {
    if (totalRealizedReturn > 0) return 'return-positive';
    else if (totalRealizedReturn < 0) return 'return-negative';
    else return 'return-zero';
  }

  const borderColorTotalRealizedReturn = () => {
    if (totalRealizedReturn > 0) return 'total-return-positive--border';
    else if (totalRealizedReturn < 0) return 'total-return-negative--border';
    else return 'total-return-zero--border';
  }

  return (
    <main className="realized-stock-main">
      <CurrentPortfolioName />
      {true ? (
        <React.Fragment>
          <div className={`total-realized-value ${borderColorTotalRealizedReturn()}`}>
            <span>Total Realized Value</span>
            <div>
              <span className={colorTotalRealizedReturn()}>
                {totalRealizedReturn.toFixed(2)}
              </span>
            </div>
          </div>
          <div className="realized-stocks-container">
            <header className="realized-stocks__header">
              Realized Stocks
        </header>
            <div className="realized-stocks-table-wrapper">
              {realizedStocks && realizedStocks.length > 0 ? (
                <table className="realized-stocks-table">
                  <thead>
                    <tr>
                      <th className="realized-stock-item__ticker-header">Ticker</th>
                      <th className="realized-stock-item__price-header">Price</th>
                      <th className="realized-stock-item__shares-header">Shares</th>
                      <th className="realized-stock-item__return-header">Return</th>
                    </tr>
                  </thead>
                  <tbody>
                    {realizedStocks.map(realizedOne => (
                      <RealizedStockItem
                        key={realizedOne.stockId}
                        realizedStockItem={realizedOne}
                        setTotalRealizedReturn={setTotalRealizedReturn}
                      />
                    ))}
                  </tbody>
                </table>
              ) : (
                  <div className="notice-no-realized-stocks">
                    <p>You haven't realized any stocks.</p>
                  </div>
                )}
            </div>
          </div>
        </React.Fragment>
      ) : (
          <Spinner />
        )}
    </main>
  );
}

RealizedStocks.propTypes = {
  getRealizedStocks: PropTypes.func,
  getDefaultPortfolio: PropTypes.func,
  realizedStocks: PropTypes.array,
};

const mapStateToProps = (state) => ({
  portfolio: state.portfolio,
  realizedStocks: state.stock.realizedStocks,
});

export default connect(mapStateToProps, {
  getRealizedStocks,
})(RealizedStocks);
