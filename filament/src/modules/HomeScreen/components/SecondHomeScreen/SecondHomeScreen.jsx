import { Grid, Typography } from '@mui/material';
import React from 'react';
import ProductCard from '../../../../components/ProductCard/ProductCard';

const SecondHomeScreen = () => {
  return (
    <Grid
      sx={{
        maxWidth: '1320px',
        margin: '0 auto',
      }}
    >
      <Typography>Collect Some NFTs</Typography>
      <Grid
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: ' wrap',
        }}
      >
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </Grid>
    </Grid>
  );
};

export default SecondHomeScreen;
