import React, { useEffect } from 'react';
import TradingViewWidget from 'react-tradingview-widget';

const Test = () => {

  return (
    <div>
      <div className="tradingview-widget-container">
        <TradingViewWidget symbol="JPM" timezone="Asia/Seoul" />
      </div>
    </div>
  );
}

export default Test;
