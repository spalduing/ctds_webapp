import axios from 'axios';

const fetchWaiterSells = async (
  rStartDate,
  rEndDate,
  setWaiters,
  setIsFetching
) => {
  await axios
    .get(`/waiters/totalSells?startDate=${rStartDate}&endDate=${rEndDate}`)
    .then((response) => {
      setWaiters(response.data);
    })
    .catch((e) => {
      console.error(e);
    })
    .finally(() => {
      setIsFetching(false);
    });
};

export default fetchWaiterSells;
