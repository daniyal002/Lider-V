import React from "react";
import { useGetProductCart } from "../../hook/useGetProductCart";
import { Grid } from "@mui/material";
import ProductCard from "../../../../components/ProductCard/ProductCard";

const ProductCart = () => {
  const { data, error, isLoading } = useGetProductCart();
  return (
    <Grid
      sx={{
        display: "flex",
        flexWrap: "wrap",
        columnGap: "20px",
        justifyContent: "center",
      }}
    >
      {isLoading ? (
        <Grid
          sx={{
            animation: "spin 2s linear infinite",
            "@keyframes spin": {
              "0%": {
                transform: "rotate(360deg)",
              },
              "100%": {
                transform: "rotate(0deg)",
              },
            },
          }}
        >
          <img src="./icon/loop_black_48dp.svg" alt="" />
        </Grid>
      ) : (
        data?.map((product) => <ProductCard {...product} key={product.id} />)
      )}
    </Grid>
  );
};

export default ProductCart;
