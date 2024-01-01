import { Button, Grid } from '@mui/material';
import React from 'react';
import StepByStep from '../../../../components/StepByStep/StepByStep';
import HomeNameCompany from './HomeNameCompany/HomeNameCompany';
import AdvantagesLists from '../../../../components/AdvantagesLists/AdvantagesLists';

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
      <AdvantagesLists gradient />
      <StepByStep widthBlock={'1000'} />
    </Grid>
  );
};

export default HomeAboutCompany;
