import React from 'react';

// third party
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from 'chart.js';
import { Radar } from 'react-chartjs-2';

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

export const data = {
  labels: [0, 1, 2, 3, 4, 5, 6],
  datasets: [
    {
      label: 'D1',
      data: [60, 60, 45, 80, 60, 80, 45],
      fill: true,
      borderWidth: 4,
      borderColor: 'transparent',
      backgroundColor: '#489dff',
      hoverborderColor: '#489dff',
      hoverBackgroundColor: '#489dff'
    },
    {
      label: 'D2',
      data: [40, 80, 40, 65, 60, 50, 95],
      fill: true,
      borderWidth: 0,
      borderColor: 'transparent',
      backgroundColor: '#ff627c',
      hoverborderColor: '#ff627c',
      hoverBackgroundColor: '#ff627c'
    },
    {
      label: 'D3',
      data: [20, 40, 80, 60, 85, 60, 20],
      fill: true,
      borderWidth: 4,
      borderColor: 'transparent',
      backgroundColor: '#40dbbc',
      hoverborderColor: '#40dbbc',
      hoverBackgroundColor: '#40dbbc'
    }
  ]
};

// -----------------------|| RADAR AREA CHART1 ||-----------------------//

const RadarAreaChart1 = () => {
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

export default RadarAreaChart1;
