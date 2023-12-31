import { Grid, Link, Typography } from '@mui/material';
import React from 'react';

const HomeRetail = () => {
  return (
    <Grid
      sx={{
        backgroundColor: 'white',
        width: '70%',
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
      <Grid
        sx={{
          display: 'flex',
          flexDirection: 'column',
          rowGap: '10px',
        }}
      >
        <Typography
          sx={{
            fontSize: '18px',
            fontWeight: '600',
            color: '#313186',
          }}
        >
          Розница
        </Typography>
        <Typography
          sx={{
            fontSize: '16px',
            fontWeight: '300',
            color: '#7373D9',
          }}
        >
          По всем вопросам звоните по телефону или пишите в мессенджеры:
        </Typography>
      </Grid>

      <Grid
        sx={{
          display: 'flex',
          flexDirection: 'column',
          rowGap: '10px',
        }}
      >
        <Link
          href="tel:89682834341"
          sx={{
            textDecoration: 'none',
            color: '#7373D9',
          }}
        >
          <Typography
            sx={{
              fontSize: '20px',
              fontWeight: '700',
            }}
          >
            8 968 283 43 41
          </Typography>
        </Link>
        <Grid
          sx={{
            display: 'flex',
            columnGap: '10px',
            justifyContent: 'space-between',
          }}
        >
          <img src="./icon/whatsapp.svg" alt="whatsapp" width="40" />
          <img src="./icon/viber.svg" alt="viber" width="40" />
          <img src="./icon/telegram.svg" alt="telegram" width="40" />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default HomeRetail;
