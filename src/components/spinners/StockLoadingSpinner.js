import React from 'react';


const StockLoadingSpinner = ({ loadingProgress }) => {
  return (
    <div className="stock-loading-spinner-wrapper">
      <svg
        className="stock-loading-spinner"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid">
        <circle cx="50" cy="50" r="0" fill="none" stroke="#50a4b3" strokeWidth="5">
          <animate attributeName="r" repeatCount="indefinite" dur="1.4925373134328357s" values="0;40" keyTimes="0;1" keySplines="0 0.2 0.8 1" calcMode="spline" begin="-0.7462686567164178s" />
          <animate attributeName="opacity" repeatCount="indefinite" dur="1.4925373134328357s" values="1;0" keyTimes="0;1" keySplines="0.2 0 0.8 1" calcMode="spline" begin="-0.7462686567164178s" />
        </circle>
        <circle cx="50" cy="50" r="0" fill="none" stroke="#f29494" strokeWidth="5">
          <animate attributeName="r" repeatCount="indefinite" dur="1.4925373134328357s" values="0;40" keyTimes="0;1" keySplines="0 0.2 0.8 1" calcMode="spline" />
          <animate attributeName="opacity" repeatCount="indefinite" dur="1.4925373134328357s" values="1;0" keyTimes="0;1" keySplines="0.2 0 0.8 1" calcMode="spline" />
        </circle>
      </svg>
      <p className="stock-loading-progress">Loading stock list... {loadingProgress}%</p>
    </div>
  )
}

export default StockLoadingSpinner;