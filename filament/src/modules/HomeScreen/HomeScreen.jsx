import React from 'react';
import HomeSlaider from './components/HomeSlaider/HomeSlaider';
import { Box, Grid, Typography } from '@mui/material';
import ProductCategories from '../../components/ProductCategories/ProductCategories';
import ProductCard from '../../components/ProductCard/ProductCard';
import HomeAboutCompany from './components/HomeAboutCompany/HomeAboutCompany';
import BlockContactCompany from '../../components/BlockContactCompany/BlockContactCompany';
import HomeRetail from './components/HomeRetail/HomeRetail';

const HomeScreen = () => {
  return (
    <div>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          rowGap: '30px',
          margin: '0 auto',
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
                justifyContent: 'center',
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
                justifyContent: 'center',
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
        <HomeAboutCompany />
        <BlockContactCompany />
        <HomeRetail />
      </Box>
    </div>
  );
};

export default HomeScreen;
