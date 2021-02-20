import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Pie } from 'react-chartjs-2';
import 'chartjs-plugin-datalabels';

import PieChartIcon from '../icons/PieChartIcon';
import CashCoinIcon from '../icons/CashCoinIcon';

const ValuePieChart = ({
  stock,
  cash
}) => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [{
      data: [],
      backgroundColor: [],
      borderColor: '#e8f0fe',
      borderWidth: 1
    }]
  });
  const [tickerLabels, setTickerLabels] = useState([]);
  const [stockValueData, setStockValueData] = useState([]);
  const [shouldRenderChart, setShouldRenderChart] = useState(false);
  const [chartLegends, setChartLegends] = useState([]);
  // const [chartFontSize, setChartFontSize] = useState(16);

  function getRandomColor(i) {
    const colors = ['#F0564E', '#F49B50', '#32C08C', '#5BAEDC', '#855AE9', '#E955AA', '#F2C650', '#1DBE50', '#3489D6', '#C244E1', '#e2ea49'];
    if (i === 0) {
      return colors[0];
    }
    else {
      return colors[i % 11];
    }
  }

  // calculate font size based on viewport size
  // useEffect(() => {
  //   const viewportWidth = window.innerWidth;

  //   if (viewportWidth >= 1460) {
  //     setChartFontSize(16);
  //   }
  // }, []);

  // insert ticker into the chart's data label array
  useEffect(() => {
    if (Object.keys(stock.stockList).length > 0) {
      let newTickerLabels = [];
      if (cash.totalCash > 0) {
        newTickerLabels.push('cash');
      }
      for (const stockItem of Object.values(stock.stockList)) {
        if (stockItem.quantity > 0) {
          newTickerLabels.push(stockItem.ticker.toUpperCase());
        }
      }
      setTickerLabels(newTickerLabels);
    }
  }, [stock.stockList, cash.totalCash]);

  // calculate each stock's (and cash) value
  useEffect(() => {
    if (Object.keys(stock.stockList).length > 0) {
      let filteredStockList = {};
      for (const [ticker, stockItem] of Object.entries(stock.stockList)) {
        if (stockItem.quantity > 0) {
          filteredStockList[ticker] = stockItem;
        }
      }
      let newChartData = [];
      // cash always comes at the first position
      if (cash.totalCash > 0) {
        newChartData.push(cash.totalCash);
      }
      for (const stockItem of Object.values(stock.stockList)) {
        if (stockItem.overallReturn !== null && stockItem.quantity > 0) {
          const overallReturn = parseFloat((stockItem.avgCost * stockItem.quantity + stockItem.overallReturn)
            .toFixed(2));
          if (overallReturn > 0) {
            newChartData.push(overallReturn);
          }
        }
      }
      setStockValueData(newChartData);
    }
  }, [stock.stockList, cash.totalCash]);

  // initialize stock's returns into chart data
  useEffect(() => {
    if (stockValueData.length > 0 && tickerLabels.length > 0) {
      let newColors = [];
      for (let i = 0; i < tickerLabels.length; i++) {
        if (tickerLabels[i] === 'cash') {
          newColors.push('#f7bd26');
        } else {
          newColors.push(getRandomColor(i));
        }
      }
      setChartData((prevState) => ({
        ...prevState,
        labels: [...tickerLabels],
        datasets: [{
          data: [...stockValueData],
          backgroundColor: [...newColors],
          borderColor: '#e8f0fe',
          borderWidth: 1
        }]
      }));
    }
  }, [stockValueData, tickerLabels]);

  // make legend
  useEffect(() => {
    if (stockValueData && tickerLabels &&
      stockValueData.length > 0 && tickerLabels.length > 0 &&
      stockValueData.length === tickerLabels.length) {
      const totalValue = stockValueData.reduce((accumulator, curVal) => accumulator + curVal, 0);
      const legendData = [];
      for (let i = 0; i < stockValueData.length; ++i) {
        if (stockValueData[i]) {
          legendData.push({
            weight: stockValueData[i] / totalValue * 100,
            ticker: tickerLabels[i],
            index: i
          });
        }
      }
      legendData.sort((a, b) => b.weight - a.weight);
      setChartLegends(legendData);
    }
  }, [stockValueData, tickerLabels]);

  useEffect(() => {
    if (chartData.labels.length > 0) {
      setShouldRenderChart(true);
    }
    else {
      setShouldRenderChart(false);
    }
  }, [chartData.labels.length]);

  const chartOptions = {
    maintainAspectRatio: false,
    legend: { display: false },
    layout: {
      padding: {
        top: 30,
        bottom: 30,
        left: 30,
        right: 30
      }
    },
    plugins: {
      datalabels: {
        font: { size: 0 }
      }
    }
  }

  return (
    <div className="chart-container value-pie-chart">
      <div className="pie-chart-icon">
        <PieChartIcon />
      </div>
      <h1>Distribution By Value</h1>
      <div className="chart-content">
        <div className="pie-chart-legend">
          {shouldRenderChart && chartLegends && chartLegends.length > 0 && (
            chartLegends.map((legendData) => (
              <div
                key={legendData.index}
                className="pie-chart-legend-item"
              >
                <div
                  className="pie-chart-legend-color"
                  style={{
                    backgroundColor: `${legendData.ticker === 'cash' ?
                      '#f7bd26' : getRandomColor(legendData.index)}`
                  }}
                ></div>
                <div className="pie-chart-legend-content">
                  <span className={
                    legendData.ticker === 'cash' ?
                      'pie-chart-legend__ticker chart-legend-cash' : 'pie-chart-legend__ticker'}>
                    {legendData.ticker === 'cash' ? (
                      <React.Fragment>
                        <CashCoinIcon />
                        cash
                      </React.Fragment>
                    ) : legendData.ticker}
                  </span>
                  <span>{legendData.weight.toFixed(2)}%</span>
                </div>
              </div>
            ))
          )}
        </div>
        {shouldRenderChart ? (
          <div className="chart-wrapper">
            <Pie
              data={chartData}
              options={chartOptions}
            />
          </div>
        ) : <div className="notice-chart-no-display">Nothing to display.</div>}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  stock: state.stock,
  cash: state.cash
});

export default connect(mapStateToProps)(ValuePieChart);
