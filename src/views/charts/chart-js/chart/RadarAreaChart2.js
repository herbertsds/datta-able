import React from 'react';

// third party
import { Chart as ChartJS, RadialLinearScale, ArcElement, Tooltip, Legend } from 'chart.js';
import { Radar } from 'react-chartjs-2';

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

export const data = {
  labels: [0, 1, 2, 3, 4, 5, 6],
  datasets: [
    {
      label: 'D1',
      data: [60, 60, 45, 80, 60, 80, 45],
      fill: true,
      borderWidth: 2,
      borderColor: 'transparent',
      backgroundColor: '#ff5a75',
      hoverborderColor: '#ff5a75',
      hoverBackgroundColor: '#ff5a75'
    },
    {
      label: 'D2',
      data: [40, 80, 40, 65, 60, 50, 95],
      fill: true,
      borderWidth: 0,
      borderColor: 'transparent',
      backgroundColor: '#50a1ff',
      hoverborderColor: '#50a1ff',
      hoverBackgroundColor: '#50a1ff'
    },
    {
      label: 'D3',
      data: [20, 40, 80, 60, 85, 60, 20],
      fill: true,
      borderWidth: 2,
      borderColor: 'transparent',
      backgroundColor: '#ffbe61',
      hoverborderColor: '#ffbe61',
      hoverBackgroundColor: '#ffbe61'
    }
  ]
};

// -----------------------|| RADAR AREA CHART2 ||-----------------------//

const RadarAreaChart2 = () => {
  return (
    <Radar
      data={data}
      options={{
        maintainAspectRatio: false
      }}
      height={300}
    />
  );
};

export default RadarAreaChart2;
