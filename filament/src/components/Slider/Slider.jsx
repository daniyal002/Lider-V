import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ProductCard from '../ProductCard/ProductCard';
import './ProductSlider.css'; // Подключаем CSS файл для наших стилей

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        width: '50px',
        height: '50px',
        position: 'absolute',
        right: '-10%',
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: '1',
      }}
      onClick={onClick}
    >
      <img
        src="./icon/navigate_next_white_36dp.svg"
        alt="navigate next"
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        width: '50px',
        height: '50px',
        position: 'absolute',
        left: '-10%',
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: '1',
      }}
      onClick={onClick}
    >
      <img
        src="./icon/navigate_before_white_36dp.svg"
        alt="navigate before"
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
};

const ProductSlider = ({ product }) => {
  const favoriteProducts = product?.filter(
    (item) => item.productIsFavorite === true
  );

  const numProducts = product !== undefined ? product.length : 1;
  const slidesToShow = Math.min(numProducts, 3); // Например, максимум 3 элемента на слайд
  const settings = {
    dots: true,
    customPaging: function (i) {
      return <div className="custom-dot"></div>;
    },
    dotsClass: 'slick-dots',
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          centerMode: false,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          nextArrow: null, // Используем пользовательские стрелки для навигации
          prevArrow: null,
          centerMode: false,
        },
      },
    ],
    nextArrow: <NextArrow />, // Используем пользовательские стрелки для навигации
    prevArrow: <PrevArrow />,
  };

  return (
    <Slider {...settings}>
      {favoriteProducts?.map((product) => (
        <div key={product.id}>
          <ProductCard {...product} />
        </div>
      ))}
    </Slider>
  );
};

export default ProductSlider;
