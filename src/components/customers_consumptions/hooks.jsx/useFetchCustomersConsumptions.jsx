import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetchCustomersConsumptions = (givenValue = 0.0) => {
  const [customers, setCustomers] = useState([]);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    axios
      .get(`/customers/consumptions?givenValue=${givenValue}`)
      .then((response) => {
        setCustomers(response.data);
      })
      .catch((e) => {
        console.error(e);
      })
      .finally(() => {
        setIsFetching(false);
      });
  }, [givenValue]);

  return { customers, isFetching };
};

export default useFetchCustomersConsumptions;
