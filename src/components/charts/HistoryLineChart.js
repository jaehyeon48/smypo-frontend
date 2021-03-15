import React, { useState, useEffect, useRef } from 'react';
import * as d3 from 'd3';

import LineChartIcon from '../icons/LineChartIcon';
import { getHistoryRecord } from '../../utils/getHistoryRecord';

const LineChart = ({
  defaultPortfolioId
}) => {
  const lineChartContainerRef = useRef(null);
  const [recordData, setRecordData] = useState([]);
  // use "chartData" instead of "recordData" due to the empty
  // values inside of "recordData"
  const [dateArr, setDateArr] = useState([]);

  useEffect(() => {
    (async () => {
      const record = await getHistoryRecord(defaultPortfolioId);
      setRecordData(record);
    })();
  }, [defaultPortfolioId]);

  useEffect(() => {
    if (recordData && recordData.length > 0) {
      let dateArrData = [];
      for (const record of recordData) {
        dateArrData.push(record.recordDate);
      }
      setDateArr(dateArrData);
    }
  }, [recordData]);

  useEffect(() => {
    if (lineChartContainerRef.current &&
      recordData && recordData.length > 0 &&
      dateArr && dateArr.length > 0) {
      let margin = { top: 0, right: 30, bottom: 40, left: 80 }
      let circleRadius = 4;
      const viewWidth = document.body.offsetWidth;

      if (viewWidth < 769) {
        margin.bottom = 50;
        margin.left = 60;
        margin.right = 10;
        circleRadius = 3;
      } else if (viewWidth < 450) {
        margin.bottom = 60;
        margin.left = 50;
        margin.right = 10;
        circleRadius = 2;
      }

      const svgSizeData = lineChartContainerRef.current.getBoundingClientRect();
      const width = svgSizeData.width - margin.left - margin.right;
      const height = svgSizeData.height - margin.top - margin.bottom;

      const x = d3.scalePoint()
        .range([0, width]);
      const xScale = x.domain(dateArr);

      const y = d3.scaleLinear()
        .range([height, 0]);
      const yScale = y.domain(d3.extent(recordData, (d) => d.totalValue));

      const line = d3.line()
        .x((d) => xScale(d.recordDate))
        .y((d) => yScale(d.totalValue))
        .curve(d3.curveMonotoneX);

      const svg = d3.select('.line-chart-svg')
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom)
        .append('g')
        .attr('transform', `translate(${margin.left}, 10)`);

      // add x axis
      svg.append('g')
        .attr('class', 'x-axis')
        .attr('transform', `translate(0, ${height})`)
        .call(d3.axisBottom(xScale).tickSizeInner(-height).tickSizeOuter(0));

      if (viewWidth < 769) {
        svg.selectAll('.x-axis text')
          .attr('transform', 'translate(-15, 12), rotate(330)');
      } else if (viewWidth < 450) {
        svg.selectAll('.x-axis text')
          .attr('transform', 'translate(-10, 20), rotate(300)');
      }

      // add y axis
      svg.append('g')
        .attr('class', 'y-axis')
        .call(d3.axisLeft(yScale).tickSizeInner(-width).tickSizeOuter(0));

      if (viewWidth < 450) {
        svg.selectAll('.y-axis text')
          .attr('transform', 'translate(-2, -3), rotate(320)');
      }

      const lineGroup = svg.append('g')
        .attr('class', 'line-group')

      // add line
      lineGroup.append('path')
        .datum(recordData)
        .attr('class', 'path-line')
        .attr('d', line)

      // add circles (dots)
      lineGroup.selectAll('circles')
        .data(recordData)
        .enter()
        .append('circle')
        .attr('class', 'line-dot')
        .attr('cx', (d) => xScale(d.recordDate))
        .attr('cy', (d) => yScale(d.totalValue))
        .attr('r', circleRadius)
    }
  }, [recordData, dateArr, lineChartContainerRef]);


  return (
    <div className="chart-container asset-chart">
      <div className="line-chart-icon">
        <LineChartIcon />
      </div>
      <h1>Asset History</h1>
      <div className="line-chart-container" ref={lineChartContainerRef}>
        <svg className="line-chart-svg">
        </svg>
      </div>
    </div>
  );
}

export default LineChart;
