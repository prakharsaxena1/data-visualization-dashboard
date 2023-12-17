/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from "react";
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import DateRangePicker from "./CustomDateRangePicker";
import dayjs from 'dayjs';
import { Divider, IconButton, Stack } from "@mui/material";
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { useSearchParams } from "react-router-dom";

const genderOptions = [
  { label: 'Male', value: 'male' },
  { label: 'Female', value: 'female' },
]

type optionsType = {
  label: string;
  value: string;
}

const Filter = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [genderOption, setGenderOption] = React.useState<optionsType | null>(null);
  const [dateRange, setDateRange] = React.useState({ startDate: '', endDate: '' });

  React.useEffect(() => {
    if (searchParams.has('gender')) {
      setGenderOption(genderOptions.find((option) => option.value === searchParams.get('gender')) || null);
    }
    if (searchParams.has('startDate')) {
      setDateRange({ startDate: searchParams.get('startDate') ?? '', endDate: searchParams.get('endDate') ?? '' });
    }
  }, [searchParams]);

  const handleDateChange = (startDate: dayjs.Dayjs, endDate: dayjs.Dayjs) => {
    setDateRange({ startDate: startDate.format("DD-MM-YYYY"), endDate: endDate.format("DD-MM-YYYY") })
  };

  const applyFilter = () => {
    if ((dateRange.startDate && dateRange.endDate) || genderOption) {
      setSearchParams({ ...searchParams, ...dateRange, gender: genderOption?.value ?? undefined });
      setDrawerOpen(false);
    }
  }
  const clearFilter = () => {
    setGenderOption(null);
    setDateRange({ startDate: '', endDate: '' });
    setSearchParams({});
    setDrawerOpen(false);
  }

  return (
    <div>
      <React.Fragment>
        <IconButton onClick={() => setDrawerOpen(true)} sx={{ m: 1 }}>
          <FilterAltIcon />
        </IconButton>
        <SwipeableDrawer
          anchor="right"
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
          onOpen={() => setDrawerOpen(true)}
        >
          <Stack direction="column" spacing={2}
            sx={{ width: 400, p: 2 }}
          >
            <Typography variant="h5" component="h5" gutterBottom>
              Filter
            </Typography>
            <Divider />
            <DateRangePicker onChange={handleDateChange} />
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={genderOptions}
              getOptionLabel={(option) => option.label}
              isOptionEqualToValue={(op, val) => op.value === val.value}
              value={genderOption}
              onChange={(_event: React.SyntheticEvent<Element, Event>, newValue: optionsType | null) => {
                if (newValue) {
                  setGenderOption(newValue);
                }
              }}
              renderInput={(params) => <TextField {...params} label="Gender" />}
            />
            <Button variant="contained" onClick={applyFilter}>Apply</Button>
            <Button variant="outlined" onClick={clearFilter}>Clear</Button>
          </Stack>
        </SwipeableDrawer>
      </React.Fragment>
    </div>
  );
};

export default Filter;
