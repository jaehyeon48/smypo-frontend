import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Line } from 'react-chartjs-2';
import 'chartjs-plugin-datalabels';


import LineChartIcon from '../icons/LineChartIcon';
import { get10DaysOfRecord } from '../../utils/getRecordData';

const LineChart = ({
  defaultPortfolioId
}) => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [{
      data: [],
      borderColor: '#36a2eb',
      borderWidth: 3,
      fill: false,
      pointRadius: 0,
      lineTension: 0.15
    }]
  });
  const [recordData, setRecordData] = useState([]);

  useEffect(() => {
    (async () => {
      const record = await get10DaysOfRecord(defaultPortfolioId);
      setRecordData(record);
    })();
  }, [defaultPortfolioId]);

  useEffect(() => {
    if (recordData.length > 0) {
      const dateLabels = [];
      const totalValueData = [];
      recordData.forEach((record) => {
        dateLabels.push(record.recordDate);
        totalValueData.push(record.totalValue);
      });

      setChartData({
        labels: [...dateLabels],
        datasets: [{
          data: [...totalValueData],
          borderColor: '#36a2eb',
          borderWidth: 3,
          fill: false,
          pointRadius: 0,
          lineTension: 0.15
        }]
      })
    }
  }, [recordData]);

  const chartOptions = {
    maintainAspectRatio: false,
    plugins: {
      datalabels: {
        labels: { title: { font: { size: 0 } } } // disable data label for this chart
      }
    },
    legend: {
      display: false
    },
    gridLines: {
      color: '#000'
    }
  }

  return (
    <div className="chart-container asset-chart">
      <div className="line-chart-icon">
        <LineChartIcon />
      </div>
      <h1>Asset History</h1>
      <div className="line-chart-wrapper">
        <Line
          data={chartData}
          options={chartOptions}
        />
      </div>
    </div>
  );
}

LineChart.propTypes = {
  defaultPortfolioId: PropTypes.number,
  get10DaysOfRecord: PropTypes.func
};

export default LineChart;
