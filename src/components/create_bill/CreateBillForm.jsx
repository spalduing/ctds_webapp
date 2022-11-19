import { useContext } from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import PersonSelect from '../person_select/PersonSelect';
import TableSelect from '../table_select/TableSelect';

import DishSelect from '../dish_select/DishSelect';
import registerBill from './utils/registerBill';

import { CreateFormContext } from './Context';

const CreateBillForm = ({ customers, waiters, tables, managers }) => {
  const context = useContext(CreateFormContext);
  const customerId = context.customer[0];
  const waiterId = context.waiter[0];
  const managerId = context.manager[0];
  const tableId = context.table[0];
  const detail_Bills = context.detailBills[0];

  const payload = {
    customerId,
    waiterId,
    managerId,
    tableId,
    detail_Bills,
  };

  return (
    <Box sx={{ minWidth: 120, width: 450 }}>
      <Stack spacing={2}>
        <PersonSelect options={managers} label={'manager'} />
        <PersonSelect options={customers} label={'customer'} />
        <PersonSelect options={waiters} label={'waiter'} />
        <TableSelect options={tables} label={'table'} />
        <DishSelect />
        <Box sx={{ width: 128, height: 56 }}>
          <Button
            variant="contained"
            onClick={() => {
              registerBill(payload);
            }}
          >
            Register Bill
          </Button>
        </Box>
      </Stack>
    </Box>
  );
};

export default CreateBillForm;
