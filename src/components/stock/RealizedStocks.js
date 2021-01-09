import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Spinner from '../spinner/Spinner';
import DollarSignIcon from '../icons/DollarSignIcon';
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

  useEffect(() => {
    if (defaultPortfolio === null) {
      getDefaultPortfolio();
    }
  }, []);

  useEffect(() => {
    resetRealizeStockLoading();
    getRealizedStocks(defaultPortfolio);
  }, [defaultPortfolio]);

  const colorTotalRealizedReturn = () => {
    if (totalRealizedReturn > 0) return 'return-positive';
    else if (totalRealizedReturn < 0) return 'return-negative';
    else return 'return-zero';
  }

  return (
    <React.Fragment>
      {!realizedStockLoading ? (
        <React.Fragment>
        <div className="total-realized-value">
        <span>Total Realized Value</span>
        <span className={colorTotalRealizedReturn()}><DollarSignIcon/>{totalRealizedReturn.toFixed(2)}</span>
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
    </React.Fragment>
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
