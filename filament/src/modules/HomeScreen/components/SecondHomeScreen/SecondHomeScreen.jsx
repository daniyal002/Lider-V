import { Grid, Typography } from "@mui/material";
import React from "react";
import { useGetProduct } from "../../../../components/ProductCard/hook/useGetProduct";
import ProductSlider from "../../../../components/Slider/Slider";

const SecondHomeScreen = () => {
  const { data: Product, error, isLoading } = useGetProduct();

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
          "@media(max-width:425px)": {
            fontSize: "35px",
          },
        }}
      >
        Популярные товары
      </Typography>

      <Grid
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: " 30px",
          flexWrap: "wrap",
          "@media(max-width:851px)": {
            justifyContent: "center",
          },
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
          <Grid sx={{ width: "100%" }}>
            <ProductSlider product={Product} />
          </Grid>
        )}
      </Grid>
    </Grid>
  );
};

export default SecondHomeScreen;
