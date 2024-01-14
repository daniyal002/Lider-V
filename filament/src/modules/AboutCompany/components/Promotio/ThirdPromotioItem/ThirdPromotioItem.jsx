import { Grid, Typography } from "@mui/material";
import React from "react";

const ThirdPromotioItem = () => {
  return (
    <Grid
      sx={{
        display: "flex",
        "@media(max-width:960px)": {
          flexDirection: "column",
          rowGap: "40px",
        },
      }}
    >
      <Typography
        sx={{
          display: "flex",
          flex: "1",
          fontSize: "55px",
          color: "#fff",
          fontWeight: "900",
          marginBottom: "30px",
          "@media(max-width:425px)": {
            fontSize: "35px",
          },
        }}
      >
        You Can Create, Sell And Collect Best NFTs From NextGen.
      </Typography>
      <Typography
        sx={{
          display: "flex",
          flex: "1",
          fontSize: "19px",
          fontWeight: "300",
          color: "#F0F0F0",
          lineHeight: "2",
          "@media(max-width:650px)": {
            fontSize: "16px",
          },
        }}
      >
        Aliquet nunc vitae interdum mauris pretium lectus mauris viverra ornare
        quam diam felis. Ultrices eget pretium sit euismod mi id risus, aliquam
        odio posuere ac in in nisl sed augue. Porta aenean egestas malesuada in
        pulvinar enim viverra. ipsum dolor sit amet consectetur. Ipsum ipsum ut
        pulvinar ipsum cras metus purus mattis integer. Tellus ipsum viverra
        semper quisque eget nisl vel congue consectetur.
      </Typography>
    </Grid>
  );
};

export default ThirdPromotioItem;
