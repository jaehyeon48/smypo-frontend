import React, { useState, useEffect, useRef } from 'react';

import * as d3 from 'd3';
import BarChartIcon from '../icons/BarChartIcon';

const ValueBarChart = ({
  stockList,
  totalCash,
  totalValue
}) => {
  const valueChartContainerRef = useRef(null);
  // contains tickers of the stockList for bar chart x-axis
  const [tickers, setTickers] = useState([]);
  // contains each stock's ratio with respect to the totalValue.
  // this is used for bar chart y-axis
  const [ratioData, setRatioData] = useState(['cash']);
  const [chartData, setChartData] = useState([]);
  // reversed chart data for mobile
  const [reversedChartData, setReversedChartData] = useState([]);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [barPadding, setBarPadding] = useState(null);
  const colors = ['#FE857E', '#F49B50', '#38CE7F', '#5BAEDC', '#855AE9', '#E955AA', '#123456', '#14D5AE', '#2486DF', '#D14FF1', '#4D636F'];

  // set ticker data
  useEffect(() => {
    let result = [];
    if (totalCash > 0) {
      result.push('cash');
    }
    for (const [ticker, entry] of Object.entries(stockList)) {
      if (entry.quantity > 0) {
        result.push(ticker);
      }
    }
    setTickers(result);
  }, [stockList, totalCash]);

  // calculate each stock's (and cash) value ratio
  useEffect(() => {
    // check totalCash !== totalValue for the calculation
    // delay of the total stock's value
    if (stockList && totalCash !== totalValue) {
      let result = [];
      // cash always comes at the first position
      if (totalCash > 0) {
        result.push(totalCash / totalValue);
      }
      for (const stockItem of Object.values(stockList)) {
        if (stockItem.overallReturn !== null && stockItem.quantity > 0) {
          const overallValue = (stockItem.avgCost * stockItem.quantity + stockItem.overallReturn);
          const overallValueRatio = overallValue / totalValue;
          result.push(overallValueRatio);
        }
      }
      setRatioData(result);
    }
  }, [stockList, totalCash, totalValue]);

  // reconcile ticker and ratio data, and add a color data
  useEffect(() => {
    if (tickers.length > 0 && ratioData.length > 0
      && tickers.length === ratioData.length) {
      let zipped = [];
      for (let i = 0; i < tickers.length; i++) {
        zipped.push({
          ticker: tickers[i] !== 'cash' ? tickers[i].toUpperCase() : tickers[i],
          ratio: ratioData[i],
        });
      }
      zipped.sort((a, b) => b.ratio - a.ratio);
      // Except for the top 10, compress the rest into one
      if (zipped.length > 10) {
        let compressed = { ticker: 'others' };
        const sumOtherValues = zipped.slice(10).reduce((accum, curVal) => accum + curVal.ratio, 0);
        compressed['ratio'] = sumOtherValues;
        let compressedZipped = zipped.slice(0, 10);
        let compressedZippedReverse = [...compressedZipped].reverse();
        compressedZipped.push(compressed);
        compressedZippedReverse.unshift(compressed);
        setChartData(compressedZipped);
        setReversedChartData(compressedZippedReverse);
      } else {
        const reversed = [...zipped].reverse();
        setChartData(zipped);
        setReversedChartData(reversed);
      }
    }
  }, [stockList, tickers, ratioData]);

  // calculate view width
  useEffect(() => {
    if (valueChartContainerRef.current) {
      let margin = { top: 0, right: 50, bottom: 40, left: 50 };
      const svgSizeData = valueChartContainerRef.current.getBoundingClientRect();
      setWidth(svgSizeData.width - margin.left - margin.right);
      setHeight(svgSizeData.height - margin.top - margin.bottom);
    }
  }, [valueChartContainerRef]);

  // calculate bars' padding
  useEffect(() => {
    const chartDataLen = Object.keys(chartData).length;

    if (chartDataLen < 3) {
      setBarPadding(0.8);
    } else if (chartDataLen < 6) {
      setBarPadding(0.6);
    } else if (chartDataLen < 8) {
      setBarPadding(0.4);
    } else {
      setBarPadding(0.3);
    }
  }, [chartData]);

  let margin = { top: 0, right: 50, bottom: 40, left: 50 };
  const viewWidth = document.body.offsetWidth;


  return (
    <div className="chart-container value-chart">
      <div className="bar-chart-icon">
        <BarChartIcon />
      </div>
      <h1>Distribution By Value</h1>
      <div className="value-chart-container" ref={valueChartContainerRef}>
        <svg
          className="value-chart-svg"
          width={width + margin.left + margin.right}
          height={height + margin.top + margin.bottom}
        >
          <g transform={`translate(${viewWidth >= 769 ? margin.left : margin.left + 10}, 10)`}>
            <TickerAxis
              width={width}
              height={height}
              ratioData={ratioData}
              chartData={chartData}
              barPadding={barPadding}
              reversedChartData={reversedChartData}
              viewWidth={viewWidth}
            />
            <RatioAxis
              width={width}
              height={height}
              ratioData={ratioData}
              chartData={chartData}
              viewWidth={viewWidth}
            />
            {barPadding !== null && Object.keys(chartData).length > 0 &&
              viewWidth >= 769 ? (
              Object.values(chartData).map((d, i) => (
                <React.Fragment key={i}>
                  <Rect
                    key={d.ticker}
                    chartData={chartData}
                    ratioData={ratioData}
                    data={d}
                    idx={i}
                    colors={colors}
                    barPadding={barPadding}
                    viewWidth={viewWidth}
                    width={width}
                    height={height}
                  />
                  <Text
                    key={`textkey-${d.ticker}`}
                    chartData={chartData}
                    ratioData={ratioData}
                    data={d}
                    barPadding={barPadding}
                    viewWidth={viewWidth}
                    width={width}
                    height={height}
                  />
                </React.Fragment>
              ))
            ) : (
              Object.values(reversedChartData).map((d, i) => (
                <React.Fragment key={i}>
                  <Rect
                    key={d.ticker}
                    chartData={reversedChartData}
                    ratioData={ratioData}
                    data={d}
                    idx={i}
                    colors={colors}
                    barPadding={barPadding}
                    viewWidth={viewWidth}
                    width={width}
                    height={height}
                  />
                  <Text
                    key={`textkey-${d.ticker}`}
                    chartData={reversedChartData}
                    ratioData={ratioData}
                    data={d}
                    barPadding={barPadding}
                    viewWidth={viewWidth}
                    width={width}
                    height={height}
                  />
                </React.Fragment>
              ))
            )}
          </g>
        </svg>
      </div>
    </div>
  );
}

