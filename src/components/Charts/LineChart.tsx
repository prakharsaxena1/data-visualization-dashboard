/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

// interface LineChartData {
//   name: string | number;
//   value: number;
// }

interface LineChartProps {
  data: any[];
  dataKey: string;
}

const CustomLineChart: React.FC<LineChartProps> = ({ data, dataKey }) => {
  const maxValue = Math.max(...data.map((item) => item.value));
  const maxYAxisValue = maxValue * 1.2;

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis domain={[0, maxYAxisValue]} />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey={dataKey} stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default CustomLineChart;
