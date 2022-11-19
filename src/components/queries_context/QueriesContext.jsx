import { createContext, useState } from 'react';
import moment from 'moment/moment';

export const CreateQueriesContext = createContext(null);

const QueriesContext = ({ children }) => {
  const dateStart = moment('2022-01-01').format('YYYY/MM/DD');
  const dateEnd = moment('2022-11-19').format('YYYY/MM/DD');

  const [isClicked, setIsClicked] = useState(false);

  const [startDate, setStartDate] = useState(`${dateStart}`);
  const [endDate, setEndDate] = useState(`${dateEnd}`);

  const formFields = {
    isButtonSearchClicked: [isClicked, setIsClicked],
    startDate: [startDate, setStartDate],
    endDate: [endDate, setEndDate],
  };

  return (
    <CreateQueriesContext.Provider value={formFields}>
      {children}
    </CreateQueriesContext.Provider>
  );
};

export default QueriesContext;
