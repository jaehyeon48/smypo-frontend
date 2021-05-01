import React from 'react';
import { connect } from 'react-redux';

const PortfolioDataSpinner = ({ stock }) => {
  return (
    <div className="portfolio-data-loading-spinner-wrapper">
      <svg
        className="portfolio-data-loading-spinner"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid">
        <g transform="translate(50 50)">
          <g transform="translate(-19 -19) scale(0.6)">
            <g>
              <animateTransform attributeName="transform" type="rotate" values="0;45" keyTimes="0;1" dur="0.2857142857142857s" begin="0s" repeatCount="indefinite" /><path d="M30.640212625636092 20.740717689024425 L37.71128043750157 27.8117855008899 L27.8117855008899 37.711280437501564 L20.740717689024425 30.64021262563609 A37 37 0 0 1 7.000000000000006 36.3318042491699 L7.000000000000006 36.3318042491699 L7.000000000000007 46.3318042491699 L-7.000000000000002 46.3318042491699 L-7.000000000000003 36.3318042491699 A37 37 0 0 1 -20.740717689024418 30.640212625636092 L-20.740717689024418 30.640212625636092 L-27.811785500889894 37.71128043750157 L-37.711280437501564 27.811785500889904 L-30.64021262563609 20.740717689024425 A37 37 0 0 1 -36.3318042491699 7.000000000000009 L-36.3318042491699 7.000000000000009 L-46.3318042491699 7.00000000000001 L-46.3318042491699 -6.999999999999999 L-36.3318042491699 -7 A37 37 0 0 1 -30.6402126256361 -20.740717689024418 L-30.6402126256361 -20.740717689024418 L-37.71128043750158 -27.81178550088989 L-27.811785500889904 -37.711280437501564 L-20.740717689024425 -30.64021262563609 A37 37 0 0 1 -7.000000000000011 -36.3318042491699 L-7.000000000000011 -36.3318042491699 L-7.000000000000012 -46.3318042491699 L6.999999999999996 -46.3318042491699 L6.999999999999997 -36.3318042491699 A37 37 0 0 1 20.740717689024414 -30.6402126256361 L20.740717689024414 -30.6402126256361 L27.81178550088989 -37.71128043750158 L37.711280437501564 -27.811785500889908 L30.64021262563609 -20.74071768902443 A37 37 0 0 1 36.3318042491699 -7.000000000000013 L36.3318042491699 -7.000000000000013 L46.3318042491699 -7.000000000000016 L46.3318042491699 6.999999999999993 L36.3318042491699 6.999999999999996 A37 37 0 0 1 30.6402126256361 20.740717689024414 M0 -23A23 23 0 1 0 0 23 A23 23 0 1 0 0 -23" fill="#1d3f72" />
            </g>
          </g>
          <g transform="translate(19 19) scale(0.6)">
            <g>
              <animateTransform attributeName="transform" type="rotate" values="45;0" keyTimes="0;1" dur="0.2857142857142857s" begin="-0.14285714285714285s" repeatCount="indefinite" />
              <path d="M-30.6402126256361 -20.740717689024418 L-37.71128043750158 -27.81178550088989 L-27.811785500889904 -37.711280437501564 L-20.740717689024425 -30.64021262563609 A37 37 0 0 1 -7.000000000000011 -36.3318042491699 L-7.000000000000011 -36.3318042491699 L-7.000000000000012 -46.3318042491699 L6.999999999999996 -46.3318042491699 L6.999999999999997 -36.3318042491699 A37 37 0 0 1 20.740717689024414 -30.6402126256361 L20.740717689024414 -30.6402126256361 L27.81178550088989 -37.71128043750158 L37.711280437501564 -27.811785500889908 L30.64021262563609 -20.74071768902443 A37 37 0 0 1 36.3318042491699 -7.000000000000013 L36.3318042491699 -7.000000000000013 L46.3318042491699 -7.000000000000016 L46.3318042491699 6.999999999999993 L36.3318042491699 6.999999999999996 A37 37 0 0 1 30.6402126256361 20.740717689024414 L30.6402126256361 20.740717689024414 L37.71128043750158 27.81178550088989 L27.811785500889908 37.711280437501564 L20.74071768902443 30.64021262563609 A37 37 0 0 1 7.000000000000016 36.3318042491699 L7.000000000000016 36.3318042491699 L7.000000000000024 46.3318042491699 L-6.999999999999953 46.331804249169906 L-6.999999999999961 36.331804249169906 A37 37 0 0 1 -20.74071768902441 30.640212625636103 L-20.74071768902441 30.640212625636103 L-27.811785500889876 37.711280437501586 L-37.711280437501514 27.81178550088997 L-30.64021262563605 20.74071768902449 A37 37 0 0 1 -36.331804249169906 6.999999999999985 L-36.331804249169906 6.999999999999985 L-46.331804249169906 6.9999999999999885 L-46.331804249169906 -6.999999999999955 L-36.331804249169906 -6.999999999999958 A37 37 0 0 1 -30.640212625636064 -20.740717689024464 M0 -23A23 23 0 1 0 0 23 A23 23 0 1 0 0 -23" fill="#5699d2" />
            </g>
          </g>
        </g>
      </svg>
      <p className="portfolio-data-loading-progress">
        {stock.calcProgress > 0 ?
          `Loading stock data... ${stock.calcProgress}%` :
          'preparing stock data...'
        }
      </p>
    </div>
  )
}

const mapStateToProps = (state) => ({
  stock: state.stock
});

export default connect(mapStateToProps)(PortfolioDataSpinner);



