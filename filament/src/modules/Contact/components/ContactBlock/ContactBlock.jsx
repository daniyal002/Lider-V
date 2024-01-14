import { Grid, Typography } from "@mui/material";
import React from "react";

const ContactBlock = () => {
  return (
    <Grid
      sx={{
        display: "flex",
        flexDirection: "column",
        rowGap: "16px",
        padding: "50px",
        background: "rgba(134, 155, 223, 0.14)",
        border: "2px solid rgba(83, 84, 136, 0.4)",
        alignItems: "center",
        borderRadius: "14px",
        width: "30%",
        "@media(max-width:954px)": {
          width: "40%",
        },
        "@media(max-width:650px)": {
            width: "50%",
          },"@media(max-width:530px)": {
            width: "70%",
          },"@media(max-width:386px)": {
            width: "100%",
          },
          
      }}
    >
      <img src="./icon/phone.svg" alt="phone" width="100" />
      <Typography
        sx={{
          fontSize: "22px",
          color: "#fff",
          "@media(max-width:722px)": {
            fontSize: "18px",
          },
        }}
      >
        Phone number
      </Typography>
      <Typography
        sx={{
          fontSize: "19px",
          color: "#fff",
          "@media(max-width:722px)": {
            fontSize: "16px",
          },
        }}
      >
        +123 123 123 123
      </Typography>
      <Typography
        sx={{
          fontSize: "19px",
          color: "#fff",
          "@media(max-width:722px)": {
            fontSize: "16px",
          },
        }}
      >
        +123 123 123 123
      </Typography>
    </Grid>
  );
};

export default ContactBlock;
