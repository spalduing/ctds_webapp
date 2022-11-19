import { useContext } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

import { CreateQueriesContext } from '../queries_context/QueriesContext';
import moment from 'moment';

const DateSelect = () => {
  const { isButtonSearchClicked, startDate, endDate } =
    useContext(CreateQueriesContext);

  const [searchButtonIsClicked, setSearchButtonIsClicked] = isButtonSearchClicked;
  const [rStartDate, setRStartDate] = startDate;
  const [rEndDate, setREndDate] = endDate;

  const handleStartDateChange = (newValue) => {
  const newDateStart = moment(newValue).format('YYYY/MM/DD');

    setRStartDate(newDateStart);
  };
  const handleEndDateChange = (newValue) => {
  const newDateEnd = moment(newValue).format('YYYY/MM/DD');

    setREndDate(newDateEnd);
  };

  const handleSearch = () => {
    const newState = !searchButtonIsClicked;
    setSearchButtonIsClicked(newState);
  };
  return (
      <Box
        sx={{
          display: 'flex',
          alignContent: 'center',
          alignItems: 'center',
          flexWrap: 'wrap',
          '& > :not(style)': {
            m: 1,
            width: 200,
            height: 56,
          },
        }}
      >
          <LocalizationProvider dateAdapter={AdapterMoment}>
            <DesktopDatePicker
              label="Start Date"
              inputFormat="YYYY/MM/DD"
              value={rStartDate}
              onChange={handleStartDateChange}
              renderInput={(params) => <TextField {...params} />}
            />
            <DesktopDatePicker
              label="End Date"
              inputFormat="YYYY/MM/DD"
              value={rEndDate}
              onChange={handleEndDateChange}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>

          <Button variant="contained" onClick={handleSearch}>
            Display Info By Date
          </Button>
      </Box>
  );
};

export default DateSelect;
