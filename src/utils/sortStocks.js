import axios from 'axios';

export const sortStocks = async (stocksList) => {
  if (stocksList && stocksList.length === 0) return {};
  let organizedShares = {};
  const groupedStocks = groupStocksByTickerName(stocksList);
  for (let [ticker, value] of Object.entries(groupedStocks)) {
    organizedShares[ticker] = await organizeGroupedStocks(ticker, value);
  }
  return organizedShares;
}

// ticker별로 stock grouping하여 각각의 stock데이터 저장
const groupStocksByTickerName = (stocks) => {
  const stockGroup = {}
  stocks.forEach(stockData => {
    const ticker = stockData.ticker.toLowerCase();
    if (ticker in stockGroup) {
      stockGroup[ticker].push(stockData);
    } else {
      stockGroup[ticker] = [stockData];
    }
  });
  return stockGroup;
};

// 각 종목별 평균 매수가, 보유량 등을 계산
const organizeGroupedStocks = async (ticker, stockData) => {
  const share = {};
  let totalCost = 0;
  let totalQty = 0;
  share.ticker = ticker;

  let sellQty = 0;
  stockData.forEach(share => {
    if (share.transactionType === 'sell') {
      sellQty += share.quantity;
    } else { // share.transactionType === 'buy'
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
  try {
    const response = await axios.get(`https://cloud.iexapis.com/stable/stock/${ticker}/company?token=${process.env.REACT_APP_IEX_API_KEY}`);

    return response.data.sector;
  } catch (error) {
    console.error(error);
  }
}