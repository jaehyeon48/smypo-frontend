import React from 'react';



const StockLoadingSpinner = ({ loadingProgress }) => {
  return (
    <div className="stock-loading-spinner-wrapper">
      <svg
        className="stock-loading-spinner"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid">
        <defs>
          <clipPath id="ldio-zfjwhdnmap-cp" x="0" y="0" width="100" height="100">
            <rect x="0" y="0" width="0" height="100">
              <animate attributeName="width" repeatCount="indefinite" dur="1.1764705882352942s" values="0;100;100" keyTimes="0;0.5;1" />
              <animate attributeName="x" repeatCount="indefinite" dur="1.1764705882352942s" values="0;0;100" keyTimes="0;0.5;1" />
            </rect>
          </clipPath>
        </defs>
        <path fill="none" stroke="#b05252" strokeWidth="2.7928" d="M82 63H18c-7.2 0-13-5.8-13-13v0c0-7.2 5.8-13 13-13h64c7.2 0 13 5.8 13 13v0C95 57.2 89.2 63 82 63z" />
        <path fill="#72b3b1" clipPath="url(#ldio-zfjwhdnmap-cp)" d="M81.3 58.7H18.7c-4.8 0-8.7-3.9-8.7-8.7v0c0-4.8 3.9-8.7 8.7-8.7h62.7c4.8 0 8.7 3.9 8.7 8.7v0C90 54.8 86.1 58.7 81.3 58.7z" />
      </svg>
      <p className="stock-loading-progress">Loading stock list... {loadingProgress}%</p>
    </div>
  )
}

export default StockLoadingSpinner;