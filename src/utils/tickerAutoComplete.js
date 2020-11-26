import stockList from '../stockList/stockList';

export default function tickerAutoComplete(ticker) {
  const tickerLength = ticker.length;

  /* Search By Company Name */
  let matchedStocksByName = [];
  stockList.forEach(stock => {
    if (stock.name.substring(0, tickerLength).toUpperCase() === ticker.toUpperCase()) {
      matchedStocksByName.push(stock);
    }
  });

  /* Search By Ticker */
  let matchedStocksByTicker = [];
  stockList.forEach(stock => {
    if (stock.ticker.slice(0, tickerLength) === ticker.toUpperCase()) {
      matchedStocksByTicker.push(stock);
    }
  });

  // remove duplicates
  const result = [...matchedStocksByTicker, ...matchedStocksByName];
  return result.filter((stock, index) => result.indexOf(stock) === index);
}