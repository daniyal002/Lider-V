import React from 'react';
import { Button, CardMedia, Grid, Link, Typography } from '@mui/material';

const FirstHomeScreen = () => {
  return (
    <Grid
      sx={{
        display: 'flex',
        flexDirection: 'row',
        padding: '133px 0',
        maxWidth: '1320px',
        margin: '0 auto',
      }}
    >
      <Grid>
        <Typography
          sx={{
            fontSize: ' 96.9px',
            background: 'linear-gradient(297deg, #9CD0FF, #A95BF3, #9CD0FF)',
            fontWeight: '900',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            lineHeight: '7.26rem',
            letterSpacing: '0.18rem',
          }}
        >
          Best NFTs Marketplace.
        </Typography>
        <Typography
          sx={{
            width: '85%',
            fontSize: '19px',
            lineHeight: '2',
            color: '#F2F2F2',
            marginBottom: '16px',
          }}
        >
          Ultrices eget pretium sit euismod mi id. In commodo auctor eget congue
          sit. Risus, aliquam odio posuere ac in in nisl sed augue. Porta aenean
          egestas malesuada in pulvinar enim viverra.
        </Typography>
        <Grid
          sx={{
            display: 'flex',
            flexDirection: 'row',
            columnGap: '20px',
          }}
        >
          <Link
            href="#"
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
            Get Started
          </Link>
          <Link
            href="#"
            sx={{
              color: '#f2f2f2',
              padding: '17px 50px',
              fontSize: '19px',
              fontWeight: '500',
              transition: 'all 0.3s ease-in',
              textDecoration: 'none',
              border: '2px solid white',
              borderWidth: '2px',
              borderImage: 'linear-gradient(to bottom, #6847F5, #A95BF3) 1',
            }}
          >
            Create NTFs
          </Link>
        </Grid>
      </Grid>

      <Grid>
        <img src="./img/banner-image.png" alt="" width="526" />
      </Grid>
    </Grid>
  );
};

export default FirstHomeScreen;
