import stockList from '../stockList/stockList';

export const findCompanyNameByTicker = (ticker) => {
  const matchResult = stockList.filter(stock => stock.ticker.toLowerCase() === ticker.toLowerCase());

  if (matchResult.length === 0) return -1;
  return matchResult[0].name;
}