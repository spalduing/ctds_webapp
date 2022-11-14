import { useContext } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import PersonSelect from '../person_select/PersonSelect';
import TableSelect from '../table_select/TableSelect';

import DishSelect from '../dish_select/DishSelect';
import registerBill from './hooks/registerBill';

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

  console.log('customerId: ', customerId);
  console.log('waiterId: ', waiterId);
  console.log('managerId: ', managerId);
  console.log('tableId: ', tableId);
  console.log('detailBills: ', detail_Bills);

  return (
    <Box sx={{ minWidth: 120, width: 450 }}>
      <PersonSelect options={managers} label={'manager'} />
      <br />
      <br />
      <PersonSelect options={customers} label={'customer'} />
      <br />
      <br />
      <PersonSelect options={waiters} label={'waiter'} />
      <br />
      <br />
      <TableSelect options={tables} label={'table'} />
      <br />
      <br />
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
    </Box>
  );
};

export default CreateBillForm;
