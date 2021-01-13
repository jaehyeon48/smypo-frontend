import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Pie } from 'react-chartjs-2';
import 'chartjs-plugin-datalabels';

const ValuePieChart = ({
  stockList,
  stockListLength,
  stockLoading,
  totalCash
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
  const [chartFontSize, setChartFontSize] = useState(16);

  function getRandomColor(i) {
    const colors = ['#0DA886', '#4FDF5A', '#F5B428', '#F47B2E', '#EF4827', '#40C8CC', '#5E6F9E', '#C2596E', '#E9B07F', '#E2E678', '#EE636C'];
    if (i === 0) {
      return colors[0];
    }
    else {
      return colors[i % 11];
    }
  }

  // calculate font size based on viewport size
  useEffect(() => {
    const viewportWidth = window.innerWidth;

    if (viewportWidth >= 1460) {
      setChartFontSize(16);
    }
  }, []);

  // insert ticker into the chart's data label array
  useEffect(() => {
    if (!stockLoading && stockList && stockList.length > 0) {
      let newTickerLabels = [];
      if (totalCash > 0) {
        newTickerLabels.push('CASH');
      }
      stockList.forEach(stock => {
        if (stock.quantity > 0) {
          newTickerLabels.push(stock.ticker.toUpperCase());
        }
      });
      setTickerLabels(newTickerLabels);
    }
  }, [stockList]);


  // initialize chart data labels, background colors and border colors
  useEffect(() => {
    let newColors = [];
    if (tickerLabels.length > 0) {
      for (let i = 0; i < tickerLabels.length; i++) {
        newColors.push(getRandomColor(i));
      }
      setChartData({
        labels: [...tickerLabels],
        datasets: [{
          data: [...chartData.datasets[0].data],
          backgroundColor: newColors,
          borderColor: '#e8f0fe',
          borderWidth: 1
        }]
      });
    }
  }, [tickerLabels]);

  // calculate each stock's (and cash) value
  useEffect(() => {
    if (stockList.length === stockListLength) {
      // filter stock items with quantity is 0
      const filteredStockList = stockList.filter((stock) => stock.quantity > 0);
      let newChartData;
      if (totalCash > 0) {
        newChartData = new Array(filteredStockList.length + 1); // add 1 for cash
        // cash always comes at the first position
        newChartData.splice(0, 1, totalCash);
        filteredStockList.forEach((stock, index) => {
          if (stock.overallReturn !== null && stock.quantity > 0) {
            const overallReturn = parseFloat((stock.avgCost * stock.quantity + stock.overallReturn).toFixed(2));
            if (overallReturn > 0) {
              newChartData.splice(index + 1, 1, overallReturn);
            }
          }
        });
      }
      else {
        newChartData = new Array(filteredStockList.length);
        filteredStockList.forEach((stock, index) => {
          if (stock.overallReturn !== null && stock.quantity > 0) {
            const overallReturn = parseFloat((stock.avgCost * stock.quantity + stock.overallReturn).toFixed(2));
            if (overallReturn > 0) {
              newChartData.splice(index, 1, overallReturn);
            }
          }
        });
      }
      setStockValueData(newChartData);
    }
  }, [stockList, totalCash]);

  // initialize stock's returns into chart data
  useEffect(() => {
    if (stockValueData.length > 0 && chartData.labels.length > 0) {
      let newColors = [];
      for (let i = 0; i < tickerLabels.length; i++) {
        newColors.push(getRandomColor(i));
      }
      setChartData({
        labels: [...tickerLabels],
        datasets: [{
          data: [...stockValueData],
          backgroundColor: newColors,
          borderColor: '#e8f0fe',
          borderWidth: 1
        }]
      });
    }
  }, [stockValueData]);

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
      <h1>Distribution By Value</h1>
      <div className="chart-content">
        <div className="pie-chart-legend">
          {shouldRenderChart && chartLegends && chartLegends.length > 0 && (
            chartLegends.map((legendData) => (
              <div className="pie-chart-legend-item">
                <div
                  className="pie-chart-legend-color"
                  style={{ backgroundColor: `${getRandomColor(legendData.index)}` }}
                ></div>
                <div className="pie-chart-legend-content">
                  <span className={legendData.ticker === 'CASH' ? 'chart-legend-cash' : null}>{legendData.ticker}</span>
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

ValuePieChart.propTypes = {
  stockList: PropTypes.array,
  totalCash: PropTypes.number,
  stockLoading: PropTypes.bool
};

const mapStateToProps = (state) => ({
  stockList: state.stock.stockList,
  stockLoading: state.stock.stockLoading,
  totalCash: state.cash.totalCash
});

export default connect(mapStateToProps)(ValuePieChart);
