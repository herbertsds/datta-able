import React, { useContext } from 'react';
import Chart from 'react-google-charts';
import { ConfigContext } from '../../../../contexts/ConfigContext';

const PieSliceVisibilityChart = () => {
  const configContext = useContext(ConfigContext);
  const { layoutType } = configContext.state;
  return (
    <Chart
      width="100%"
      height="300px"
      chartType="PieChart"
      loader={<div>Loading Chart</div>}
      data={[
        ['Pizza', 'Popularity'],
        ['Pepperoni', 33],
        ['Hawaiian', 26],
        ['Mushroom', 22],
        ['Sausage', 10],
        ['Anchovies', 9]
      ]}
      options={{
        title: 'Popularity of Types of Pizza',
        sliceVisibilityThreshold: 0.2,
        colors: ['#04a9f5', '#1de9b6', '#A389D4', '#899FD4'],
        backgroundColor: layoutType === 'dark' ? '#323437' : '#fff'
      }}
      rootProps={{ 'data-testid': '7' }}
    />
  );
};

export default PieSliceVisibilityChart;
