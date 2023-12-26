import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Button, Grid, Typography } from '@mui/material';
import React from 'react';

const HomeAboutCompany = () => {
  const GridAboutCompany = styled.div`
    display: flex;
    align-items: ${(props) => props.alignItems};
    column-gap: 20px;
    background-color: #7373d9;
    border-radius: 10px;
    padding: 5px;
    @media (max-width: 782px) {
      width: 80%;
    }
  `;

  const TypographyAboutCompany = styled.span`
    width: 300px;
    font-size: ${(props) => props.fontSize};
    color: #808080;
    @media (max-width: 500px) {
      width: 200px;
    }
    @media (max-width: 500px) {
      width: 150px;
    }
    color: #ffdc73;
  `;

  const WrapperAboutCompany = styled.div`
    width: ${(props) => props.Width};
    display: flex;
    flex-direction: row;
    row-gap: 10px;
    column-gap: 5px;
    flex-wrap: wrap;
    margin-bottom: 24px;
    @media (max-width: 1000px) {
      width: 100%;
    }
    @media (max-width: 782px) {
      justify-content: center;
    }
  `;

  const listAboutCompany = [
    {
      text: 'Торговая марка “Лидер-В”',
      imgSrc: './icon/homeIcon1.png',
    },
    {
      text: 'сертификаты соответствия;',
      imgSrc: './icon/homeIcon2.png',
    },
    {
      text: '1000 квадратных метра площадей производства',
      imgSrc: './icon/homeIcon3.png',
    },
    {
      text: 'протоколы испытаний и безопасности',
      imgSrc: './icon/homeIcon4.png',
    },
    {
      text: 'производственные мощности для выпуска до 25 тонн готовой продукции ежемесячно',
      imgSrc: './icon/homeIcon5.png',
    },
    {
      text: 'сертификат признания инновационным предприятием',
      imgSrc: './icon/homeIcon6.png',
    },
    {
      text: 'склад с готовой продукцией в среднем 30 тыс. кг',
      imgSrc: './icon/homeIcon7.png',
    },
    {
      text: 'и самое главное, признание тысячи покупателей, приобретающих нашу продукцию ежедневно на протяжении уже несколько лет',
      imgSrc: './icon/homeIcon8.png',
    },
    {
      text: 'цех контроля, фасовки и сборки',
      imgSrc: './icon/homeIcon9.png',
    },
  ];

  const listAdvantages = [
    {
      header: 'Совершенствование технологического процесса',
      text: 'Мы следим за тенденциями в отрасли и следуем за повышающимися требованиями к качеству нити, реинвестируя прибыль в новое оборудование и инновации',
      imgSrc: './icon/homeIcon11.png',
    },
    {
      header: 'Точность в производстве',
      text: 'Вся наша продукция проходит двойной технический контроль перед выпуском её на реализацию',
      imgSrc: './icon/homeIcon12.png',
    },
    {
      header: 'Нас рекомендуют',
      text: 'Честные отзывы о нашей продукции на маркетплейсах',
      imgSrc: './icon/homeIcon13.png',
    },
    {
      header: 'Лучшие цены',
      text: 'Мы даём самую выгодную цену за нить такого высокого качества!',
      imgSrc: './icon/homeIcon14.png',
    },
  ];

  return (
    <Grid
      container
      sx={{
        display: 'flex',
        '@media (max-width: 768px)': {
          flexDirection: 'column',
          alignItems: 'center',
        },
      }}
    >
      <Grid
        sx={{
          padding: '10px',
          width: '100%',
        }}
      >
        <Typography
          sx={{
            fontSize: '10px',
            textTransform: 'uppercase',
            color: '#ffdc73',
            marginBottom: '16px',
          }}
        >
          О КОМПАНИИ
        </Typography>

        <Typography
          sx={{
            fontSize: '32px',
            lineHeight: '40px',
            '@media (max-width: 500px)': {
              fontSize: '25px',
              lineHeight: '30px',
            },
            '@media (max-width: 500px)': {
              fontSize: '20px',
              lineHeight: '25px',
            },
            marginBottom: '16px',
            color: '#fff',
          }}
        >
          ООО "Производственная компания "Лидер-В" - передовой производитель
          материалов для промышленной и бытовой 3D печати
        </Typography>

        <Grid
          sx={{
            width: '50%',
            padding: '10px',
            '@media (max-width: 425px)': {
              width: '80%',
            },
          }}
        >
          <img
            style={{ width: '100%', borderRadius: '50%' }}
            src="./img/homeImage1.jpg"
            alt="Производство нитей"
          />
        </Grid>

        <Typography
          sx={{
            fontSize: '14px',
            lineHeight: '24px',
            marginBottom: '35px',
            color: '#fff',
            maxWidth: '700px',
          }}
        >
          Производственная компания "Лидер-В” начала свой путь в 2014 году,
          когда 3Д печать только начинала набирать обороты.
        </Typography>

        <Typography
          sx={{
            fontSize: '26px',
            fontWeight: '600',
            '@media (max-width: 600px)': {
              fontSize: '24px',
            },
            marginBottom: '25px',
            color: '#fff',
          }}
        >
          Сейчас ПК «Лидер-В» — это:
        </Typography>
        <WrapperAboutCompany>
          {listAboutCompany.map((item) => (
            <GridAboutCompany alignItems={'center'}>
              <img src={item.imgSrc} alt="" />
              <TypographyAboutCompany fontSize={'14px'}>
                {item.text}
              </TypographyAboutCompany>
            </GridAboutCompany>
          ))}
        </WrapperAboutCompany>
        <WrapperAboutCompany Width={'80%'}>
          {listAdvantages.map((item) => (
            <GridAboutCompany alignItems={'flex-start'}>
              <img src={item.imgSrc} alt="" width="48" />
              <Grid
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  rowGap: '8px',
                }}
              >
                <TypographyAboutCompany fontSize={'16px'}>
                  {item.header}
                </TypographyAboutCompany>
                <TypographyAboutCompany fontSize={'14px'}>
                  {item.text}
                </TypographyAboutCompany>
              </Grid>
            </GridAboutCompany>
          ))}
        </WrapperAboutCompany>
        <Grid
          sx={{
            width: '100%',
            display: 'flex',
            '@media (max-width: 782px)': {
              justifyContent: 'center',
            },
          }}
        >
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#ffdc73',
              color: '#7373d9',
              fontWeight: '600',
              '@media (max-width: 782px)': {
                width: '80%',
              },
            }}
          >
            Узнать подробнее
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default HomeAboutCompany;
