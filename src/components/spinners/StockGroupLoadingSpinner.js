import React from 'react';

const StockGroupLoadingSpinner = () => {
  return (
    <div className="stock-loading-spinner-wrapper">
      <svg
        className="stock-loading-spinner"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid">
        <circle cx="40" cy="50" fill="#f09a9e" r="10">
          <animate attributeName="cx" repeatCount="indefinite" dur="1s" keyTimes="0;0.5;1" values="40;60;40" begin="-0.5s" />
        </circle>
        <circle cx="60" cy="50" fill="#7eccb2" r="10">
          <animate attributeName="cx" repeatCount="indefinite" dur="1s" keyTimes="0;0.5;1" values="40;60;40" begin="0s" />
        </circle>
        <circle cx="40" cy="50" fill="#f09a9e" r="10">
          <animate attributeName="cx" repeatCount="indefinite" dur="1s" keyTimes="0;0.5;1" values="40;60;40" begin="-0.5s" />
          <animate attributeName="fill-opacity" values="0;0;1;1" calcMode="discrete" keyTimes="0;0.499;0.5;1" dur="1s" repeatCount="indefinite" />
        </circle>
      </svg>
      <p className="stock-loading-progress">Loading...</p>
    </div>
  )
}

export default StockGroupLoadingSpinner;