import { Grid } from '@mui/material';
import React from 'react';
import FirstСooperationScreen from './components/FirstCooperationScreen/FirstCooperationScreen';
import FormСooperation from './components/FormCooperation/FormCooperation';

const Сooperation = () => {
  return (
    <Grid
      sx={{
        maxWidth: '1320px',
        margin: '0 auto',
        padding: '133px 20px ',
        display: 'flex',
        flexDirection: 'column',
        rowGap: '50px',
      }}
    >
      <FirstСooperationScreen />
      <FormСooperation />
    </Grid>
  );
};

export default Сooperation;
