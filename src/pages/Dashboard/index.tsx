import { Stack } from "@mui/material";
import Filter from "./filter";
import CustomBarChart from "../../components/Charts/BarChart";
import CustomLineChart from "../../components/Charts/LineChart";

const lineData = [
  {
    "name": "01-10-2022",
    "A": 22
  },
  {
    "name": "02-10-2022",
    "A": 17
  },
  {
    "name": "03-10-2022",
    "A": 24
  },
  {
    "name": "04-10-2022",
    "A": 13
  },
]

const Dashboard = () => {
  return (
    <>
      <Stack sx={{ width: 'fit-content', marginLeft: 'auto' }}>
        <Filter />
      </Stack>
      {/* Bar chart */}
      <CustomBarChart data={[{ name: 'A', value: 30 }, { name: 'B', value: 40 }, { name: 'C', value: 67 }]} />
      {/* Line chart */}
      <CustomLineChart data={lineData} dataKey="A" />
    </>
  )
}

export default Dashboard;
