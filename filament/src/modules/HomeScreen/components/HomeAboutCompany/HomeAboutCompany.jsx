import { Button, Grid } from '@mui/material';
import React from 'react';
import StepByStep from './StepByStep/StepByStep';
import HomeNameCompany from './HomeNameCompany/HomeNameCompany';
import AdvantagesLists from './AdvantagesLists/AdvantagesLists';

const HomeAboutCompany = () => {
  return (
    <Grid
      container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'center',
      }}
    >
      <HomeNameCompany />
      <AdvantagesLists />
      <StepByStep />
    </Grid>
  );
};

export default HomeAboutCompany;
