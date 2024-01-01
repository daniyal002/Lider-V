import { CardMedia, Grid } from '@mui/material';
import React from 'react';
import styled from '@emotion/styled';
import AdvantageCard from './AdvantageCard/AdvantageCard';

const StepByStepItems = ({ header, text, imgSrc, reverse, widthBlock }) => {
  const EmptyGrid = styled.div`
    width: 450px;
    max-height: 200px;
    @media (max-width: ${widthBlock}px) {
      display: none;
    }
  `;

  const StepByStepItemsDiv = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: ${reverse ? 'row-reverse' : 'row'};
    column-gap: 15px;
    align-items: flex-start;
    @media (max-width: ${widthBlock}px) {
      flexdirection: column;
    }
  `;

    
  return (
    <StepByStepItemsDiv>
      <EmptyGrid></EmptyGrid>

      <CardMedia
        component="img"
        height="18"
        image="./icon/EllipseIcon.svg"
        alt="EllipseIcon"
        sx={{
          width: '18px',

    ['@media(max-width:'+ widthBlock +'px)']: {
      display: 'none',
    },
        }}
      />

      <AdvantageCard imgSrc={imgSrc} header={header} text={text} />
    </StepByStepItemsDiv>
  );
};

export default StepByStepItems;
