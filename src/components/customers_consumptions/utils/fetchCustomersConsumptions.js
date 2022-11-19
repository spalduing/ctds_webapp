import axios from 'axios';

const fetchCustomersConsumptions = async ({givenValue,rStartDate,rEndDate,setCustomers,setIsFetching}) =>{
  await  axios
      .get(`/customers/consumptions?givenValue=${givenValue}&startDate=${rStartDate}&endDate=${rEndDate}`)
      .then((response) => {
        setCustomers(response.data);
      })
      .catch((e) => {
        console.error(e);
      })
      .finally(() => {
        setIsFetching(false);
      });

}

export default fetchCustomersConsumptions;