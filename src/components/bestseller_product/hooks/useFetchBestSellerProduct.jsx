import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetchBestSellerProduct = () => {
    const [product, setProduct] = useState({});
    const [isFetching, setIsFetching] = useState(true);

    useEffect(() => {
      axios
        .get('/detail_bills/bestseller')
        .then((response) => {
          setProduct(response.data);
        })
        .catch((e) => {
          console.error(e);
        })
        .finally(() => {
          setIsFetching(false);
        });
    }, []);

    return { product, isFetching };
  };

  export default useFetchBestSellerProduct;