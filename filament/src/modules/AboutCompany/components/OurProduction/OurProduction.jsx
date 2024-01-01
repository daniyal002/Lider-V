import { Grid, Typography } from '@mui/material';
import React from 'react';
import AdvantagesLists from '../../../../components/AdvantagesLists/AdvantagesLists';
import StepByStep from '../../../../components/StepByStep/StepByStep';
import styled from '@emotion/styled';

const OurProduction = () => {
  const ListItem = styled.li`
    color: white;
    font-size: 16px;
  `;

  return (
    <>
      <Grid
        sx={{
          backgroundImage: "url('/img/homeImgBg.jpg')",
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          display: 'flex',
          justifyContent: 'flex-end',
          ['@media(max-width: 1149px)']: {
            justifyContent: 'center',
          },
        }}
      >
        <Typography
          sx={{
            padding: '15px',
            fontSize: '28px',
            color: 'white',
            textAlign: 'right',
            fontWeight: '600',
            maxWidth: '800px',
            ['@media(max-width: 1149px)']: {
              textAlign: 'center',
            },
          }}
        >
          ООО “Производственная компания Лидер-В” Передовой производитель
          материалов для промышленной и бытовой 3D Печати
        </Typography>
      </Grid>
      {/* <iframe
        src="https://www.youtube.com/watch?v=hAcb5XCrWQw"
        width="100%"
        height="100%"
      ></iframe> */}
      <Typography
        sx={{
          fontSize: '16px',
          color: 'white',
          fontWeight: '300',
          margin: '40px 0',
          ['@media(max-width: 1149px)']: {
            textAlign: 'center',
          },
        }}
      >
        Производственная компания "НИТ” начала свой путь в 2014 году, когда 3Д
        печать только начинала набирать обороты.
      </Typography>
      <AdvantagesLists />
      <StepByStep widthBlock={'1230'} />

      <Grid
        sx={{
          display: 'flex',
        }}
      >
        <Grid
          sx={{
            width: '70%',
          }}
        >
          <Typography
            sx={{
              color: 'white',
              fontSize: '30px',
            }}
          >
            К 2023 году производственные мощности со всей необходимой
            инфраструктурой позволяют выпускать до 30 000 кг. готовой продукции
            ежемесячно. Всегда в наличии на складе каждого цвета от 200 до 500
            кг. по видам пластика.
          </Typography>
          <Typography
            sx={{
              color: 'white',
              fontSize: '16px',
              fontWeight: '300',
            }}
          >
            Для изготовления традиционных видов филамента, таких, как ABS, PLA,
            Petg, Hips мы отбираем высококачественное сырье от мировых
            производителей.
          </Typography>
          <Typography
            sx={{
              color: 'white',
              fontSize: '16px',
              fontWeight: '300',
            }}
          >
            Для изготовления промышленных композитов, таких, как MID (на основе
            полиамида 6), POK (аналог полиамида с превосходящими физическими
            свойствами), TPV и TPE (серия Flex материалов со свойствами
            масло-бензо устойчивостью, морозостойкостью), металлонаполненные —
            мы используем собственную методику получения полимерных композиций с
            регулируемым уровнем показателей для 3Д печати FDM.{' '}
          </Typography>
        </Grid>

        <Grid
          sx={{
            width: '30%',
          }}
        >
          <img
            src="./img/aboutCompany.jpg"
            alt="aboutCompany"
            style={{
              width: '100%',
            }}
          />
        </Grid>
      </Grid>

      <Grid>
        <Typography
          sx={{
            fontSize: '30px',
            color: 'white',
            fontWeight: '600',
          }}
        >
          Приоритеты
        </Typography>
        <ul>
          <ListItem>
            Всегда высококачественное сырьё для наших композитов
          </ListItem>
          <ListItem>
            Сотни испытаний в процессе поиска идеального соотношения химических
            и физических свойств
          </ListItem>
          <ListItem>
            Многократное модернизирование производственного цикла под нужны
            заказчика
          </ListItem>
        </ul>
        <Typography
          sx={{
            fontSize: '30px',
            color: 'white',
            fontWeight: '600',
          }}
        >
          Приглашаем Вас к взаимовыгодному сотрудничеству.
        </Typography>
      </Grid>
    </>
  );
};

export default OurProduction;
