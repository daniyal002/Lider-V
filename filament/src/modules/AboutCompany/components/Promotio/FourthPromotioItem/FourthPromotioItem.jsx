import { Grid, Link, Typography } from "@mui/material";
import React from "react";

const FourthPromotioItem = () => {
  return (
    <Grid
      sx={{
        display: "flex",
        flexDirection: "column",
        rowGap: "15px",
        alignItems: "center",
        background: "url(./img/banner-lg2.jpg)",
        padding: "76px 12px",
        borderRadius: "8px",
      }}
    >
      <Typography
        sx={{
          fontSize: "55px",
          color: "#fff",
          fontWeight: "900",
          textAlign: "center",
          "@media(max-width:588px)": {
            fontSize: "45px",
          },
          "@media(max-width:425px)": {
            fontSize: "35px",
          },
        }}
      >
        Discover And Collect Best NFTs
      </Typography>
      <Typography
        sx={{
          fontSize: "19px",
          fontWeight: "300",
          color: "#F0F0F0",
          lineHeight: "2",
          textAlign: "center",
          width: "50%",
          "@media(max-width:960px)": {
            width: "70%",
          },
          "@media(max-width:562px)": {
            width: "100%",
          },
        }}
      >
        In commodo auctor eget congue sit. Ultrices eget pretium sit euismod mi
        id. Risus, aliquam odio posuere ac in in nisl sed augue orta aenean
        egestas malesua.
      </Typography>

      <Grid
        sx={{
          display: "flex",
          flexDirection: "row",
          columnGap: "20px",
          "@media(max-width:600px)": {
            flexDirection: "column",
            rowGap: "20px",
            textAlign: "center",
          },
        }}
      >
        <Link
          href="#"
          sx={{
            background: "linear-gradient( #6847F5, #A95BF3)",
            color: "#f2f2f2",
            border: "none",
            padding: "17px 50px",
            fontSize: "19px",
            fontWeight: "500",
            transition: "0.5s",
            textDecoration: "none",
            "&:hover": {
              transition: "0.5s",
              background: "linear-gradient(#A95BF3,#6847F5)",
            },
          }}
        >
          Get Started
        </Link>
        <Link
          href="#"
          sx={{
            color: "#f2f2f2",
            padding: "17px 50px",
            fontSize: "19px",
            fontWeight: "500",
            transition: "all 0.3s ease-in",
            textDecoration: "none",
            border: "2px solid white",
            borderWidth: "2px",
            borderImage: "linear-gradient(to bottom, #6847F5, #A95BF3) 1",
          }}
        >
          Create NTFs
        </Link>
      </Grid>
    </Grid>
  );
};

export default FourthPromotioItem;
