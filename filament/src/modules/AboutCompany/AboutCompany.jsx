import { Grid, Typography } from '@mui/material';
import React from 'react';
import OurProduction from './components/OurProduction/OurProduction';
import styled from '@emotion/styled';
import Certificates from './components/Certificates/Certificates';

const AboutCompany = () => {
  const ButtonNav = styled.button`
    font-size: 14px;
    text-align: left;
    color: #fff;
    padding: 20px;
    background-color: unset;
    border: 1px solid black;
    width: 80%;
    cursor: pointer;
    text-align: center;
  `;

  return (
    <Grid
      sx={{
        maxWidth: '1440px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        rowGap: '10px',
      }}
    >
      <Typography
        sx={{
          fontSize: '25px',
          color: '#FFDC73',
          fontWeight: '700',
        }}
      >
        Сейчас ПК «НИТ» — это:
      </Typography>
      <Grid
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          columnGap: '30px',
        }}
      >
        <Grid
          sx={{
            width: '200px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            ['@media(max-width: 1149px)']: {
              width: '100%',
              alignItems: 'center',
            },
          }}
        >
          <ButtonNav>Наше производство</ButtonNav>
          <ButtonNav>Сертификаты</ButtonNav>
          <ButtonNav>Политика конфиденциальности </ButtonNav>
          <ButtonNav>Реквизиты </ButtonNav>
        </Grid>
        <Grid
          sx={{
            width: '80%',
            ['@media(max-width: 1149px)']: {
              width: '100%',
            },
          }}
        >
          {/* <OurProduction /> */}
          <Certificates />

        </Grid>
      </Grid>
    </Grid>
  );
};

export default AboutCompany;
