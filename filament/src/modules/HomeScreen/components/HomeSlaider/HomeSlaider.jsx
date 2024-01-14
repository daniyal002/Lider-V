import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const HomeSlaider = () => {
  const images = [
    '/img/filaments1.png',
    '/img/filaments2.png',
    '/img/filaments3.png',
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, // Разрешение экрана, при котором нужно изменить параметры
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
    ],
  };
  return (
    <Slider
      {...settings}
      style={{
        overflow: 'hidden',
        background: 'rgb(18,18,47)',
        background:
          'linear-gradient(29deg, rgba(18,18,47,1) 0%, rgba(115,115,217,1) 100%)',
      }}
    >
      {images.map((image, index) => (
        <div key={index}>
          <img
            src={image}
            alt={`Slide ${index}`}
            style={{
              width: '50%',
              margin: '0 auto',
              maxWidth: '100%',
            }}
          />
        </div>
      ))}
    </Slider>
  );
};

export default HomeSlaider;
