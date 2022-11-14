import { useEffect, useState } from 'react';
import axios from 'axios';

const useFetchTables = () => {
    const [tables, setTables] = useState([]);
    const [isFetching, setIsFetching] = useState(true);
    useEffect(() => {
      axios
        .get(`/tables`)
        .then((response) => {
          setTables(response.data);
        })
        .catch((e) => {
          console.error(e);
        })
        .finally(() => {
          setIsFetching(false);
        });
    }, []);

    return [tables, isFetching];
  };

  export default useFetchTables;