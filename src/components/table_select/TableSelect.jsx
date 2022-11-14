import { useContext, useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import { CreateFormContext } from '../create_bill/Context';

const TableSelect = ({ options, label }) => {
    const context = useContext(CreateFormContext)[`${label}`];
  const [option, setOption] = context;
  const handleOptionChange = (event) => {
    setOption(event.target.value);
  };
  return (
    <FormControl fullWidth>
      <InputLabel id={`select-simple-${label}`}>{label}</InputLabel>
      <Select
        labelId={`select-simple-${label}`}
        id={`select-${label}`}
        value={option}
        label="Manager"
        onChange={handleOptionChange}
      >
        {options.map((option) => {
          return (
            <MenuItem
              value={option.tableId}
            >{`${option.name}`}</MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};

export default TableSelect;
