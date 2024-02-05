import React from 'react';
import { useGetCategories } from '../../components/ProuductCategories/hook/useGetCategories';
import { Grid } from '@mui/material';
import ProuductCategories from '../../components/ProuductCategories/ProuductCategories';

const Categories = () => {
  const { data } = useGetCategories();
  return (
    <Grid sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {data.map((categories) => (
        <ProuductCategories
          text={categories.categoryName}
          id={categories.id}
          key={categories.id}
        />
      ))}
    </Grid>
  );
};

export default Categories;
