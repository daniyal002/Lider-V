import { Grid } from "@mui/material";
import React from "react";
import ProductCard from "../../../../components/ProductCard/ProductCard";
import { useGetProduct } from "../../../../components/ProductCard/hook/useGetProduct";

const AdminProduct = () => {
  const { data, error } = useGetProduct();

  return (
    <Grid sx={{ maxWidth: "1320px", margin: "0 auto", padding: "133px 20px" }}>
      <Grid
        sx={{
          display: "flex",
          flexWrap: "wrap",
          columnGap: "20px",
          justifyContent: "center",
        }}
      >
        {data?.map((product) => (
          <ProductCard {...product} key={product.id} admin />
        ))}
      </Grid>
    </Grid>
  );
};

export default AdminProduct;
