import React from 'react';
import HomeSlaider from './components/HomeSlaider/HomeSlaider';
import { Box, Grid, Typography } from '@mui/material';
import ProductCategories from '../../components/ProductCategories/ProductCategories';
import ProductSliderWrapper from './components/ProductSliderWrapper/ProductSliderWrapper';
import ProductCard from '../../components/ProductCard/ProductCard';

const HomeScreen = () => {
  return (
    <div>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          rowGap: '30px',
        }}
      >
        <HomeSlaider />
        <Grid
          sx={{
            display: 'flex',
            flexDirection: 'column',
            rowGap: '100px',
            margin: '20px',
          }}
        >
          <Grid
            sx={{ display: 'flex', flexDirection: 'column', rowGap: '20px' }}
          >
            <Typography variant="h3" color="white">
              Категории
            </Typography>
            <Grid
              sx={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent:'center',
                rowGap: '20px',
                columnGap: '20px',
              }}
            >
              <ProductCategories />
              <ProductCategories />
              <ProductCategories />
              <ProductCategories />
            </Grid>
          </Grid>

          <Grid
            sx={{ display: 'flex', flexDirection: 'column', rowGap: '20px' }}
          >
            <Typography variant="h3" color="white">
              Популярные товары
            </Typography>
            <Grid
              sx={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent:'center',
                rowGap: '20px',
                columnGap: '20px',
              }}
            >
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default HomeScreen;
