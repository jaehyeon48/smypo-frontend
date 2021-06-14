import React, { useEffect, useRef } from 'react';

const Test = () => {

  useEffect(() => {
    new window.TradingView.widget({
      "width": 980,
      "height": 610,
      "symbol": "AAPL",
      "interval": "D",
      "timezone": "Etc/UTC",
      "theme": "light",
      "style": "1",
      "locale": "en",
      "toolbar_bg": "#f1f3f6",
      "enable_publishing": false,
      "allow_symbol_change": true,
      "container_id": "tv-widget-container"
    });
  }, []);

  return (
    <div>
      <div id="tv-widget-container"></div>
    </div>
  );
}

export default Test;