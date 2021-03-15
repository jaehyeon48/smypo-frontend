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
      const viewWidth = document.body.offsetWidth;

      if (viewWidth < 450) {
        margin.left = 30;
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

      const makeXGridLines = () => d3.axisBottom(xScale).ticks(20);
      const makeYGridLines = () => d3.axisLeft(yScale).ticks(3);

      const line = d3.line()
        .x((d) => xScale(d.recordDate))
        .y((d) => yScale(d.totalValue))
        .curve(d3.curveMonotoneX);

      const svg = d3.select('.line-chart-svg')
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom)
        .append('g')
        .attr('transform', `translate(${margin.left}, 10)`);

      // make x grid lines
      // svg.append('g')
      //   .attr('class', 'grid')
      //   .attr('transform', `translate(0, ${height})`)
      //   .call(makeXGridLines().tickSize(-width).tickFormat(''));

      // // make y grid lines
      // svg.append('g')
      //   .attr('class', 'grid')
      //   .call(makeYGridLines().tickSize(-width).tickFormat(''));

      // add x axis
      svg.append('g')
        .attr('class', 'x-axis')
        .attr('transform', `translate(0, ${height})`)
        .call(d3.axisBottom(xScale).tickSizeInner(-height).tickSizeOuter(0));

      if (viewWidth < 769) {
        svg.selectAll('text')
          .attr('transform', 'rotate(300)');
      }

      // add y axis
      svg.append('g')
        .attr('class', 'y-axis')
        .call(d3.axisLeft(yScale).tickSizeInner(-width).tickSizeOuter(0));

      const lineGroup = svg.append('g')
        .attr('class', 'line-group')
      // .attr('transform', 'translate(0, 10)');

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
        .attr('r', 4)

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
