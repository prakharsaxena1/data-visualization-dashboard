import { Stack } from "@mui/material";
import Filter from "./filter";

const Dashboard = () => {
  return (
    <>
      <Stack sx={{ width: 'fit-content', marginLeft: 'auto' }}>
        <Filter />
      </Stack>

    </>
  )
}

export default Dashboard;
