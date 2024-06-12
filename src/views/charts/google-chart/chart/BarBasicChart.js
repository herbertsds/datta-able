import React, { useContext } from 'react';
import Chart from 'react-google-charts';
import { ConfigContext } from '../../../../contexts/ConfigContext';

const BarBasicChart = () => {
  const configContext = useContext(ConfigContext);
  const { layoutType } = configContext.state;
  return (
    <Chart
      width="100%"
      height="300px"
      chartType="BarChart"
      loader={<div>Loading Chart</div>}
      data={[
        ['City', '2010 Population', '2000 Population'],
        ['New York City, NY', 8175000, 8008000],
        ['Los Angeles, CA', 3792000, 3694000],
        ['Chicago, IL', 2695000, 2896000],
        ['Houston, TX', 2099000, 1953000],
        ['Philadelphia, PA', 1526000, 1517000]
      ]}
      options={{
        title: 'Population of Largest U.S. Cities',
        chartArea: { width: '50%' },
        isStacked: true,
        tooltip: { isHtml: true },
        hAxis: {
          title: 'Total Population',
          minValue: 0
        },
        vAxis: {
          title: 'City'
        },
        colors: ['#A389D4', '#04a9f5'],
        backgroundColor: layoutType === 'dark' ? '#323437' : '#fff'
      }}
      rootProps={{ 'data-testid': '3' }}
    />
  );
};

export default BarBasicChart;
