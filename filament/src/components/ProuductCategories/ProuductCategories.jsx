import { Grid, Link, Typography } from '@mui/material';
import React from 'react';

const ProuductCategories = () => {
  return (
    <Grid
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '0 12px',
      }}
    >
      <Grid
        sx={{
          background: 'rgba(134, 155, 223, 0.14)',
          display: 'flex',
          flexDirection: 'column',
          width: '306px',
          padding: '50px 0',
          border: '2px solid rgba(83, 84, 136, 0.4)',
          borderRadius: '14px',
          alignItems: 'center',
        }}
      >
        <img
          src="./img/clients-item-lg1.jpg"
          alt=""
          width="140"
          style={{
            borderRadius: '50%',
          }}
        />
        <Typography
          sx={{
            fontSize: '22px',
            color: '#fff',
          }}
        >
          Loura Chin
        </Typography>
      </Grid>
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
          transform: 'translateY(-50%)',
          '&:hover': {
            transform: 'translateY(-60%)',
            background: 'linear-gradient(#A95BF3,#6847F5)',
          },
        }}
      >
        Get Started
      </Link>
    </Grid>
  );
};

export default ProuductCategories;
