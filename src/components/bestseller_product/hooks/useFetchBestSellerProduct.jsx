import { useState, useEffect, useContext } from 'react';

import { CreateQueriesContext } from '../../queries_context/QueriesContext';
import fetchBestSellerProduct from '../utils/fetchBestSellerProduct';

const useFetchBestSellerProduct = () => {
  const { isButtonSearchClicked, startDate, endDate } =
    useContext(CreateQueriesContext);

  const searchButtonIsClicked = isButtonSearchClicked[0];
  const rStartDate = startDate[0];
  const rEndDate = endDate[0];

  const [product, setProduct] = useState({});
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    fetchBestSellerProduct(setProduct, setIsFetching, rStartDate, rEndDate);
  }, [searchButtonIsClicked]);

  return { product, isFetching };
};

export default useFetchBestSellerProduct;
