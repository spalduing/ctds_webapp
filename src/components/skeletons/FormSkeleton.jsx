import * as React from 'react';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';

const FormSkeleton = () => {
  return (
    <Box sx={{ height: 650, width: 300 }}>

      <Skeleton animation="wave" variant="rectangular" width={40} height={40}/>
      <Skeleton animation="wave" variant="rectangular" width={40} height={40}/>
      <Skeleton animation="wave" variant="rectangular" width={40} height={40}/>
      <br />
      <Skeleton animation="wave" variant="rectangular" width={8} height={8}/>
    </Box>
  );
};

export default FormSkeleton;
