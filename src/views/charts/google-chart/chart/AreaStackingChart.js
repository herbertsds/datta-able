import React, { useContext } from 'react';
import Chart from 'react-google-charts';
import { ConfigContext } from '../../../../contexts/ConfigContext';

const AreaStackingChart = () => {
  const configContext = useContext(ConfigContext);
  const { layoutType } = configContext.state;
  return (
    <Chart
      width="100%"
      height="300px"
      chartType="AreaChart"
      loader={<div>Loading Chart</div>}
      data={[
        ['Year', 'Sales', 'Expenses'],
        ['2013', 1000, 400],
        ['2014', 1170, 460],
        ['2015', 660, 1120],
        ['2016', 1030, 540]
      ]}
      options={{
        isStacked: true,
        legend: { position: 'top', maxLines: 3 },
        vAxis: { minValue: 0 },
        tooltip: { isHtml: true },
        colors: ['#1de9b6', '#A389D4'],
        backgroundColor: layoutType === 'dark' ? '#323437' : '#fff'
      }}
      rootProps={{ 'data-testid': '2' }}
    />
  );
};

export default AreaStackingChart;
