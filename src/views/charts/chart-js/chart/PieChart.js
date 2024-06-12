import React from 'react';

// third party
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Data 1', 'Data 2', 'Data 3'],
  datasets: [
    {
      data: [30, 30, 40],
      backgroundColor: ['#439bff', '#39daba', '#ffc065'],
      hoverBackgroundColor: ['#439bff', '#39daba', '#ffc065']
    }
  ]
};

// -----------------------|| PIE CHART ||-----------------------//

const PieChart = () => {
  return (
    <Pie
      data={data}
      height={300}
      options={{
        maintainAspectRatio: false
      }}
    />
  );
};

export default PieChart;
