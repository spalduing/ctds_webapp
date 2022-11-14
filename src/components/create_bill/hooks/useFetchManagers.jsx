import { useEffect, useState } from 'react';
import axios from 'axios';

const useFetchManagers = () => {
    const [managers, setManagers] = useState([]);
    const [isFetching, setIsFetching] = useState(true);
    useEffect(() => {
      axios
        .get(`/managers`)
        .then((response) => {
          setManagers(response.data);
        })
        .catch((e) => {
          console.error(e);
        })
        .finally(() => {
          setIsFetching(false);
        });
    }, []);

    return [managers, isFetching];
  };

  export default useFetchManagers;