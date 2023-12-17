/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface BarChartData {
  name: string;
  value: number;
}

interface BarChartProps {
  data: BarChartData[];
  setDataKey: (val: string) => void;
}

const CustomBarChart: React.FC<BarChartProps> = ({ data, setDataKey }) => {
  const maxValue = Math.max(...data.map((item) => item.value));
  const yAxisDomain = [0, maxValue * 1.2];
  const handleClick = (bar: any) => {
    const { name } = bar.payload;
    setDataKey(name);
  };
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={data} layout="vertical">
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis type="number" />
        <YAxis dataKey="name" type="category" domain={yAxisDomain} />
        <Tooltip />
        <Legend />
        <Bar dataKey="value" fill="#f1f277" onClick={handleClick} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default CustomBarChart;
