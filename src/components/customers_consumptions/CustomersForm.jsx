import TextField from '@mui/material/TextField';
import CustomersConsumptions from './CustomersConsumptions';
import { useState } from 'react';

const CustomersForm = () => {
  const [givenValue, setGivenValue] = useState(0.0);
  return (
    <section>
      <h2>Customers consumptions</h2>
      <p>
        Provide a value to deploy a list of custumers with consumtions greater
        or equal than a given value
      </p>
      <TextField
        id="consumptionFilter"
        label="Enter a value"
        variant="outlined"
        type="number"
        defaultValue={givenValue}
        onChange={(e) => {
          setGivenValue(e.target.value);
        }}
      />

      <CustomersConsumptions givenValue={givenValue} />
    </section>
  );
};

export default CustomersForm;
