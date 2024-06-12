import React from 'react';

// third party
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

export const options = {
  barValueSpacing: 20,
  maintainAspectRatio: false,
  responsive: true,
  plugins: {
    legend: {
      position: 'top'
    }
  },
  interaction: {
    intersect: false
  }
};

const labels = [0, 1, 2, 3, 4, 5, 6];

export const data = {
  labels,
  datasets: [
    {
      label: 'D1',
      data: [85, 55, 70, 50, 75, 45, 60],
      fill: 'end',
      borderWidth: 1,
      borderColor: '#41dbbc',
      backgroundColor: '#41dbbc',
      hoverborderColor: '#41dbbc',
      hoverBackgroundColor: '#41dbbc',
      tension: 0.5
    }
  ]
};

// -----------------------|| LINE FILL END CHART ||-----------------------//

const LineFillEndChart = () => {
  return <Line height={300} options={options} data={data} />;
};

export default LineFillEndChart;
