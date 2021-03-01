import React, { useState, useEffect, useRef, useMemo } from 'react';
import { connect } from 'react-redux';
import * as d3 from 'd3';

import PieChartIcon from '../icons/PieChartIcon';

const Arc = ({
  renderingData,
  index,
  createArc,
  generateChartColor
}) => {
  const { data } = renderingData;

  return (
    <g className="arc">
      <path
        className="arc"
        d={createArc(renderingData)}
        fill={data.ticker === 'cash' ? '#f7bd26' : generateChartColor(index)} />
    </g>
  );
}

const ChartLabel = ({
  renderingData,
  outerRadius
}) => {
  const { data, startAngle, endAngle } = renderingData;
  const { cos, sin, PI } = Math;
  let r = outerRadius / 2 + outerRadius * 0.26;
  let a = (startAngle + endAngle) / 2 - PI / 2;
  const translateX = cos(a) * r;
  const translateY = sin(a) * r;
  return (
    <React.Fragment>
      <text
        className="chart-text-ticker"
        transform={`translate(${translateX} ${translateY})`}
        textAnchor="middle"
        alignmentBaseline="middle"
      >
        {data.ticker}
      </text>
      <text
        id={`chart-text-ratio-${data.ticker}`}
        className="chart-text-ratio"
        textAnchor="middle"
        alignmentBaseline="middle"
        transform={`translate(${translateX} ${translateY + 15})`}
      >
        {data.ratio.toFixed(3)}%
      </text>
    </React.Fragment>
  );
}

const ValuePieChart = ({
  stock,
  cash,
  totalValue
}) => {
  const pieChartSvgRef = useRef(null);
  // 'ratioData' contains each stock's (and cash) value ratio with respect to
  // the total asset
  const [ratioData, setRatioData] = useState([]);
  // 'tickerLabels' contains each stock's (and cash) ticker name
  const [tickerLabels, setTickerLabels] = useState([]);
  // 'chartData' contains value ratio and ticker zipped from 'ratioData' and 'tickerLabels'
  const [chartData, setChartData] = useState([]);
  const [outerRadius, setOuterRadius] = useState(0);
  const [shouldRenderChart, setShouldRenderChart] = useState(false);

  function generateChartColor(i) {
    const colors = ['#FB7068', '#F49B50', '#32C08C', '#5BAEDC', '#855AE9', '#E955AA', '#F2C650', '#1DBE50', '#3489D6', '#C244E1', '#e2ea49'];
    if (i === 0) {
      return colors[0];
    }
    else {
      return colors[i % 11];
    }
  }

  // calculate each stock's (and cash) value ratio
  useEffect(() => {
    if (Object.keys(stock.stockList).length > 0 && cash.totalCashStatus !== 'loading') {
      let chartData = [];
      // cash always comes at the first position
      if (cash.totalCash > 0) {
        chartData.push(cash.totalCash / totalValue);
      }
      for (const stockItem of Object.values(stock.stockList)) {
        if (stockItem.overallReturn !== null && stockItem.quantity > 0) {
          const overallValue = (stockItem.avgCost * stockItem.quantity + stockItem.overallReturn);
          const overallValueRatio = overallValue / totalValue;
          chartData.push(overallValueRatio);
        }
      }
      setRatioData(chartData);
    }
  }, [stock.stockList, cash.totalCash, cash.totalCashStatus, totalValue]);

  // initialize tickers (and cash)
  useEffect(() => {
    if (Object.keys(stock.stockList).length > 0 && cash.totalCashStatus !== 'loading') {
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
  }, [stock.stockList, cash.totalCash, cash.totalCashStatus]);

  // zip each stock's (and cash) value ratio and their ticker
  useEffect(() => {
    if (ratioData.length > 0 && tickerLabels.length > 0 &&
      ratioData.length === tickerLabels.length) {
      const result = []
      for (let i = 0; i < ratioData.length; i++) {
        result.push({
          ticker: tickerLabels[i],
          ratio: ratioData[i]
        });
      }
      setChartData(result);
    }
  }, [ratioData, tickerLabels]);

  useEffect(() => {
    if (
      ratioData.length > 0 &&
      tickerLabels.length > 0 &&
      chartData.length > 0 &&
      ratioData.length === tickerLabels.length &&
      ratioData.length === chartData.length
    ) {
      setShouldRenderChart(true);
    } else {
      setShouldRenderChart(false);
    }
  }, [ratioData, tickerLabels, chartData]);


  useEffect(() => {
    if (shouldRenderChart) {
      const svgSize = pieChartSvgRef.current.getBoundingClientRect().width;
      setOuterRadius(svgSize / 2);
    }
  }, [shouldRenderChart, pieChartSvgRef]);

  const createPie = d3
    .pie()
    .value(d => d.ratio)
    .sort(null);

  const createArc = d3
    .arc()
    .innerRadius(0)
    .outerRadius(outerRadius);

  const pieData = useMemo(() => createPie(chartData), [createPie, chartData]);
  return (
    <div className="chart-container value-pie-chart">
      <div className="pie-chart-icon">
        <PieChartIcon />
      </div>
      <h1>Distribution By Value</h1>
      {shouldRenderChart ? (
        <svg className="pie-chart-svg" ref={pieChartSvgRef}>
          <g>
            {pieData && pieData.length > 0 && (
              pieData.map((data, i) => (
                <Arc
                  key={i}
                  index={i}
                  renderingData={data}
                  createArc={createArc}
                  generateChartColor={generateChartColor}
                  outerRadius={outerRadius}
                />
              ))
            )}
          </g>
          <g>
            {pieData && pieData.length > 0 && (
              pieData.map((data, i) => (
                <ChartLabel
                  key={i}
                  renderingData={data}
                  outerRadius={outerRadius}
                />
              ))
            )}
          </g>
        </svg>
      ) : (
          <p className="chart-loading-notice">loading...</p>
        )}
    </div>
  );
}

const mapStateToProps = (state) => ({
  stock: state.stock,
  cash: state.cash
});

export default connect(mapStateToProps)(ValuePieChart);
