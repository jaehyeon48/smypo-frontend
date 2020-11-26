import axios from 'axios';
import SERVER_URL from '../actions/serverURL';

export const sortStocks = async (stocksList) => {
  let organizedShares = [];
  const groupedStocks = groupStocksByTickerName(stocksList);
  for (let [ticker, value] of Object.entries(groupedStocks)) {
    organizedShares.push(await organizeGroupedStocks(ticker, value));
  }
  return organizedShares;
}

const groupStocksByTickerName = (stocks) => {
  const stockGroup = {}
  const tickers = [];
  stocks.forEach(share => {
    const tickerOfShare = share.ticker.toLowerCase();
    const isTickerExist = tickers.findIndex(ticker => ticker === tickerOfShare);
    if (isTickerExist === -1) tickers.push(tickerOfShare);
  });

  tickers.forEach(ticker => {
    stockGroup[ticker] = [];
  });

  stocks.forEach(share => {
    stockGroup[share.ticker.toLowerCase()].push(share);
  });

  return stockGroup;
};

const organizeGroupedStocks = async (ticker, shareInfo) => {
  shareInfo.sort((a, b) => (a.transactionType < b.transactionType) ? 1 : ((b.transactionType < a.transactionType) ? -1 : 0));
  const share = {};
  let totalCost = 0;
  let totalQty = 0;
  share.ticker = ticker;

  let sellQty = 0;
  shareInfo.forEach(share => {
    if (share.transactionType === 'sell') {
      sellQty += share.quantity;
    }
    else if (share.transactionType === 'buy') {
      const shareQty = share.quantity - sellQty;
      if (shareQty > 0) {
        totalCost += share.price * shareQty;
        totalQty += shareQty;
        sellQty = 0;
      } else if (shareQty < 0) {
        sellQty = -shareQty;
      } else {
        sellQty = 0;
      }
    }
  });

  share.avgCost = totalQty > 0 ? parseFloat((totalCost / totalQty).toFixed(2)) : 0;
  share.quantity = (totalQty <= 0 ? 0 : totalQty);

  share.dailyReturn = null;
  share.overallReturn = null;
  share.sector = await getSectorInfo(share.ticker);
  return share;
}

const getSectorInfo = async (ticker) => {
  const config = { withCredentials: true };

  try {
    const response = await axios.get(`${SERVER_URL}/api/stock/sector/${ticker}`, config);

    return response.data;
  } catch (error) {
    console.error(error);
  }
}