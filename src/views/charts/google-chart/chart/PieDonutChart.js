import React, { useContext } from 'react';
import Chart from 'react-google-charts';
import { ConfigContext } from '../../../../contexts/ConfigContext';

const PieDonutChart = () => {
  const configContext = useContext(ConfigContext);
  const { layoutType } = configContext.state;
  return (
    <Chart
      width="100%"
      height="300px"
      chartType="PieChart"
      loader={<div>Loading Chart</div>}
      data={[
        ['Task', 'Hours per Day'],
        ['Work', 11],
        ['Eat', 2],
        ['Commute', 2],
        ['Watch TV', 2],
        ['Sleep', 7]
      ]}
      options={{
        title: 'My Daily Activities',
        pieHole: 0.4,
        colors: ['#1dc4e9', '#1de9b6', '#3ebfea', '#A389D4', '#899FD4'],
        backgroundColor: layoutType === 'dark' ? '#323437' : '#fff'
      }}
      rootProps={{ 'data-testid': '3' }}
    />
  );
};

export default PieDonutChart;
