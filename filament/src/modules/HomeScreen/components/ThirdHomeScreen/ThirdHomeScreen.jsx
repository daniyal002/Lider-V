import { Grid, Link, Typography } from '@mui/material';
import React from 'react';
import ProuductCategories from '../../../../components/ProuductCategories/ProuductCategories';

const ThirdHomeScreen = () => {
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
        Top Creators
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
        In commodo auctor eget congue sit. Ultrices eget pretium sit euismod mi
        id. Risus, aliquam odio posuere ac in in nisl sed augue.
      </Typography>
      <Link
        href="#"
        sx={{
          background: 'linear-gradient( #6847F5, #A95BF3)',
          color: '#f2f2f2',
          border: 'none',
          padding: '17px 50px',
          fontSize: '19px',
          fontWeight: '500',
          transition: '0.5s',
          textDecoration: 'none',
          '&:hover': {
            transition: '0.5s',
            background: 'linear-gradient(#A95BF3,#6847F5)',
          },
        }}
      >
        View all creators
      </Link>
      <Grid
        sx={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}
      >
        <ProuductCategories />
        <ProuductCategories />
        <ProuductCategories />
        <ProuductCategories />
        <ProuductCategories />
        <ProuductCategories />
      </Grid>
    </Grid>
  );
};

export default ThirdHomeScreen;
