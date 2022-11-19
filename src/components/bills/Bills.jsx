import useFetchBills from './hooks/useFetchBills';
import BillsTable from './BillsTable';
import TableSkeleton from '../skeletons/TableSkeleton';

const Bills = () => {
  const { bills, isFetching } = useFetchBills();

  return isFetching ? (
    <TableSkeleton />
  ) : (
    <section>
      <h2>Retaurant's Bills</h2>
      <p>List of the bills of the restaurant.</p>
      <BillsTable bills={bills} />
    </section>
  );
};

export default Bills;
