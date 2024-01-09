import { Grid, Link, Typography } from '@mui/material';
import React from 'react';

const Promo = () => {
  return (
    <Grid>
      <Grid
        sx={{
          padding: '35px 35px 70px',
          background: 'rgba(134, 155, 223, 0.14)',
          border: '2px solid rgba(83, 84, 136, 0.4)',
          borderRadius: '100px',
        }}
      >
        <Grid
          sx={{
            display: 'flex',
            flexDirection: 'column',
            rowGap: '30px',
            alignItems: 'center'
      
            
          }}
        >
          <img
            src="./img/Stocks.jpg"
            alt="Promo"
            width="232"
            style={{
              borderRadius: '20%',
            }}
          />
          <Grid
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography
              sx={{
                fontSize: '14px',
                color: '#fff',
                textAlign: 'center',
                fontWeight: '700',
              }}
            >
              Скидка 5% при покупке 5-ти товаров
            </Typography>
            <Link
              href="#"
              sx={{
                fontSize: '19px',
                color: '#A95BF3',
                textAlign: 'center',
                fontWeight: '300',
                textDecoration: 'none',
              }}
            >
              View Collection
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Promo;
