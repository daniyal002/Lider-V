import { Grid, Link, Typography } from '@mui/material';
import React from 'react';

const BlockContactCompany = () => {
  const contact = [
    {
      imgSrc: './img/location.svg',
      header: 'Волгоград',
      text: 'ул. Авторемонтная, 11В',
    },
    {
      imgSrc: './img/phone.svg',
      header: 'Телефон:',
      text: '8 (968) 283 43 41',
      link: true,
    },
    {
      imgSrc: './img/clock.svg',
      header: 'Время работы:',
      text: 'Пн-Пт: 9:00-18:00',
      text2: 'Cб-Вс: Выходной',
    },
    {
      imgSrc: './img/mail.svg',
      header: 'Электронная почта:',
      text: 'sale@plastik-nit.ru',
    },
  ];

  return (
    <Grid
      sx={{
        backgroundColor: 'white',
        width: '80%',
        margin: '45px auto',
        padding: '40px 24px',
        borderRadius: '15px',
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        columnGap: '50px',
        rowGap: '30px',
        alignContent: 'center',
        alignItems: 'flex-start',
        boxShadow: ' 0px 0px 10.2px 7px #7373D9',
        '@media(max-width: 620px)': {
          flexDirection: 'column',
        },
      }}
    >
      {contact.map((item) => (
        <Grid
          sx={{
            display: 'flex',
            alignItems: 'center',
            columnGap: '12px',
            maxwidth: '225px',
            '@media(max-width:916px)': {
              // width: '50%',
            },
          }}
        >
          <img src={item.imgSrc} alt={item.header} />
          <Grid
            sx={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Typography
              sx={{
                fontSize: '14px',
                fontWeight: '300',
                color: '#7373D9;',
              }}
            >
              {item.header}
            </Typography>

            {item.link ? (
              <Link
                href={`tel:${item.text}`}
                sx={{
                  textDecoration: 'none',
                }}
              >
                <Typography
                  sx={{
                    fontSize: '16px',
                    fontWeight: '600',
                    color: '#313186',
                  }}
                >
                  {item.text}
                </Typography>
              </Link>
            ) : (
              <Typography
                sx={{
                  fontSize: '16px',
                  fontWeight: '600',
                  color: '#313186',
                }}
              >
                {item.text}
              </Typography>
            )}

            <Typography
              sx={{
                fontSize: '16px',
                fontWeight: '600',
                color: '#313186',
              }}
            >
              {item.text2}
            </Typography>
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
};

export default BlockContactCompany;
