import { Grid, Typography } from '@mui/material';
import React from 'react';

const AdvantageCard = ({ header, text, imgSrc, opacity }) => {
  return (
    <Grid
      sx={{
        maxHeight: '200px',
        width: '450px',
        backgroundColor: '#7373D9',
        padding: '12px 14px 22px',
        borderRadius: '15px',
        boxShadow: '-1px 1px 13.8px 4px rgba(255, 255, 255, 0.82)',
        display: 'flex',
        flexDirection: 'column',
        rowGap: '5px',
        opacity: opacity ? '0' : '1',
        '@media(max-width:525px)': {
          maxWidth: '350px',
          maxHeight: '200px',
          width: '100%'
        },
      }}
    >
      <img src={imgSrc} alt={header} width="35" />
      <Grid
        sx={{
          display: 'flex',
          flexDirection: 'column',
          rowGap: '10px',
        }}
      >
        <Typography
          sx={{
            fontSize: '14px',
            color: 'white',
          }}
        >
          {header}
        </Typography>
        <Typography
          sx={{
            fontSize: '12px',
            color: 'white',
          }}
        >
          {text}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default AdvantageCard;
