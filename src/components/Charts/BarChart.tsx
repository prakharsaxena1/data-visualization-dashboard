import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface BarChartData {
  name: string;
  value: number;
}

interface BarChartProps {
  data: BarChartData[];
}

const CustomBarChart: React.FC<BarChartProps> = ({ data }) => {
  const maxValue = Math.max(...data.map((item) => item.value)); // Find the maximum value in the data

  // Add padding after the maximum value for the Y-axis domain
  const yAxisDomain = [0, maxValue * 1.2]; // Adjust the multiplier (1.2 in this case) for the desired padding

  return (
    <ResponsiveContainer width="80%" height={400}>
      <BarChart data={data} layout="vertical">
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis type="number" />
        <YAxis dataKey="name" type="category" domain={yAxisDomain} /> {/* Apply the yAxisDomain to the YAxis */}
        <Tooltip />
        <Legend />
        <Bar dataKey="value" fill="#f1f277" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default CustomBarChart;
