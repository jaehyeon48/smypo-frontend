import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { connect } from 'react-redux';
import * as d3 from 'd3';

import PieChartIcon from '../icons/PieChartIcon';

const SectorPieChart = ({
  stock
}) => {
  const sectorChartRef = useRef(null);
  // 'sectorLabels' contains each unique sector names (no duplicates)
  const [sectorLabels, setSectorLabels] = useState([]);
  // 'sectorCount' contains the number of each sectors
  const [sectorCount, setSectorCount] = useState({});
  // 'chartData' contains sector labels and count zipped from 'sectorLabels' and 'sectorCount'
  const [chartData, setChartData] = useState([]);
  const [outerRadius, setOuterRadius] = useState(0);
  const [shouldRenderChart, setShouldRenderChart] = useState(false);

  function generateChartColor(i) {
    const colors = ['#FE857E', '#F49B50', '#F2C650', '#38CE7F', '#5BAEDC', '#855AE9'];
    return colors[i];
  }

  // calculate each sector's count
  useEffect(() => {
    const newSectorCount = {};
    if (Object.keys(stock.stockList).length > 0) {
      for (const stockItem of Object.values(stock.stockList)) {
        if (stockItem.quantity > 0) {
          if (stockItem.sector in newSectorCount) {
            newSectorCount[stockItem.sector] += 1;
          } else {
            newSectorCount[stockItem.sector] = 1;
          }
        }
      }
      setSectorCount(newSectorCount);
    }
  }, [stock.stockList]);

  // calculate unique sector names for chart label
  useEffect(() => {
    let newSectorLabels = [];
    if (Object.keys(stock.stockList).length > 0) {
      for (const stockItem of Object.values(stock.stockList)) {
        if (stockItem.quantity > 0) {
          if (newSectorLabels.length === 0) {
            newSectorLabels.push(stockItem.sector);
          }
          else {
            const isSectorNameDuplicate = newSectorLabels.find((sectorName) => sectorName === stockItem.sector);
            if (isSectorNameDuplicate === undefined) {
              newSectorLabels.push(stockItem.sector);
            }
          }
        }
      }
      newSectorLabels.sort((a, b) => a.localeCompare(b));
    }
    setSectorLabels(newSectorLabels);
  }, [stock.stockList]);

  // zip each sector name's with their count
  useEffect(() => {
    let totalSectorCount = Object.values(sectorCount).reduce((accum, curVal) => accum + curVal, 0);
    const sectorLabelsLen = sectorLabels.length;
    if (sectorLabelsLen > 0 && totalSectorCount > 0) {
      let newChartData = [];
      for (const sector of sectorLabels) {
        newChartData.push({
          sector,
          ratio: sectorCount[sector] / totalSectorCount
        });
      }
      newChartData.sort((a, b) => b.ratio - a.ratio); // sort by ratio in desc
      // Except for the top 5, compress the rest into one
      if (sectorLabelsLen > 5) {
        let compressed = { sector: 'others' };
        const sumOtherValues = newChartData.slice(5).reduce((accum, curVal) => accum + curVal.ratio, 0);
        compressed['ratio'] = sumOtherValues;
        let compressedNewChartData = newChartData.slice(0, 5);
        compressedNewChartData.push(compressed);
        setChartData(compressedNewChartData);
      } else {
        setChartData(newChartData);
      }
    }
  }, [sectorLabels, sectorCount]);

  useEffect(() => {
    if (
      sectorLabels.length > 0 &&
      Object.keys(sectorCount).length > 0 &&
      Object.keys(chartData).length > 0) {
      setShouldRenderChart(true);
    } else {
      setShouldRenderChart(false);
    }
  }, [sectorLabels, sectorCount, chartData]);

  useEffect(() => {
    if (shouldRenderChart) {
      const svgSize = sectorChartRef.current.getBoundingClientRect().width;
      setOuterRadius(svgSize / 2);
    }
  }, [shouldRenderChart, sectorChartRef]);

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
    <div className="chart-container sector-chart">
      <div className="pie-chart-icon">
        <PieChartIcon />
      </div>
      <h1>Distribution By Sector</h1>
      {shouldRenderChart ? (
        <div className="sector-chart-contents">
          <svg className="sector-chart-labels">
            <g>
              {chartData.map((data, i) => (
                <ChartTextLabel
                  key={data.sector}
                  data={data}
                  generateChartColor={generateChartColor}
                  idx={i}
                />
              ))}
            </g>
          </svg>
          <svg className="sector-chart-svg" ref={sectorChartRef}>
            <g>
              {pieData?.length > 0 &&
                pieData.map((data, i) => (
                  <Arc
                    key={i}
                    index={i}
                    renderingData={data}
                    createArc={createArc}
                    generateChartColor={generateChartColor}
                    outerRadius={outerRadius}
                  />
                ))}
            </g>
            <g>
              {pieData?.length > 0 &&
                pieData.map((data, i) => (
                  <ChartRatioLabel
                    key={i}
                    renderingData={data}
                    outerRadius={outerRadius}
                  />
                ))}
            </g>
          </svg>
        </div>
      ) : (
        <p className="chart-loading-notice">loading...</p>
      )}
    </div>
  );
}

const Arc = ({
  renderingData,
  index,
  createArc,
  generateChartColor
}) => {
  return (
    <g className="arc">
      <path
        className="arc"
        d={createArc(renderingData)}
        fill={generateChartColor(index)} />
    </g>
  );
}

// 'data' for current data
const ChartTextLabel = ({ data, idx, generateChartColor }) => {
  const viewWidth = document.body.offsetWidth;

  const calcTranslateY = (index) => {
    if (viewWidth >= 769) {
      return 30 * idx;
    } else {
      return 24 * idx;
    }
  }

  const calcRectWidth = (index) => {
    if (viewWidth >= 769) {
      return 34;
    } else {
      return 30;
    }
  }

  const calcRectHeight = () => {
    if (viewWidth >= 769) {
      return 12;
    } else {
      return 10;
    }
  }

  const truncateText = (text) => {
    if (viewWidth >= 769 && text.length > 33) {
      return text.slice(0, 30) + '...';
    }
    return text;
  }

  return (
    <g
      transform={`translate(0, ${calcTranslateY(idx)})`}
    >
      <rect
        fill={generateChartColor(idx)}
        width={calcRectWidth()}
        height={calcRectHeight()}
      ></rect>
      <text
        className="sector-chart-label__text"
        x={calcRectWidth() + 1}
        y={calcRectHeight()}
      >
        {truncateText(data.sector)}
        <title>{data.sector}</title>
      </text>
    </g>
  );
}

const ChartRatioLabel = ({
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
    <text
      className="chart-text-ratio"
      textAnchor="middle"
      alignmentBaseline="middle"
      transform={`translate(${translateX} ${translateY})`}
    >
      {(data.ratio * 100).toFixed(2)}%
    </text>
  );
}

const mapStateToProps = (state) => ({
  stock: state.stock
});

export default connect(mapStateToProps)(SectorPieChart);
