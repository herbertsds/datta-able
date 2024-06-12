import React from 'react';

// third party
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Data 1', 'Data 2', 'Data 3'],
  datasets: [
    {
      data: [30, 30, 40],
      backgroundColor: ['#459cff', '#3adaba', '#ff6a83'],
      hoverBackgroundColor: ['#459cff', '#3adaba', '#ff6a83']
    }
  ]
};

// -----------------------|| DOUGHNUT CHART ||-----------------------//

const DoughnutChart = () => {
  return (
    <Doughnut
      data={data}
      height={300}
      options={{
        maintainAspectRatio: false
      }}
    />
  );
};

export default DoughnutChart;
