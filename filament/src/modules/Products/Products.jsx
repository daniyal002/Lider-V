import { Grid, Typography } from "@mui/material";
import React from "react";
import ProductSearch from "./components/ProductSearch/ProductSearch";
import ProductCategories from "./components/ProductCategories/ProductCategories";
import ProductCard from "../../components/ProductCard/ProductCard";
import { useGetProduct } from "../../components/ProductCard/hook/useGetProduct";

const Products = () => {
  const { data, error } = useGetProduct();
  console.log(data);
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
        {data?.map((product) => (
          <ProductCard {...product} key={product.id} />
        ))}
      </Grid>
    </Grid>
  );
};

export default Products;
