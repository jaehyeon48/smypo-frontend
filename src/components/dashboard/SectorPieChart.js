import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Pie } from 'react-chartjs-2';
import 'chartjs-plugin-datalabels';

import './charts.css';

const SectorPieChart = ({
  stockList,
  stockLoading
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
  const [sectors, setSectors] = useState([]);
  const [sectorLabels, setSectorLabels] = useState([]);
  const [sectorsCount, setSectorsCount] = useState([]);
  const [shouldRenderChart, setShouldRenderChart] = useState(false);

  function getRandomColor(i) {
    const colors = ['#0F4BBD', '#F7A8D5', '#CA2F4C', '#F2AB59', '#CAD038', '#69C58B', '#0F4E52', '#134253', '#17A7AA', '#6F9BA9', '#4B3B57'];
    if (i === 0) {
      return colors[0];
    }
    else {
      return colors[i % 11];
    }
  }

  useEffect(() => {
    if (stockList.length > 0) {
      let newSectorsArray = [];
      stockList.forEach((stock, index) => {
        if (stock.quantity > 0) {
          newSectorsArray.splice(index, 1, stock.sector);
        }
      });
      setSectors(newSectorsArray);
    }
  }, [stockList]);

  useEffect(() => {
    if (!stockLoading && stockList.length > 0) {
      let newSectorLabelsArray = [];
      stockList.forEach(stock => {
        if (stock.quantity > 0) {
          if (newSectorLabelsArray.length === 0) {
            newSectorLabelsArray.push(stock.sector);
          }
          else {
            const isSectorNameDuplicate = newSectorLabelsArray.find(sectorName => sectorName === stock.sector);
            if (isSectorNameDuplicate === undefined) {
              newSectorLabelsArray.push(stock.sector);
            }
          }
        }
      });
      newSectorLabelsArray.sort((a, b) => a.localeCompare(b));
      setSectorLabels(newSectorLabelsArray);
    }
  }, [stockList]);

  useEffect(() => {
    let newColors = [];
    if (sectorLabels.length > 0) {
      for (let i = 0; i < sectorLabels.length; i++) {
        newColors.push(getRandomColor(i));
      }
      setChartData({
        labels: [...sectorLabels],
        datasets: [{
          data: [...chartData.datasets[0].data],
          backgroundColor: [...newColors],
          borderColor: '#e8f0fe',
          borderWidth: 1
        }]
      });
    }
  }, [sectorLabels]);

  useEffect(() => {
    let newSectorsCount = [];
    if (sectors.length > 0 && sectorLabels.length > 0) {
      sectorLabels.forEach(label => {
        const sectorCount = sectors.filter(sectorName => sectorName === label).length;
        newSectorsCount.push(parseFloat((sectorCount / sectors.length).toFixed(3)));
      });
    }
    setSectorsCount(newSectorsCount);
  }, [sectors, sectorLabels]);

  useEffect(() => {
    if (sectorsCount.length > 0) {
      setChartData({
        labels: [...chartData.labels],
        datasets: [{
          data: [...sectorsCount],
          backgroundColor: [...chartData.datasets[0].backgroundColor],
          borderColor: '#e8f0fe',
          borderWidth: 1
        }]
      });
    }
  }, [sectorsCount]);

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
    legend: {
      labels: {
        fontColor: '#372750',
        padding: 20,
        fontSize: 16
      }
    },
    layout: {
      padding: {
        top: 10,
        bottom: 20
      }
    },
    plugins: {
      datalabels: {
        formatter: (value, context) => {
          if (value) {
            const sectorName = context.chart.data.labels[context.dataIndex];
            let sum = 0;
            let dataArr = context.chart.data.datasets[0].data;
            dataArr.forEach(data => {
              sum += data;
            });
            let percentage = (value * 100 / sum).toFixed(2) + "%";
            return sectorName + '\n' + percentage;
          }
        },
        color: '#fff',
        anchor: 'end',
        align: 'start',
        offset: -20,
        borderWidth: 2,
        borderColor: '#fff',
        borderRadius: 20,
        backgroundColor: (context) => {
          return context.dataset.backgroundColor;
        },
        font: {
          weight: 'bold',
          size: 14,
          family: 'Lato'
        },
        textAlign: 'center',
        padding: 7
      }
    }
  }



  return (
    <div className="chart-container sector-pie-chart">
      <h1>Distribution By Sector</h1>
      {shouldRenderChart ? (
        <div className="chart-wrapper">
          <Pie
            data={chartData}
            options={chartOptions}
          />
        </div>
      ) : <div className="notice-chart-no-display">Nothing to display.</div>}
    </div>
  );
}

SectorPieChart.propTypes = {
  stockList: PropTypes.array,
  stockLoading: PropTypes.bool
};

const mapStateToProps = (state) => ({
  stockList: state.stock.stockList,
  stockLoading: state.stock.stockLoading
});

export default connect(mapStateToProps)(SectorPieChart);
