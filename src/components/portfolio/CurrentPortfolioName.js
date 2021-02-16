import React from 'react';
import { connect } from 'react-redux';

const CurrentPortfolioName = ({ portfolio }) => {
  return (
    <div className="current-portfolio">
      <span>Current Portfolio: </span>
      <span>{portfolio.defaultPortfolioName}</span>
    </div>
  )
}

const mapStateToProps = (state) => ({
  portfolio: state.portfolio
});

export default connect(mapStateToProps)(CurrentPortfolioName)
