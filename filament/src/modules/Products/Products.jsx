import { Grid, Typography } from "@mui/material";
import React from "react";
import ProductSearch from "./components/ProductSearch/ProductSearch";
import ProductCategories from "./components/ProductCategories/ProductCategories";
import ProductCard from "../../components/ProductCard/ProductCard";

const Products = () => {
  return (
    <Grid
      sx={{
        maxWidth: "1320px",
        margin: "0 auto",
        padding: "133px 20px",
        display: "flex",
        flexDirection: "column",
        rowGap: "50px",
      }}
    >
      <Grid>
        <Typography
          sx={{
            fontSize: "55px",
            color: "#fff",
            fontWeight: "900",
            marginBottom: "10px",
            justifyContent: "center",
            textAlign: "center",
            "@media(max-width:425px)": {
              fontSize: "35px",
            },
          }}
        >
          Товары
        </Typography>
      </Grid>

      <ProductSearch />
      <ProductCategories />
      <Grid
        sx={{
          display: "flex",
          flexWrap: "wrap",
          columnGap: "20px",
          justifyContent: "center",
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

export default Products;
