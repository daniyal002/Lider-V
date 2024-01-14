import React from "react";
import Promo from "../../../../components/Promo/Promo";
import { Grid, Typography } from "@mui/material";

const FifthHomeScreen = () => {
  return (
    <Grid
      sx={{
        display: "flex",
        flexDirection: "column",
        rowGap: "30px",
        alignItems: "center",
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
          textAlign: "center",
          marginBottom: "30px",
          "@media(max-width:425px)": {
            fontSize: "35px",
          },
        }}
      >
        Акции
      </Typography>
      <Typography
        sx={{
          fontSize: "19px",
          color: "#fff",
          fontWeight: "300",
          textAlign: "center",
          lineHeight: "2",
          marginBottom: "24px",
        }}
      >
        Акции не суммируются.
        <br /> При одном заказе действует только одна Акция на выбор!
      </Typography>

      <Grid
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-around",
          width: "100%",
          rowGap: "30px",
        }}
      >
        <Promo />
        <Promo />
        <Promo />
        <Promo />
      </Grid>
    </Grid>
  );
};

export default FifthHomeScreen;
