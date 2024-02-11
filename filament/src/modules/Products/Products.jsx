import { Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import ProductSearch from './components/ProductSearch/ProductSearch';
import ProductCategories from './components/ProductCategories/ProductCategories';
import ProductCard from '../../components/ProductCard/ProductCard';
import { useGetProduct } from '../../components/ProductCard/hook/useGetProduct';
import { useLocation } from 'react-router-dom';

const Products = () => {
  const prd = [
    {
      productName: 'Test 1',
      productPrice: '1000',
      productSize: '10х10',
      productDescription: 'Описание товара',
    },
    {
      productName: 'Test 1',
      productPrice: '1000',
      productSize: '10х10',
      productDescription: 'Описание товара',
    },
  ];
  const { data, error, isLoading } = useGetProduct();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  useEffect(() => {
    setSelectedCategory(Number(queryParams.get('category')));
  }, []);

  // Фильтрация по категории
  const filteredByCategory = selectedCategory
    ? prd?.filter((product) => product.categoryId === selectedCategory)
    : prd;

  // Фильтрация по поисковому запросу
  const filteredBySearch = searchTerm
    ? filteredByCategory.filter((product) =>
        product.productName.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : filteredByCategory;

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
  };

  return (
    <Grid
      sx={{
        maxWidth: '1320px',
        margin: '0 auto',
        padding: '133px 20px',
        display: 'flex',
        flexDirection: 'column',
        rowGap: '50px',
      }}
    >
      <Grid>
        <Typography
          sx={{
            fontSize: '55px',
            color: '#fff',
            fontWeight: '900',
            marginBottom: '10px',
            justifyContent: 'center',
            textAlign: 'center',
            '@media(max-width:425px)': {
              fontSize: '35px',
            },
          }}
        >
          Товары
        </Typography>
      </Grid>

      <ProductSearch handleSearch={handleSearch} />
      <ProductCategories
        setSelectedCategory={setSelectedCategory}
        selectedCategory={selectedCategory}
      />
      <Grid
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          columnGap: '30px',
          rowGap: '40px',
          justifyContent: 'center',
        }}
      >
        {isLoading ? (
          <Grid
            sx={{
              animation: 'spin 2s linear infinite',
              '@keyframes spin': {
                '0%': {
                  transform: 'rotate(360deg)',
                },
                '100%': {
                  transform: 'rotate(0deg)',
                },
              },
            }}
          >
            <img src="./icon/loop_black_48dp.svg" alt="" />
          </Grid>
        ) : (
          filteredBySearch?.map((product) => (
            <ProductCard {...product} key={product.id} />
          ))
        )}
      </Grid>
    </Grid>
  );
};

export default Products;
