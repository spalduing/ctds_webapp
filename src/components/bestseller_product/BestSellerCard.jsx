import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import DISH from '../../utils/dishMapper';

const BestSellerCard = ({ product }) => {
  return (
    <Box sx={{ width: 300, height: 300 }}>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography variant="h6" component="div">
            {DISH[`${product.dish}`]}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Amount: {product.amount}
          </Typography>
          <Typography variant="h5">
            <b>Total billed: {product.totalBilled}</b>
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default BestSellerCard;
