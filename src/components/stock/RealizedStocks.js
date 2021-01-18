import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import axios from 'axios';

import Spinner from '../spinner/Spinner';
import RealizedStockItem from './RealizedStockItem';
import { getDefaultPortfolio } from '../../actions/portfolioAction';
import {
  resetRealizeStockLoading,
  getRealizedStocks
} from '../../actions/stockAction';

const RealizedStocks = ({
  defaultPortfolio,
  getDefaultPortfolio,
  getRealizedStocks,
  realizedStocks,
  realizedStockLoading
}) => {
  const [totalRealizedReturn, setTotalRealizedReturn] = useState(0);
  const [currentPortfolioName, setCurrentPortfolioName] = useState('');

  useEffect(() => {
    if (defaultPortfolio === null) {
      getDefaultPortfolio();
    }
  }, []);

  useEffect(() => {
    if (defaultPortfolio) {
      (async () => {
        try {
          const res = await axios.get(`${process.env.REACT_APP_SERVER_URL}/portfolio/default/name/${defaultPortfolio}`);
          setCurrentPortfolioName(res.data.name);
        } catch (error) {
          console.error(error);
        }
      })();
    }
  }, [defaultPortfolio]);

  useEffect(() => {
    resetRealizeStockLoading();
    getRealizedStocks(defaultPortfolio);
  }, [defaultPortfolio]);

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
    {defaultPortfolio && (
      <div className="current-portfolio">
        <span>Current Portfolio: </span>
        <span>{currentPortfolioName}</span>
      </div>
    )}
      {!realizedStockLoading ? (
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
          {realizedStocks && realizedStocks.length > 0 ? (
        <React.Fragment>
          {realizedStocks.map(realizedOne => (
            <RealizedStockItem
              key={realizedOne.stockId}
              realizedStockItem={realizedOne}
              setTotalRealizedReturn={setTotalRealizedReturn}
            />
          ))}
        </React.Fragment>
      ) : (
          <div className="notice-no-realized-stocks">You haven't realized any stocks.</div>
        )}
    </div>
        </React.Fragment>
      ) : (
        <Spinner/>
      )}
    </main>
  );
}

RealizedStocks.propTypes = {
  defaultPortfolio: PropTypes.number,
  getRealizedStocks: PropTypes.func,
  getDefaultPortfolio: PropTypes.func,
  realizedStocks: PropTypes.array,
  realizedStockLoading: PropTypes.bool
};

const mapStateToProps = (state) => ({
  defaultPortfolio: state.portfolio.defaultPortfolio,
  realizedStocks: state.stock.realizedStocks,
  realizedStockLoading: state.stock.realizedStockLoading
});

export default connect(mapStateToProps, {
  resetRealizeStockLoading,
  getRealizedStocks,
  getDefaultPortfolio
})(RealizedStocks);
