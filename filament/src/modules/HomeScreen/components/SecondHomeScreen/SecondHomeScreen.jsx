import { Grid, Typography } from "@mui/material";
import React from "react";
import ProductCard from "../../../../components/ProductCard/ProductCard";

const SecondHomeScreen = () => {
  return (
    <Grid
      sx={{
        maxWidth: "1320px",
        margin: "0 auto",
        padding: "0 20px",

      }}
    >
      <Typography
        sx={{
          fontSize: "55px",
          color: "#fff",
          fontWeight: "900",
          textAlign: "center",
          marginBottom: "30px",
          '@media(max-width:425px)':{
          fontSize: "35px",

          }
        }}
      >
        Популярные товары
      </Typography>

      <Grid
        sx={{
          display: "flex",
          justifyContent: "center",
          columnGap:" 30px",
          flexWrap: " wrap",
          '@media(max-width:851px)':{
            justifyContent: 'center'
          }
        }}
      >
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </Grid>
    </Grid>
  );
};

export default SecondHomeScreen;
