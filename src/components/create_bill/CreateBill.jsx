import useFetchCustomers from './hooks/useFetchCustomers';
import useFetchWaiters from './hooks/useFetchWaiters';
import useFetchTables from './hooks/useFetchTables';
import useFetchManagers from './hooks/useFetchManagers';
import FormSkeleton from '../skeletons/FormSkeleton';
import shouldDisplay from './hooks/shouldDisplay';
import CreateBillForm from './CreateBillForm';

import Context from './Context';

const CreateBill = () => {
  const [customers, isFetchingCustomers] = useFetchCustomers();
  const [waiters, isFetchingWaiters] = useFetchWaiters();
  const [tables, isFetchingTables] = useFetchTables();
  const [managers, isFetchingManagers] = useFetchManagers();

  return shouldDisplay(
    isFetchingCustomers,
    isFetchingWaiters,
    isFetchingTables,
    isFetchingManagers
  ) ? (
    <FormSkeleton />
  ) : (
    <Context>
      <section>
        <h2>Register A Bill</h2>
        <p>
          Form to register a bill.
        </p>
        <CreateBillForm
          customers={customers}
          waiters={waiters}
          tables={tables}
          managers={managers}
        />
      </section>
    </Context>
  );
};

export default CreateBill;
