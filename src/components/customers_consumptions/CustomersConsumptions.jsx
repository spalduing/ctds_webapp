import * as React from 'react';


import useFetchCustomersConsumptions from './hooks.jsx/useFetchCustomersConsumptions';
import CustomersConsumptionTable from './CustomersConsumptionTable';
import TableSkeleton from '../skeletons/TableSkeleton';

const CustomersConsumptions = ({givenValue}) => {
  const { customers, isFetching } = useFetchCustomersConsumptions(givenValue);

  return isFetching ? (
    <TableSkeleton />
  ) : (
      <CustomersConsumptionTable customers={customers} />
  );
};



export default CustomersConsumptions;
