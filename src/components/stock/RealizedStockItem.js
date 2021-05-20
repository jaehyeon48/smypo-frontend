import React from 'react';

const RealizedStockItem = ({
  realizedStockItem
}) => {
  const realizedReturn = ((realizedStockItem.price - realizedStockItem.avgCost) * realizedStockItem.quantity).toFixed(2);


  const colorRealizedReturn = () => {
    if (realizedReturn > 0) return 'stock-item--return-positive';
    else if (realizedReturn < 0) return 'stock-item--return-negative';
    else return 'stock-item--return-zero';
  }

  return (
    <tr className="realized-stock-item">
      <td className="realized-stock-item__ticker">
        {realizedStockItem.ticker}
      </td>
      <td className="realized-stock-item__price">
        <span>{realizedStockItem.price}</span>
      </td>
      <td className="realized-stock-item__quantity">
        <span></span>{realizedStockItem.quantity}
      </td>
      <td className={"realized-stock-item__return"}>
        <span className={colorRealizedReturn()}>
          {realizedReturn}
        </span>
      </td>
    </tr>
  );
}

export default RealizedStockItem;
