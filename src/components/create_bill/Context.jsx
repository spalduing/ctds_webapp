import { createContext, useState } from 'react';

export const CreateFormContext = createContext(null);

const Context = ({ children }) => {
  const [manager, setManager] = useState('');
  const [customer, setCustomer] = useState('');
  const [waiter, setWaiter] = useState('');
  const [table, setTable] = useState('');
  const [detailBills, setDetailBills] = useState([]);

  const formFields = {
    manager: [ manager, setManager] ,
    customer: [ customer, setCustomer] ,
    waiter: [ waiter, setWaiter] ,
    table: [ table, setTable],
    detailBills: [detailBills, setDetailBills]

  };

  return (
    <CreateFormContext.Provider value={formFields}>
      {children}
    </CreateFormContext.Provider>
  );
};

export default Context;
