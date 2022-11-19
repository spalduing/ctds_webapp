import axios from 'axios';

import { successToast, errorToast } from '../../../notifications/toast-notifications';
import 'react-toastify/dist/ReactToastify.css';

const POST_SUCCESS = 'Bill created at: ';
const POST_FAILED = 'Something went wrong!';

const registerBill = (payload) => {
  axios
    .post(`/bills/registerBill`, payload)
    .then((response) => {
      successToast(`${POST_SUCCESS} ${response.data.createdAt}`);
    })
    .catch((error) => {
      errorToast(`${POST_FAILED} : \n ${error}`);
      console.error(error);
    })
    .finally(() => {});
};

export default registerBill;
