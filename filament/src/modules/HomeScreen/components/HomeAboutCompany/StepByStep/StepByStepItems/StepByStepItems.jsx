import { CardMedia, Grid } from '@mui/material';
import React from 'react';
import styled from '@emotion/styled';
import AdvantageCard from './AdvantageCard/AdvantageCard';

const StepByStepItems = ({ header, text, imgSrc, reverse }) => {
  const EmptyGrid = styled.div`
    width: 450px;
    max-height: 200px;
    @media (max-width: 1000px) {
      display: none;
    }
  `;
  return (
    <Grid
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: reverse ? 'row-reverse' : 'row',
        columnGap: '15px',
        alignItems: 'flex-start',
        '@media(max-width:1000px)': {
          flexDirection: 'column',
        },
      }}
    >
      <EmptyGrid></EmptyGrid>

      <CardMedia
        component="img"
        height="18"
        image="./icon/EllipseIcon.svg"
        alt="EllipseIcon"
        sx={{
          width: '18px',
          '@media(max-width:1000px)': {
            display: 'none',
          },
        }}
      />

      <AdvantageCard imgSrc={imgSrc} header={header} text={text} />
    </Grid>
  );
};

export default StepByStepItems;
