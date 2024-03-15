import { Grid } from "@mui/material";
import React from "react";
import ProductDetails from "./components/ProductDetails/ProductDetails";

const ProductItems = () => {
  return (
    <Grid
      sx={{
        maxWidth: "1320px",
        margin: "0 auto",
        padding: "133px 20px",
      }}
    >
      <ProductDetails />
    </Grid>
  );
};

export default ProductItems;
