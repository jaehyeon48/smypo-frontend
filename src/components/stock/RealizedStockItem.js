import React, { useState, useEffect } from 'react';

import DollarSignIcon from '../icons/DollarSignIcon';

const RealizedStockItem = ({
  realizedStockItem,
  setTotalRealizedReturn
}) => {
  const [realizedReturn, setRealizedReturn] = useState(parseFloat(((realizedStockItem.price - realizedStockItem.avgCost) * realizedStockItem.quantity).toFixed(2)));

  useEffect(() => { setTotalRealizedReturn(prev => prev + realizedReturn) }, [realizedReturn]);

  const colorRealizedReturn = () => {
    if (realizedReturn > 0) return 'return-positive';
    else if (realizedReturn < 0) return 'return-negative';
    else return 'return-zero';
  }

  return (
    <div className="realized-stock-item">
      <div className="realized-stock-ticker">
        {realizedStockItem.ticker}
      </div>
      <div className="realized-stock-price">
        <span>Price: </span><DollarSignIcon />{realizedStockItem.price}
      </div>
      <div className="realized-stock-quantity">
        <span>Quantity: </span>{realizedStockItem.quantity}
      </div>
      <div className={`realized-stock-return ${colorRealizedReturn()}`}>
        <span>Return: <DollarSignIcon /></span>{realizedReturn}
      </div>
    </div>
  );
}

RealizedStockItem.propTypes = {

};

export default RealizedStockItem;
