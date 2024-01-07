import { Button, Grid, Input, Typography } from '@mui/material';
import React from 'react';

const FourthHomeScreen = () => {
  return (
    <Grid
      sx={{
        display: 'flex',
        maxWidth: '1320px',
        margin: '0 auto',
      }}
    >
      <Grid
        sx={{
          width: '50%',
        }}
      >
        <img src="./img/single-image.jpg" alt="" width="543" />
      </Grid>

      <Grid
        sx={{
          width: '50%',
        }}
      >
        <Typography
          sx={{
            fontSize: '55px',
            fontWeight: '900',
            color: '#f2f2f2',
          }}
        >
          Subscribe And Get Latest News Update About NFTs.
        </Typography>
        <Typography
          sx={{
            fontSize: '19px',
            fontWeight: '300',
            color: '#F0F0F0',
            lineHeight: '2',
          }}
        >
          In commodo auctor eget congue sit. Ultrices eget pretium sit euismod
          mi id. Risus, aliquam odio posuere ac in in nisl sed augue. Porta
          aenean egestas malesuada in pulvinar enim viverra.
        </Typography>
        <form
          style={{
            display: 'flex',
            padding: '10px',
            justifyContent: 'space-between',
            background: 'rgba(134, 155, 223, 0.14)',
            border: '2px solid rgba(83, 84, 136, 0.4)',
            borderRadius: '8px',
            margin: '70px 0 32px 0 '
          }}
        >
          <Input
            placeholder="Введите Е-mail"
            sx={{
              height: '50px',
              padding: '34px 15px',
              color: 'rgba(240, 240, 240, 0.7);',
              border: 'none',
              outline: 'none',
              fontSize: '20px',
              width: '65%',
            }}
          />
          <Button
            sx={{
              background: 'linear-gradient( #6847F5, #A95BF3)',
              color: '#f2f2f2',
              border: 'none',
              padding: '17px 50px',
              fontSize: '19px',
              fontWeight: '500',
              transition: '0.5s',
              textDecoration: 'none',
              '&:hover': {
                transition: '0.5s',
                background: 'linear-gradient(#A95BF3,#6847F5)',
              },
            }}
          >
            Subscribe
          </Button>
        </form>
      </Grid>
    </Grid>
  );
};

export default FourthHomeScreen;
