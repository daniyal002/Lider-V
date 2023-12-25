import React, { useState } from 'react';
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Button,
  IconButton,
} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CheckIcon from '@mui/icons-material/Check';

const ProductCard = () => {
  const [favorite, setFavorite] = useState(false);

  return (
    <Card
      sx={{
        maxWidth: 345,
        '@media (max-width: 768px)': {
          maxWidth: 300,

        },
        '@media (max-width: 661px)': {
          maxWidth: 250,

        },
        borderRadius: '10px',
        background: '#7373D9',
        border: "2px solid #FFDC73"
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
          <Typography
            component="div"
            color="primary"
            sx={{
                display: 'flex',
                alignItems: "center",
              fontSize: '14px',
              color: 'white'
            }}
          >
            Есть в наличии <CheckIcon  sx={{
                color: '#35e847'
}}/>
          </Typography>
          <Typography variant="h5" component="div" color="#FFDC73">
            Product Title
          </Typography>
          <Typography variant="body2" color="white">
            Category
          </Typography>
          <Typography variant="h6" component="div" color="white" mt={1}>
            $19.99
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActionArea
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: 2,
        }}
      >
        <Button variant="contained" color="primary" sx={{
          fontSize:'16px',
          '@media (max-width: 660px)': {
            fontSize: '12px'
  
          },
        }}>
          Добавить в корзину
        </Button>
        <IconButton
          color="primary"
          aria-label="add to favorites"
          onClick={() => setFavorite(!favorite)}
        >
          {favorite ? <FavoriteIcon sx={{
            color: 'red'
          }} /> : <FavoriteBorderIcon sx={{
            color: 'red'
          }} />}
        </IconButton>
      </CardActionArea>
    </Card>
  );
};

export default ProductCard;
