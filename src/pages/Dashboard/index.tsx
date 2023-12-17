/* eslint-disable @typescript-eslint/no-explicit-any */
import { Stack } from "@mui/material";
import Filter from "./filter";
import CustomBarChart from "../../components/Charts/BarChart";
import CustomLineChart from "../../components/Charts/LineChart";
import { useState } from "react";
import allData from "./../../assets/data.json";
import { useSearchParams } from "react-router-dom";

const convertToBarFormat = (data: any[]) => {
  const transformedData: any = [];
  const count: any = { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0 };
  data.forEach((item: any) => {
    count["A"] += item["A"];
    count["B"] += item["B"];
    count["C"] += item["C"];
    count["D"] += item["D"];
    count["E"] += item["E"];
    count["F"] += item["F"];
  });
  const keys = Object.keys(count);
  keys.forEach((key) => {
    transformedData.push({ name: key, value: count[key] });
  })
  return transformedData;
};

const convertToLineFormat = (data: any[], dateRange: { startDate: string, endDate: string } | null, dataKey: string | null) => {
  if (dateRange && dataKey) {
    const filteredData = data.filter((d) => d.Day >= dateRange.startDate && d.Day <= dateRange.endDate);
    return filteredData.map((d) => ({
      name: d.Day, [dataKey]: d[dataKey]
    }));
  }
  return [];
};


const Dashboard = () => {
  const [searchParams] = useSearchParams();

  const [dataKey, setDataKey] = useState<string | null>(null);
  const barData = convertToBarFormat(allData.data);
  const lineData = convertToLineFormat(allData.data, { startDate: searchParams.get('startDate') ?? '', endDate: searchParams.get('endDate') ?? '' }, dataKey);

  return (
    <>
      <Stack sx={{ width: "fit-content", marginLeft: "auto" }}>
        <Filter />
      </Stack>
      {/* Bar chart */}
      <CustomBarChart data={barData} setDataKey={setDataKey} />
      {/* Line chart */}
      {dataKey && <CustomLineChart data={lineData} dataKey="A" />}
    </>
  );
};

export default Dashboard;
