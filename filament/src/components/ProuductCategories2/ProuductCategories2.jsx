import { Grid, Typography } from '@mui/material';
import React from 'react';

const ProuductCategories2 = () => {
  return (
    <Grid
      sx={{
        display: 'flex',
        maxWidth: '306px',
        flexDirection: 'column',
        background: 'rgba(134, 155, 223, 0.14) !important',
        border: '2px solid rgba(83, 84, 136, 0.4)',
        padding: '16px',
        rowGap: '5px',
      }}
    >
      <img
        src="./img/nft-item2.jpg"
        alt=""
        style={{
          width: '100%',
        }}
      />
      <Typography
        sx={{
          color: '#A95BF3',
          fontSize: '19px',
          fontWeight: '300',
        }}
      >
        Art
      </Typography>
      <Typography
        sx={{
          color: '#fff',
          fontSize: '22px',
          fontWeight: '800',
        }}
      >
        Best NFTs arts collections from best artists{' '}
      </Typography>
    </Grid>
  );
};

export default ProuductCategories2;
