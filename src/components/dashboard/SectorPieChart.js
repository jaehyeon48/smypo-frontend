import React, { useState, useEffect, useMemo, memo } from 'react';
import { connect } from 'react-redux';
import { Pie } from 'react-chartjs-2';
import 'chartjs-plugin-datalabels';

import PieChartIcon from '../icons/PieChartIcon';

const SectorPieChart = ({
  stock
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
  const [sectorsCount, setSectorsCount] = useState([]);
  const [shouldRenderChart, setShouldRenderChart] = useState(false);
  const [chartLegends, setChartLegends] = useState([]);
  // const [chartFontSize, setChartFontSize] = useState(16);

  function getRandomColor(i) {
    const colors = ['#0DA886', '#4FDF5A', '#F5B428', '#F47B2E', '#EF4827', '#40C8CC', '#5E6F9E', '#C2596E', '#E9B07F', '#E2E678', '#EC7DBC'];
    if (i === 0) {
      return colors[0];
    }
    else {
      return colors[i % 11];
    }
  }

  const sectorLabels = useMemo(() => {
    let newSectorLabelsArray = [];
    if (Object.keys(stock.stockList).length > 0) {
      for (const stockItem of Object.values(stock.stockList)) {
        if (stockItem.quantity > 0) {
          if (newSectorLabelsArray.length === 0) {
            newSectorLabelsArray.push(stockItem.sector);
          }
          else {
            const isSectorNameDuplicate = newSectorLabelsArray.find((sectorName) => sectorName === stockItem.sector);
            if (isSectorNameDuplicate === undefined) {
              newSectorLabelsArray.push(stockItem.sector);
            }
          }
        }
      }
      newSectorLabelsArray.sort((a, b) => a.localeCompare(b));
    }
    return newSectorLabelsArray;
  }, [stock.stockList]);

  // calculate font size based on viewport size
  // useEffect(() => {
  //   const viewportWidth = window.innerWidth;

  //   if (viewportWidth >= 1460) {
  //     setChartFontSize(16);
  //   }
  // }, []);

  useEffect(() => {
    if (Object.keys(stock.stockList).length > 0) {
      let newSectorsArray = [];
      let i = 0
      for (const stockItem of Object.values(stock.stockList)) {
        if (stockItem.quantity > 0) {
          newSectorsArray.splice(i, 1, stockItem.sector);
        }
        i++;
      }
      setSectors(newSectorsArray);
    }
  }, [stock.stockList]);

  // make legend
  useEffect(() => {
    if (sectorLabels && sectorsCount &&
      sectorLabels.length > 0 && sectorsCount.length > 0 &&
      sectorLabels.length === sectorsCount.length) {
      const legendData = [];
      for (let i = 0; i < sectorLabels.length; ++i) {
        legendData.push({
          weight: sectorsCount[i] * 100,
          sector: sectorLabels[i],
          index: i
        });
      }
      legendData.sort((a, b) => b.weight - a.weight);
      setChartLegends(legendData);
    }
  }, [sectorLabels, sectorsCount]);

  // set each sector's label and
  // set the number of each sectors (sectors count)
  useEffect(() => {
    let newColors = [];
    if (sectorLabels.length > 0) {
      for (let i = 0; i < sectorLabels.length; i++) {
        newColors.push(getRandomColor(i));
      }
      setChartData((prevState) => ({
        ...prevState,
        labels: [...sectorLabels],
        datasets: [{
          data: [...sectorsCount],
          backgroundColor: [...newColors],
          borderColor: '#e8f0fe',
          borderWidth: 1
        }]
      }));
    }
  }, [sectorLabels, sectorsCount]);

  // calculate each sector's ratio
  useEffect(() => {
    let newSectorsCount = [];
    if (sectors.length > 0 && sectorLabels.length > 0) {
      sectorLabels.forEach(label => {
        const sectorCount = sectors.filter((sectorName) => sectorName === label).length;
        newSectorsCount.push(parseFloat((sectorCount / sectors.length).toFixed(3)));
      });
    }
    setSectorsCount(newSectorsCount);
  }, [sectors, sectorLabels]);

  useEffect(() => {
    if (chartData.labels.length > 0) {
      setShouldRenderChart(true);
    }
    else {
      setShouldRenderChart(false);
    }
  }, [chartData.labels]);

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
    <div className="chart-container sector-pie-chart">
      <div className="pie-chart-icon">
        <PieChartIcon />
      </div>
      <h1>Distribution By Sector</h1>
      <div className="chart-content">
        <div className="pie-chart-legend">
          {shouldRenderChart && chartLegends && chartLegends.length > 0 && (
            chartLegends.map((legendData) => (
              <div
                key={legendData.index}
                className="pie-chart-legend-item"
              >
                <div
                  className="pie-chart-legend-color"
                  style={{ backgroundColor: `${getRandomColor(legendData.index)}` }}>
                </div>
                <div className="pie-chart-legend-content">
                  <span className="pie-chart-legend__sector">{legendData.sector}</span>
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

const mapStateToProps = (state) => ({
  stock: state.stock
});

export default connect(mapStateToProps)(memo(SectorPieChart));
