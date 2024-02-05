import { Grid, Typography } from "@mui/material";
import React from "react";
import ProductCart from "./components/ProductCart/ProductCart";

const Cart = () => {
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
          Корзина
        </Typography>
      </Grid>

      <ProductCart />
    </Grid>
  );
};

export default Cart;
