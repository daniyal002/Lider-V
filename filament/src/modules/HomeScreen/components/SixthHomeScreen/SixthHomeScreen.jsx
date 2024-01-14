import { Grid, Link, Typography } from '@mui/material';
import React from 'react';
import ProuductCategories2 from '../../../../components/ProuductCategories2/ProuductCategories2';

const SixthHomeScreen = () => {
  return (
    <Grid
      sx={{
        maxWidth: '1320px',
        margin: '0 auto',
        padding: '133px 0',
        display: 'flex',
        flexDirection: 'column',
        rowGap: '35px',
      }}
    >
      <Grid
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Typography
          sx={{
            fontSize: '55px',
            color: '#F2F2F2',
            fontWeight: '900',
          }}
        >
          Our Latest Blog
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
          Read our blogs
        </Link>
      </Grid>

      <Grid
        sx={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          rowGap: '20px',
        }}
      >
        <ProuductCategories2 />
        <ProuductCategories2 />
        <ProuductCategories2 />
        <ProuductCategories2 />
        <ProuductCategories2 />
        <ProuductCategories2 />
      </Grid>
    </Grid>
  );
};

export default SixthHomeScreen;
