import * as React from 'react';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';

const TableSkeleton = () => {
  return (
    <Box sx={{ width: 300 }}>

      <Skeleton animation="wave" variant="rectangular" height={40}/>
      <Skeleton />
      <Skeleton animation={false} />
      <Skeleton animation="wave" />
    </Box>
  );
};

export default TableSkeleton;
