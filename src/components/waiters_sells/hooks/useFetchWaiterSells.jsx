import { useState, useEffect, useContext } from 'react';
import { CreateQueriesContext } from '../../queries_context/QueriesContext';
import fetchWaiterSells from '../utils/fetchWaiterSells';

const useFetchWaiterSells = () => {
  const { isButtonSearchClicked, startDate, endDate } =
    useContext(CreateQueriesContext);

    const searchButtonIsClicked = isButtonSearchClicked[0];
    const rStartDate = startDate[0];
    const rEndDate = endDate[0];

  const [waiters, setWaiters] = useState([]);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    fetchWaiterSells(rStartDate,rEndDate,setWaiters,setIsFetching)
  }, [searchButtonIsClicked]);

  return { waiters, isFetching };
};

export default useFetchWaiterSells;