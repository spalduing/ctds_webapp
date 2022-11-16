import { useContext, useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import DISH from '../../utils/dishMapper';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { CreateFormContext } from '../create_bill/Context';

const DishSelect = () => {
  const context = useContext(CreateFormContext);
  const managerId = context.manager[0];
  const [dish, setDish] = useState('');
  const [dishValue, setDishValue] = useState(0.0);

  const detailBills = context.detailBills;
  const [dishes, setDishes] = detailBills;
  const handleObjectChange = (event) => {
    setDish(event.target.value);
  };
  const handleDishValueChange = (event) => {
    setDishValue(event.target.value);
  };

  const addDish = () => {
    // IMPORTANT_COMMENT:  +dish and +dishValue is a way to cast them into numbers
    const newDish = { managerId, dish: +dish, value: +dishValue };
    setDishes([...dishes, newDish]);
  };
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          '& > :not(style)': {
            m: 1,
            width: 128,
            height: 56,
          },
        }}
      >
        <FormControl fullWidth>
          <InputLabel id={`select-simple-dish`}>Dish</InputLabel>
          <Select
            labelId={`select-simple-dish`}
            id={`select-dish`}
            value={dish}
            label="Manager"
            onChange={handleObjectChange}
          >
            {Object.keys(DISH).map((key) => {
              return <MenuItem value={key}>{`${DISH[key]}`}</MenuItem>;
            })}
          </Select>
        </FormControl>
        <br />
        <br />
        <TextField
          id="consumptionFilter"
          label="Enter a value"
          variant="outlined"
          type="number"
          defaultValue={dishValue}
          onChange={handleDishValueChange}
        />
        <br />
        <br />
        <Button variant="contained" onClick={addDish}>
          Add Dish
        </Button>
      </Box>
      <br />
      <br />
      <List
        sx={{
          width: '100%',
          maxWidth: 360,
          bgcolor: 'background.blue',
          position: 'relative',
          overflow: 'auto',
          maxHeight: 270,
          '& ul': { padding: 0 },
        }}
        subheader={<li />}
      >
        {dishes.length === 0 ? (
          <></>
        ) : (
          dishes.map((dish) => {
            return (
              <ListItem>
                <ListItemText primary={`${DISH[dish.dish]}`} />
              </ListItem>
            );
          })
        )}
      </List>
    </>
  );
};

export default DishSelect;
