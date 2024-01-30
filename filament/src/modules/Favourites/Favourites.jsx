import React from "react";
import { useGetProductFavorite } from "../../hook/useGetProductFavorite";
import { Grid, Typography } from "@mui/material";
import ProductCard from "../../components/ProductCard/ProductCard";

const Favourites = () => {
  const { data, isLoading } = useGetProductFavorite();
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
            color: "red",
            fontWeight: "900",
            marginBottom: "10px",
            justifyContent: "center",
            textAlign: "center",
            "@media(max-width:425px)": {
              fontSize: "35px",
            },
          }}
        >
          Избранное
        </Typography>
      </Grid>

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
    </Grid>
  );
};

export default Favourites;
