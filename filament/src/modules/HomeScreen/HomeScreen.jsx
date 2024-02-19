import { Box } from '@mui/material';
import React from 'react';
import FirstHomeScreen from './components/FirstHomeScreen/FirstHomeScreen';
import SecondHomeScreen from './components/SecondHomeScreen/SecondHomeScreen';
import ThirdHomeScreen from './components/ThirdHomeScreen/ThirdHomeScreen';
import FourthHomeScreen from './components/FourthHomeScreen/FourthHomeScreen';
import FifthHomeScreen from './components/FifthHomeScreen/FifthHomeScreen';
import SixthHomeScreen from './components/SixthHomeScreen/SixthHomeScreen';

const HomeScreen = () => {
  return (
    <Box>
      <FirstHomeScreen />
      <SecondHomeScreen />
      <ThirdHomeScreen />
      <FourthHomeScreen />
      <FifthHomeScreen />
      <SixthHomeScreen />
    </Box>
  );
};

export default HomeScreen;
