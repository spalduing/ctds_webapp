import axios from 'axios';

const fetchBestSellerProduct = async (
  setProduct,
  setIsFetching,
  rStartDate,
  rEndDate
) => {
  await axios
    .get(`/detail_bills/bestseller?startDate=${rStartDate}&endDate=${rEndDate}`)
    .then((response) => {
      setProduct(response.data);
    })
    .catch((e) => {
      console.error(e);
    })
    .finally(() => {
      setIsFetching(false);
    });
};

export default fetchBestSellerProduct;
