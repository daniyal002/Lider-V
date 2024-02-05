import { Button, Grid } from '@mui/material';
import React from 'react';
import { useGetCategories } from '../../../../components/ProuductCategories/hook/useGetCategories';

const ProductCategories = ({ setSelectedCategory, selectedCategory }) => {
  const { data } = useGetCategories();

  const handleCategoryClick = (categoryId) => {
    if (categoryId === selectedCategory) {
      setSelectedCategory(null); // Сбрасываем выбранную категорию, если кликнули на уже выбранную категорию
    } else {
      setSelectedCategory(categoryId); // Устанавливаем выбранную категорию
    }
    console.log(selectedCategory);
  };

  return (
    <Grid
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        columnGap: '8px',
        justifyContent: 'center',
      }}
    >
      {data?.map((category) => (
        <Button
          key={category.id}
          sx={{
            fontSize: '19px',
            color: selectedCategory === category.id ? '#fff' : '#f0f0f0',
            textTransform: 'none',
            backgroundColor:
              selectedCategory === category.id ? '#A95BF3' : 'transparent',
            '&:hover': {
              backgroundColor: '#fff',
              color: '#A95BF3',
            },
          }}
          onClick={() => handleCategoryClick(category.id)}
        >
          {category.categoryName}
        </Button>
      ))}
    </Grid>
  );
};

export default ProductCategories;
