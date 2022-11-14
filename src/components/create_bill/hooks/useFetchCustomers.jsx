import { useEffect, useState } from 'react';
import axios from 'axios';

const useFetchCustomers = () => {
    const [customers, setCustomers] = useState([]);
    const [isFetching, setIsFetching] = useState(true);
    useEffect(() => {
      axios
        .get(`/customers`)
        .then((response) => {
          setCustomers(response.data);
        })
        .catch((e) => {
          console.error(e);
        })
        .finally(() => {
          setIsFetching(false);
        });
    }, []);

    return [customers, isFetching];
  };

  export default useFetchCustomers;