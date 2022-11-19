import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetchBills = () => {
  const [bills, setBills] = useState([]);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    axios
      .get(`/bills`)
      .then((response) => {
        setBills(response.data);
      })
      .catch((e) => {
        console.error(e);
      })
      .finally(() => {
        setIsFetching(false);
      });
  }, []);

  return { bills, isFetching };
};

export default useFetchBills;
