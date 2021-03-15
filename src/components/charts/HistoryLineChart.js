import React, { useState, useEffect, useRef } from 'react';
import * as d3 from 'd3';

import LineChartIcon from '../icons/LineChartIcon';
import { getHistoryRecord } from '../../utils/getHistoryRecord';

const LineChart = ({
  defaultPortfolioId
}) => {
  const lineChartSvgRef = useRef(null);
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
    if (lineChartSvgRef.current &&
      recordData && recordData.length > 0 &&
      dateArr && dateArr.length > 0) {
      const margin = { top: 10, right: 1, bottom: 27, left: 80 }
      const svgSizeData = lineChartSvgRef.current.getBoundingClientRect();
      const width = svgSizeData.width - margin.left - margin.right;
      const height = svgSizeData.height - margin.top - margin.bottom;

      const x = d3.scalePoint()
        .range([0, width]);
      const xScale = x.domain(dateArr);

      const y = d3.scaleLinear()
        .range([height, 0]);
      const yScale = y.domain(d3.extent(recordData, (d) => d.totalValue));

      const makeXGridLines = () => d3.axisBottom(xScale).ticks(20);
      const makeYGridLines = () => d3.axisLeft(yScale).ticks(10);

      const line = d3.line()
        .x((d) => xScale(d.recordDate))
        .y((d) => yScale(d.totalValue))
        .curve(d3.curveMonotoneX);

      const svg = d3.select('.line-chart-svg')
        .attr('width', width + margin.left + margin.right)
        .attr('height', height + margin.top + margin.bottom)
        .append('g')
        .attr('transform', `translate(${margin.left}, 0)`);

      // make x grid lines
      svg.append('g')
        .attr('class', 'grid')
        .attr('transform', `translate(0, ${height})`)
        .call(makeXGridLines().tickSize(-width).tickFormat(''));

      // make y grid lines
      svg.append('g')
        .attr('class', 'grid')
        .call(makeYGridLines().tickSize(-width).tickFormat(''));

      // add x axis
      svg.append('g')
        .attr('class', 'x-axis')
        .attr('transform', `translate(0, ${height})`)
        .call(d3.axisBottom(xScale).ticks(25));

      if (svgSizeData.width < 470) {
        svg.selectAll('text')
          .attr('transform', 'rotate(300)');
      }

      // add y axis
      svg.append('g')
        .call(d3.axisLeft(yScale));

      // add line
      svg.append('path')
        .datum(recordData)
        .attr('class', 'path-line')
        .attr('d', line)

      // add circles (dots)
      svg.selectAll('circles')
        .data(recordData)
        .enter()
        .append('circle')
        .attr('class', 'line-dot')
        .attr('cx', (d) => xScale(d.recordDate))
        .attr('cy', (d) => yScale(d.totalValue))
        .attr('r', 4)

    }
  }, [recordData, dateArr, lineChartSvgRef]);


  return (
    <div className="chart-container asset-chart">
      <div className="line-chart-icon">
        <LineChartIcon />
      </div>
      <h1>Asset History</h1>
      <svg className="line-chart-svg" ref={lineChartSvgRef}>
      </svg>
    </div>
  );
}

export default LineChart;
