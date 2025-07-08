import ReactECharts from 'echarts-for-react';

interface GaugeChartProps {
  value?: number;
  className?: string;
}

const GaugeChart = ({ value = 65, className = '' }: GaugeChartProps) => {
  const option = {
    series: [
      {
        type: 'gauge',
        startAngle: 220,
        endAngle: -45,
        min: 0,
        max: 100,
        pointer: {
          show: false,
        },
        progress: {
          show: true,
          width: 5,
          roundCap: true,
          itemStyle: {
            color: '#f09668',
          },
        },
        axisLine: {
          lineStyle: {
            width: 5,
          },
        },
        axisTick: {
          show: false,
        },
        splitLine: {
          show: false,
        },
        axisLabel: {
          show: false,
        },
        detail: {
          valueAnimation: true,
          fontSize: 15,
          fontWeight: 'bold',
          offsetCenter: [0, '0%'],
          formatter: `{value}`,
        },
        data: [
          {
            value,
          },
        ],
      },
    ],
  };

  return (
    <ReactECharts
      option={option}
      className={className}
      style={{ height: 80, width: 80 }}
    />
  );
};

export default GaugeChart;
