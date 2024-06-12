import React from 'react';

// third party
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

export const options = {
  barValueSpacing: 20,
  responsive: true,
  plugins: {
    legend: {
      position: 'top'
    }
  }
};

const labels = [0, 1, 2, 3];
export const data = {
  labels,
  datasets: [
    {
      label: 'Data 1',
      data: [25, 45, 74, 85],
      borderColor: '#70b2ff',
      backgroundColor: '#70b2ff',
      hoverBorderColor: '#70b2ff',
      hoverBackgroundColor: '#70b2ff'
    },
    {
      label: 'Data 2',
      data: [30, 52, 65, 65],
      borderColor: '#4cdec0',
      backgroundColor: '#4cdec0',
      hoverBorderColor: '#4cdec0',
      hoverBackgroundColor: '#4cdec0'
    }
  ]
};

// -----------------------|| BAR BASIC CHART ||-----------------------//

const BarBasicChart = () => {
  return <Bar options={options} data={data} />;
};

export default BarBasicChart;
