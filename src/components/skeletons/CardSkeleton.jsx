import * as React from 'react';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

const CardSkeleton = () => {
  return (
    <Box sx={{ width: 300 }}>

      <Stack spacing={1}>
        <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
        <Skeleton variant="rectangular" width={210} height={20} />
        <Skeleton variant="rounded" width={210} height={40} />
      </Stack>
    </Box>
  );
};

export default CardSkeleton;