const TickerAxis = ({
  width, height,
  ratioData, chartData,
  barPadding, reversedChartData, viewWidth }) => {
  const tickerAxisRef = useRef(null);

  useEffect(() => {
    if (tickerAxisRef.current &&
      ratioData.length > 0 &&
      Object.keys(chartData).length > 0) {
      if (viewWidth >= 769) {
        const x = d3.scaleBand()
          .rangeRound([0, width])
          .padding(barPadding)
          .domain(chartData.map((data) => data.ticker));
        d3.select(tickerAxisRef.current).call(d3.axisBottom(x));
      } else {
        const y = d3.scaleBand()
          .rangeRound([height, 0])
          .padding(barPadding)
          .domain(reversedChartData.map((data) => data.ticker));
        d3.select(tickerAxisRef.current).call(d3.axisLeft(y).ticks(5, '%'));
      }
    }
  }, [
    tickerAxisRef, ratioData,
    chartData, viewWidth,
    barPadding, reversedChartData,
    width, height
  ]);

  return (
    <g
      className="value-chart-ticker-axis"
      ref={tickerAxisRef}
      transform={viewWidth >= 769 ? `translate(0,${height})` : ''}
    >
    </g>
  );
}

const RatioAxis = ({ width, height, ratioData, chartData, viewWidth }) => {
  const ratioAxisRef = useRef(null);

  useEffect(() => {
    if (ratioAxisRef.current &&
      ratioData.length > 0 &&
      Object.keys(chartData).length > 0) {
      if (viewWidth >= 769) {
        const y = d3.scaleLinear()
          .rangeRound([height, 0])
          .domain([0, d3.max(ratioData) * 1.05]);
        d3.select(ratioAxisRef.current).call(d3.axisLeft(y).ticks(5, '%'));
      } else {
        const x = d3.scaleLinear()
          .rangeRound([0, width])
          .domain([0, d3.max(ratioData) * 1.05]);
        d3.select(ratioAxisRef.current).call(d3.axisBottom(x).ticks(5, '%'));
      }
    }
  }, [ratioAxisRef, ratioData, chartData, viewWidth, width, height]);

  return (
    <g
      className="value-chart-ratio-axis"
      ref={ratioAxisRef}
      transform={viewWidth >= 769 ? '' : `translate(0,${height})`}
    >
    </g>
  );
}

