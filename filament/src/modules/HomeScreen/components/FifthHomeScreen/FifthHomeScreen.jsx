import React from 'react';
import Promo from '../../../../components/Promo/Promo';
import { Grid, Typography } from '@mui/material';

const FifthHomeScreen = () => {
  return (
    <Grid
      sx={{
        display: 'flex',
        flexDirection: 'column',
        rowGap: '30px',
        alignItems: 'center',
        maxWidth: '1320px',
        margin: '0 auto',
        padding: '133px 0 ',
      }}
    >
      <Typography
        sx={{
          fontSize: '55px',
          color: '#fff',
          fontWeight: '900',
        }}
      >
        NFTs Collections
      </Typography>
      <Typography
        sx={{
          fontSize: '19px',
          color: '#fff',
          fontWeight: '300',
          textAlign: 'center',
          lineHeight: '2',
          width: ' 50%',
          marginBottom: '24px',
        }}
      >
        Ultrices eget pretium sit euismod mi id posuere ac in in nisl sed augue.
      </Typography>

      <Grid
        sx={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          width: '100%',
        }}
      >
        <Promo />
        <Promo />
        <Promo />
        <Promo />
      </Grid>
    </Grid>
  );
};

export default FifthHomeScreen;
