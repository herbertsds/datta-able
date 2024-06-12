import React from 'react';

// third party
import { Chart as ChartJS, LinearScale, PointElement, Tooltip, Legend } from 'chart.js';
import { Radar } from 'react-chartjs-2';

ChartJS.register(LinearScale, PointElement, Tooltip, Legend);

export const data = {
  labels: [0, 1, 2, 3, 4, 5, 6],
  datasets: [
    {
      label: 'D1',
      data: [60, 60, 45, 80, 60, 80, 45],
      fill: true,
      borderWidth: 2,
      borderColor: '#469cff',
      backgroundColor: 'transparent',
      hoverborderColor: '#469cff',
      hoverBackgroundColor: '#transparent'
    },
    {
      label: 'D2',
      data: [40, 80, 40, 65, 60, 50, 95],
      fill: true,
      borderWidth: 2,
      borderColor: '#ff627c',
      backgroundColor: 'transparent',
      hoverborderColor: '#ff627c',
      hoverBackgroundColor: 'transparent'
    },
    {
      label: 'D3',
      data: [20, 40, 80, 60, 85, 60, 20],
      fill: true,
      borderWidth: 2,
      borderColor: '#3fdbbc',
      backgroundColor: 'transparent',
      hoverborderColor: '#3fdbbc',
      hoverBackgroundColor: 'transparent'
    }
  ]
};

// -----------------------|| RADAR AREA CHART3 ||-----------------------//

const RadarAreaChart3 = () => {
  return (
    <Radar
      data={data}
      height={300}
      options={{
        maintainAspectRatio: false
      }}
    />
  );
};

export default RadarAreaChart3;
