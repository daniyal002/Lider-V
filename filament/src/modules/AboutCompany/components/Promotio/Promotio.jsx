import { Grid, Typography } from "@mui/material";
import React from "react";
import FirstPromotioItem from "./FirstPromotioItem/FirstPromotioItem";
import SecondPromotioItem from "./SecondPromotioItem/SecondPromotioItem";
import ThirdPromotioItem from "./ThirdPromotioItem/ThirdPromotioItem";
import FourthPromotioItem from "./FourthPromotioItem/FourthPromotioItem";
import RequisitesPromotio from "./RequisitesPromotio/RequisitesPromotio";

const Promotio = () => {
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
        О компании
      </Typography>
      <Grid sx={{ width: "100%" }}>
        <img
          src="./img/banner-lg1.jpg"
          alt=""
          style={{ maxWidth: "1296px", width: "100%" }}
        />
      </Grid>
      <Grid
        sx={{
          display: "flex",
          flexDirection: "column",
          rowGap: "100px",
        }}
      >
        <Grid
          sx={{
            display: "flex",
            columnGap: "40px",
            "@media(max-width:960px)": {
              flexDirection: "column",
              rowGap: "40px",
            },
          }}
        >
          <FirstPromotioItem />
          <SecondPromotioItem />
        </Grid>
        <Grid>
          <ThirdPromotioItem />
        </Grid>

        <FourthPromotioItem />
        <RequisitesPromotio />
      </Grid>
    </Grid>
  );
};

export default Promotio;
