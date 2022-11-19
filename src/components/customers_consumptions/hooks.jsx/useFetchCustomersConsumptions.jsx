import { useState, useEffect, useContext } from 'react';
import { CreateQueriesContext } from '../../queries_context/QueriesContext';
import fetchCustomersConsumptions from '../utils/fetchCustomersConsumptions';

const useFetchCustomersConsumptions = (givenValue = 0.0) => {
  const { isButtonSearchClicked, startDate, endDate } =
    useContext(CreateQueriesContext);

  const searchButtonIsClicked = isButtonSearchClicked[0];
  const rStartDate = startDate[0];
  const rEndDate = endDate[0];

  const [customers, setCustomers] = useState([]);
  const [isFetching, setIsFetching] = useState(true);

  const fetchParameters = {
    givenValue,
    rStartDate,
    rEndDate,
    setCustomers,
    setIsFetching,
  };

  useEffect(() => {
    fetchCustomersConsumptions(fetchParameters);
  }, [givenValue, searchButtonIsClicked]);

  return { customers, isFetching };
};

export default useFetchCustomersConsumptions;
