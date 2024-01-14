import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import { Container, Grid } from '@mui/material';
import ProductCard from '../../../../components/ProductCard/ProductCard'; // Подставьте путь к вашему компоненту ProductCard

const ProductSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Показывать три товарные карточки одновременно, можно настроить по вашему
    slidesToScroll: 1,
    centerMode: true, // Включаем центрировани
    centerPadding: '0', // Регулируем отступ, чтобы карточки были ровно по центру
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings} style={{ overflow: 'hidden' }}>
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </Slider>
  );
};

const ProductSliderWrapper = () => (
  <Grid>
    <ProductSlider />
  </Grid>
);

export default ProductSliderWrapper;
