import { useEffect, useState } from 'react';
import axios from 'axios';

const useFetchWaiters = () => {
  const [waiters, setWaiters] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  useEffect(() => {
    axios
      .get(`/waiters`)
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

  return [waiters, isFetching];
};

export default useFetchWaiters;
