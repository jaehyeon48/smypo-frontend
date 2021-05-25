import React from 'react';
import { connect } from 'react-redux';

const MarketStatusIndicator = ({ stock }) => {
  return (
    <div className="market-status-indicator">
      {stock.isMarketOpen ? (
        <div className="market-status--opened">
          <svg height="10" width="10">
            <circle cx="5" cy="5" r="4" />
          </svg>
        Market is opened.
        </div>
      ) : (
        <div className="market-status--closed">
          <svg height="10" width="10">
            <circle cx="5" cy="5" r="4" fill="#acacac" />
          </svg>
        Market is closed.
        </div>
      )}
    </div>
  );
}

const mapStateToProps = (state) => ({
  stock: state.stock
});

export default connect(mapStateToProps)(MarketStatusIndicator);
