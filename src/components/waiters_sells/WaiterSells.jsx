import useFetchWaiterSells from "./hooks/useFetchWaiterSells";
import WaitersSellsTable from "./WaiterSellsTable";
import TableSkeleton from "../skeletons/TableSkeleton";

const WaiterSells = () => {
const { waiters, isFetching } = useFetchWaiterSells();

  return isFetching ? (
    <TableSkeleton />
  ) : (
    <section>
        <h2>Waiter's Sells</h2>
        <p>List of the total sells for each waiter (even the ones with no sells).</p>
        <WaitersSellsTable waiters={waiters} />
    </section>
  );
};

export default WaiterSells;
