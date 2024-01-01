import { Grid, Typography } from '@mui/material';
import React from 'react';
import styled from '@emotion/styled';

const AdvantagesLists = ({gradient}) => {
  const GridAboutCompany = styled.div`
    display: flex;
    align-items: flex-start;
    column-gap: 18px;
  `;

  const TypographyAboutCompany = styled.span`
    width: 310px;
    font-size: ${(props) => props.fontSize};
    color: #ffffff;
    @media (max-width: 500px) {
      width: 200px;
    }
    @media (max-width: 500px) {
      width: 150px;
    }
  `;

  const listAboutCompany = [
    {
      text: 'Зарегистрированная торговая марка “Лидер-В”',
      imgSrc: './icon/homeIcon1.svg',
    },
    {
      text: 'сертификаты соответствия;',
      imgSrc: './icon/homeIcon2.svg',
    },
    {
      text: '1000 квадратных метра площадей производства',
      imgSrc: './icon/homeIcon3.svg',
    },
    {
      text: 'протоколы испытаний и безопасности',
      imgSrc: './icon/homeIcon4.svg',
    },
    {
      text: 'производственные мощности для выпуска до 25 тонн готовой продукции ежемесячно',
      imgSrc: './icon/homeIcon5.svg',
    },
    {
      text: 'сертификат признания инновационным предприятием',
      imgSrc: './icon/homeIcon6.svg',
    },
    {
      text: 'склад с готовой продукцией в среднем 30 тыс. кг',
      imgSrc: './icon/homeIcon7.svg',
    },
    {
      text: 'и самое главное, признание тысячи покупателей, приобретающих нашу продукцию ежедневно на протяжении уже несколько лет',
      imgSrc: './icon/homeIcon8.svg',
    },
    {
      text: 'цех контроля, фасовки и сборки',
      imgSrc: './icon/homeIcon9.svg',
    },
  ];

  return (
    <Grid
      sx={{
        background: gradient ?  'linear-gradient(180deg, #7373D9 0%, #313186 100%)' : '#313186' ,
        display: 'flex',
        flexDirection: 'column',
        alignContent: 'center',
        width: '100%',
      }}
    >
      <Grid
        sx={{
          display: 'flex',
          flexDirection: 'column',
          rowGap: '70px',
          margin: '0 auto',
        }}
      >
        <Typography
          sx={{
            fontSize: '32px',
            color: 'white',
            fontWeight: '600',
            textAlign: 'center',
          }}
        >
          Сейчас ПК «Лидер-В» — это:
        </Typography>
        <Grid
          sx={{
            display: 'flex',
            alignItems: 'center',
            padding: '10px',
            flexWrap: 'wrap',
            maxWidth: '1000px',
            justifyContent: 'space-between',
            rowGap: '15px',
            '@media(max-width:768px)': {
              flexDirection: 'column',
              alignItems: 'center',
            },
          }}
        >
          {listAboutCompany.map((item) => (
            <GridAboutCompany>
              <img src={item.imgSrc} alt={item.text} width="16" />
              <TypographyAboutCompany>{item.text}</TypographyAboutCompany>
            </GridAboutCompany>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default AdvantagesLists;