// 'data' is current chartData
// 'idx' is used for selecting color
const Rect = ({
  chartData, ratioData,
  data, viewWidth,
  barPadding,
  idx, colors,
  width, height }) => {
  if (viewWidth >= 769) {
    const x = d3.scaleBand()
      .rangeRound([0, width])
      .padding(barPadding)
      .domain(chartData.map((data) => data.ticker));

    const y = d3.scaleLinear()
      .rangeRound([height, 0])
      .domain([0, d3.max(ratioData) * 1.05]);

    return (
      <rect
        className="value-bar"
        x={x(data.ticker)}
        y={y(data.ratio)}
        fill={data.ticker === 'cash' ? '#f7bd26' : colors[idx]}
        width={x.bandwidth()}
        height={y(data.ratio) ? height - y(data.ratio) : height}
      >
      </rect>
    );
  } else {
    const x = d3.scaleLinear()
      .rangeRound([0, width])
      .domain([0, d3.max(ratioData) * 1.05]);

    const y = d3.scaleBand()
      .rangeRound([height, 0])
      .padding(barPadding)
      .domain(chartData.map((data) => data.ticker));

    return (
      <rect
        className="value-bar"
        x="1.5"
        y={y(data.ticker)}
        fill={data.ticker === 'cash' ? '#f7bd26' : colors[idx]}
        width={x(data.ratio)}
        height={y.bandwidth()}
      >
      </rect>
    );
  }
}

// 'data' is current chartData
// 'idx' is used for selecting color
const Text = ({
  chartData, ratioData,
  data, viewWidth,
  barPadding, width, height }) => {
  if (viewWidth >= 769) {
    const x = d3.scaleBand()
      .rangeRound([0, width])
      .padding(barPadding)
      .domain(chartData.map((data) => data.ticker));

    const y = d3.scaleLinear()
      .rangeRound([height, 0])
      .domain([0, d3.max(ratioData) * 1.05]);

    return (
      <text
        className="value-bar-text"
        x={x(data.ticker) + x.bandwidth() / 2}
        y={y(data.ratio) ? y(data.ratio) - 2 : 0}
      >
        {(data.ratio * 100).toFixed(2)}%
      </text>
    );
  } else {
    const x = d3.scaleLinear()
      .rangeRound([0, width])
      .domain([0, d3.max(ratioData) * 1.05]);

    const y = d3.scaleBand()
      .rangeRound([height, 0])
      .padding(barPadding)
      .domain(chartData.map((data) => data.ticker));

    return (
      <text
        className="value-bar-text"
        x={x(data.ratio) + 2}
        y={y(data.ticker) + y.bandwidth() / 2}
      >
        {(data.ratio * 100).toFixed(2)}%
      </text>
    );
  }
}

export default ValueBarChart;
