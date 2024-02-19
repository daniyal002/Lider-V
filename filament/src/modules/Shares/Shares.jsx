import { Grid, Typography } from "@mui/material";
import React from "react";
import Promo from "../../components/Promo/Promo";

const Shares = () => {
  return (
    <Grid
      sx={{
        maxWidth: "1320px",
        margin: "0 auto",
        padding: "133px 20px ",
      }}
    >
      <Typography
        sx={{
          fontSize: "55px",
          color: "#fff",
          fontWeight: "900",
          marginBottom: "10px",
          justifyContent: "center",
          "@media(max-width:425px)": {
            fontSize: "35px",
          },
        }}
      >
        Акции
      </Typography>
      <Typography
        sx={{
          fontSize: "16px",
          color: "#A95BF3",
          fontWeight: "600",
          marginBottom: "30px",
        }}
      >
        Акции не суммируются. При одном заказе действует только одна Акция на
        выбор!
      </Typography>
      <Grid
        sx={{
          display: "flex",
          gap: "30px",
          flexWrap: "wrap",
          alignItems: "center",
        }}
      >
        <Promo />
        <Promo />
        <Promo />
        <Promo />
        <Promo />
        <Promo />
      </Grid>
    </Grid>
  );
};

export default Shares;
