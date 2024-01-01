import { Grid, Typography } from '@mui/material';
import React from 'react';
import Certificate from './Certificate/Certificate';

const Certificates = () => {
  return (
    <Grid
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '20px',
      }}
    >
      <Certificate />
      <Certificate />
      <Certificate />
      <Certificate />
    </Grid>
  );
};

export default Certificates;
