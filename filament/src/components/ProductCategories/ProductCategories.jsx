import React, { useState } from 'react';
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';

const ProductCategories = () => {
  return (
    <Card
      sx={{
        maxWidth: 245,
        borderRadius: '10px',
        background: '#7373D9',
        border: '2px solid #FFDC73',
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          image="/img/filaments1.png"
          alt="Product Image"
          sx={{
            borderBottom: '1px solid white',
          }}
        />
        <CardContent
          sx={{
            display: 'flex',
            flexDirection: 'column',
            rowGap: '8px',
          }}
        >
          <Typography variant="h5" component="div" color="#FFDC73">
            Category Title
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ProductCategories;
