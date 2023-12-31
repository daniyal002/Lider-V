import { Grid, Typography } from '@mui/material';
import React from 'react';

const HomeNameCompany = () => {
  return (
    <Grid
      sx={{
        backgroundImage: "url('/img/homeImgBg.jpg')",
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        margin: '0',
      }}
    >
      <Grid
        sx={{
          display: 'flex',
          flexDirection: 'column',
          rowGap: '190px',
          padding: '106px 40px 50px',

          '@media (max-width: 768px)': {
            rowGap: '120px',
            padding: '50px 40px 30px',
          },
          '@media (max-width: 500px)': {
            rowGap: '50px',
            padding: '50px 40px 20px',
          },
        }}
      >
        <Typography
          sx={{
            fontSize: '32px',
            color: 'white',
            fontWeight: '600',
            textAlign: 'center',
            maxWidth: '800px',
            margin: '0 auto',
            '@media (max-width: 768px)': {
              fontSize: '24px',
            },
            '@media (max-width: 550px)': {
              fontSize: '20px',
            },
            '@media (max-width: 500px)': {
              fontSize: '16px',
            },

            '@media (max-width: 400px)': {
              fontSize: '16px',
              maxWidth: '300px',
            },
          }}
        >
          ООО “Производственная компания Лидер-В” Передовой производитель
          материалов для промышленной и бытовой 3D Печати{' '}
        </Typography>
        <Typography
          sx={{
            fontSize: '20px',
            color: 'white',
            maxWidth: '690px',
            textAlign: 'center',
            margin: '0 auto',
            '@media (max-width: 768px)': {
              fontSize: '20px',
            },
            '@media (max-width: 550px)': {
              fontSize: '16px',
            },
            '@media (max-width: 500px)': {
              fontSize: '14px',
            },

            '@media (max-width: 400px)': {
              fontSize: '12px',
              maxWidth: '300px',
            },
          }}
        >
          Производственная компания "Лидер-В” начала свой путь в 2014 году когда
          3Д печать только начинала набирать обороты.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default HomeNameCompany;
