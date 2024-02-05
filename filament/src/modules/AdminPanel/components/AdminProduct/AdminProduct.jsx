import { Grid } from "@mui/material";
import React from "react";
import ProductCard from "../../../../components/ProductCard/ProductCard";
import { useGetProduct } from "../../../../components/ProductCard/hook/useGetProduct";

const AdminProduct = () => {
  const { data, isLoading } = useGetProduct();

  return (
    <Grid sx={{ padding: "133px 20px" }}>
      <Grid
        sx={{
          display: "flex",
          flexWrap: "wrap",
          columnGap: "40px",
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
          data?.map((product) => <ProductCard {...product} key={product.id} admin />)
        )}
      </Grid>
    </Grid>
  );
};

export default AdminProduct;
