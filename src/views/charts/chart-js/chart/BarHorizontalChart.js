import React from 'react';

// third party
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

export const options = {
  indexAxis: 'y',
  barValueSpacing: 20,
  elements: {
    bar: {
      borderWidth: 2
    }
  },
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
      borderColor: '#69aeff',
      backgroundColor: '#69aeff'
    },
    {
      label: 'Data 2',
      data: [30, 52, 65, 65],
      borderColor: '#ff7a90',
      backgroundColor: '#ff7a90'
    }
  ]
};

// -----------------------|| BAR HORIZONTAL CHART ||-----------------------//

const BarHorizontalChart = () => {
  return <Bar options={options} data={data} />;
};

export default BarHorizontalChart;
