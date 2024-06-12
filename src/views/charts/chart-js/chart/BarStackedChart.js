import React from 'react';

// third party
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

export const options = {
  responsive: true,
  scales: {
    x: {
      stacked: true
    },
    y: {
      stacked: true
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
      backgroundColor: '#62abff'
    },
    {
      label: 'Data 2',
      data: [30, 52, 65, 65],
      backgroundColor: '#ffc777'
    }
  ]
};

// -----------------------|| BAR STACKED CHART ||-----------------------//

const BarStackedChart = () => {
  return <Bar options={options} data={data} />;
};

export default BarStackedChart;
