import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetchWaiterSells = () => {
  const [waiters, setWaiters] = useState([]);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    axios
      .get(`/waiters/totalSells`)
      .then((response) => {
        setWaiters(response.data);
      })
      .catch((e) => {
        console.error(e);
      })
      .finally(() => {
        setIsFetching(false);
      });
  }, []);

  return { waiters, isFetching };
};

export default useFetchWaiterSells;