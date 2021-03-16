import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { connect } from 'react-redux';
import * as d3 from 'd3';

import PieChartIcon from '../icons/PieChartIcon';

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

const ChartLabel = ({
  renderingData,
  outerRadius,
  totalSectorCount
}) => {
  const textRef = useRef(null);
  const { data, startAngle, endAngle } = renderingData;
  const { cos, sin, PI } = Math;
  let r = outerRadius / 2 + outerRadius * 0.26;
  let a = (startAngle + endAngle) / 2 - PI / 2;
  const translateX = cos(a) * r;
  const translateY = sin(a) * r;

  const wrapText = useCallback((text) => {
    if (text && text.length > 13) {
      let splittedText = text.split(" ");
      let lenSplittedText = splittedText.length;
      if (lenSplittedText > 5) {
        splittedText = splittedText.slice(0, 5);
        // set length of 6 including '...' string (but not actually append it)
        lenSplittedText = 6
      }
      let textElems = "";
      for (let i = 0; i < lenSplittedText; i++) {
        if (lenSplittedText === 6 && i === lenSplittedText - 2) {
          textElems += `<tspan x=0 y=${i * 11}>${splittedText[i]}...</tspan>`;
          break;
        } else {
          textElems += `<tspan x=0 y=${i * 11}>${splittedText[i]}</tspan>`;
        }
      }
      if (textRef.current) {
        textRef.current.innerHTML = textElems;
      }
      return "";
    } else {
      return text;
    }
  }, [textRef]);

  const sectorRatioPos = useCallback((text) => {
    if (text && text.length > 13) {
      let splittedText = text.split(" ");
      if (splittedText.length > 5) {
        return 42;
      } else {
        return (splittedText.length - 1) * 10;
      }
    } else {
      return 0;
    }
  }, []);

  return (
    <React.Fragment>
      <text
        className="chart-text-sector"
        transform={textRef.current && totalSectorCount === 1 ?
          `translate(${translateX} ${translateY - (textRef.current.childElementCount + 1) * 10})` :
          `translate(${translateX} ${translateY})`}
        textAnchor="middle"
        alignmentBaseline="middle"
        ref={textRef}
      >
        {wrapText(data.sector)}
      </text>
      <text
        className="chart-text-ratio"
        textAnchor="middle"
        alignmentBaseline="middle"
        transform={textRef.current && totalSectorCount === 1 ?
          `translate(${translateX} ${translateY + (textRef.current.childElementCount + 1) * 1.7})` :
          `translate(${translateX} ${translateY + 15})`}
        y={totalSectorCount !== 1 ? sectorRatioPos(data.sector) : undefined}
      >
        {parseFloat((parseFloat(data.ratio) * 100).toFixed(3)).toString()}%
      </text>
    </React.Fragment>
  );
}

const SectorPieChart = ({
  stock
}) => {
  const pieChartSvgRef = useRef(null);
  // 'sectorLabels' contains each unique sector names (no duplicates)
  const [sectorLabels, setSectorLabels] = useState([]);
  // 'sectorCount' contains the number of each sectors
  const [sectorCount, setSectorCount] = useState({});
  // 'chartData' contains sector labels and count zipped from 'sectorLabels' and 'sectorCount'
  const [chartData, setChartData] = useState([]);
  const [outerRadius, setOuterRadius] = useState(0);
  const [shouldRenderChart, setShouldRenderChart] = useState(false);

  function generateChartColor(i) {
    const colors = ['#4D636F', '#32C08C', '#5BAEDC', '#855AE9', '#E955AA', '#F2C650', '#1DBE50', '#FE857E', '#3489D6', '#C244E1', '#F49B50',];
    if (i === 0) {
      return colors[0];
    }
    else {
      return colors[i % 11];
    }
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
    let totalSectorCount = Object.keys(sectorCount).length;
    if (sectorLabels.length > 0 && totalSectorCount > 0 &&
      sectorLabels.length === totalSectorCount) {
      const newChartData = [];
      for (const sector of sectorLabels) {
        newChartData.push({
          sector,
          ratio: totalSectorCount === 1 ? 1 : sectorCount[sector] / totalSectorCount
        });
      }
      setChartData(newChartData);
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
    <div className="chart-container">
      <div className="pie-chart-icon">
        <PieChartIcon />
      </div>
      <h1>Distribution By Sector</h1>
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
                  totalSectorCount={Object.keys(sectorCount).length}
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
  stock: state.stock
});

export default connect(mapStateToProps)(SectorPieChart);
