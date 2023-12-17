import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { ClickAwayListener } from '@mui/base/ClickAwayListener';
import { Dayjs } from 'dayjs';
import dayjs from 'dayjs';
import { useState } from 'react';
import { Button, Paper } from '@mui/material';

interface DateRangePickerProps {
  onChange: (startDate: Dayjs, endDate: Dayjs) => void;
}

const DateRangePicker: React.FC<DateRangePickerProps> = ({ onChange }) => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [startDate, setStartDate] = useState<Dayjs | null>(null);
  const [endDate, setEndDate] = useState<Dayjs | null>(null);

  const handleStartDateChange = (date: string) => {
    setStartDate(dayjs(date));
    if (endDate && dayjs(date).isAfter(endDate)) {
      setEndDate(null);
    }
  };

  const handleEndDateChange = (date: string) => {
    setEndDate(dayjs(date));
    if (startDate && dayjs(date).isBefore(startDate)) {
      setStartDate(null);
    }
  };

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'date-range-picker' : undefined;

  const handleApply = () => {
    if (startDate && endDate) {
      onChange(startDate, endDate);
      handleClose();
    }
  };

  return (
    <React.Fragment>
      <TextField
        id={id}
        fullWidth
        onClick={handleClick}
        value={
          startDate && endDate
            ? `${startDate.format('YYYY-MM-DD')} - ${endDate.format('YYYY-MM-DD')}`
            : ''
        }
        label="Select Date Range"
      />
      {open && (
        <ClickAwayListener onClickAway={() => handleApply()}>
          <Box sx={{ mt: 2, p: 2, bgcolor: 'background.paper' }} component={Paper}>
            <TextField
              type="date"
              label="Start Date"
              fullWidth
              onChange={(e) => handleStartDateChange(e.target.value)}
              value={startDate ? startDate.format('YYYY-MM-DD') : ''}
              sx={{ mt: 1 }}
              />
            <TextField
              type="date"
              fullWidth
              onChange={(e) => handleEndDateChange(e.target.value)}
              value={endDate ? endDate.format('YYYY-MM-DD') : ''}
              sx={{ mt: 1 }}
            />
            <Box sx={{ mt: 2 }}>
              <Button variant="contained" onClick={handleApply}>Apply</Button>
            </Box>
          </Box>
        </ClickAwayListener>
      )}
    </React.Fragment>
  );
};

export default DateRangePicker;
