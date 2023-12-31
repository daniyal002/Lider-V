import React from 'react';
import { Grid } from '@mui/material';
import StepByStepItems from './StepByStepItems/StepByStepItems';
const StepByStep = () => {
  const listAdvantages = [
    {
      header: 'Совершенствование технологического процесса',
      text: 'Мы следим за тенденциями в отрасли и следуем за повышающимися требованиями к качеству нити, реинвестируя прибыль в новое оборудование и инновации',
      imgSrc: './img/quality.svg',
      reverse: false,
    },
    {
      header: 'Точность в производстве',
      text: 'Вся наша продукция проходит двойной технический контроль перед выпуском её на реализацию',
      imgSrc: './img/cogs.svg',
      reverse: true,
    },
    {
      header: 'Нас рекомендуют',
      text: 'Честные отзывы о нашей продукции на маркетплейсах',
      imgSrc: './img/recommended.svg',
      reverse: false,
    },
    {
      header: 'Лучшие цены',
      text: 'Мы даём самую выгодную цену за нить такого высокого качества!',
      imgSrc: './img/price.svg',
      reverse: true,
    },
  ];

  return (
    <Grid
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        rowGap: '80px',
        columnGap: '60px',
        maxWidth: '1000px',
        margin: '100px auto',
        padding: '0 20px',
        position: 'relative',
        '@media(min-width:1000px)': {
          '&:before': {
            content: '""',
            //   border: '0.1px solid white',
            position: 'absolute',
            top: '0',
            left: '50%',
            width: '2px',
            height: '100%',
            backgroundColor: 'white',
          },
        },
      }}
    >
      {listAdvantages.map((item) => (
        <StepByStepItems
          header={item.header}
          text={item.text}
          imgSrc={item.imgSrc}
          reverse={item.reverse}
        />
      ))}
    </Grid>
  );
};

export default StepByStep;
