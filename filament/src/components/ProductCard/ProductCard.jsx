import { Grid, Link, Typography } from "@mui/material";
import React from "react";

const ProductCard = () => {
  return (
    <Grid
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        maxWidth: "406px",
        width: "100%",
      }}
    >
      <img
        src="./img/collection-item2.jpg"
        alt=""
        width="406"
        style={{
          borderRadius: "10px",
          maxWidth: "406px",
          width: "100%",
        }}
      />
      <Grid
        sx={{
          backgroundColor: "#fff",
          width: "90%",
          maxWidth: "370px",
          padding: "20px",
          borderRadius: "20px",
          display: "flex",
          flexDirection: "column",
          rowGap: "20px",
          transform: "translateY(-50%)",
          transition: "0.5s",
          "&:hover": {
            transform: "translateY(-60%)",
          },
        }}
      >
        <Grid
          sx={{
            display: "flex",
            justifyContent: "space-between",
            columnGap: "20px",
            "@media (max-width:400px)": {
              flexWrap: "wrap",
              rowGap: "20px",
            },
          }}
        >
          <Typography
            sx={{
              color: "#000",
              fontSize: "22px",
              fontWeight: "700",
            }}
          >
            Lighting Axe
          </Typography>
          <Typography
            sx={{
              color: "#000",
              fontSize: "22px",
              fontWeight: "700",
            }}
          >
            0.36 ETH
          </Typography>
        </Grid>

        <Grid
          sx={{
            display: "flex",
            flexDirection: "column",
            rowGap: "10px",
          }}
        >
          <Link
            href="#"
            sx={{
              background: "linear-gradient( #6847F5, #A95BF3)",
              color: "#f2f2f2",
              border: "none",
              padding: "10px 30px",
              fontSize: "19px",
              fontWeight: "500",
              transition: "0.5s",
              borderRadius: "5px",
              textDecoration: "none",
              "&:hover": {
                transition: "0.5s",
                background: "linear-gradient(#A95BF3,#6847F5)",
              },
            }}
          >
            В корзину
          </Link>

          <Link
            href="#"
            sx={{
              background: "linear-gradient( #6847F5, #A95BF3)",
              color: "#f2f2f2",
              border: "none",
              padding: "10px 30px",
              fontSize: "19px",
              fontWeight: "500",
              transition: "0.5s",
              borderRadius: "5px",
              textDecoration: "none",
              "&:hover": {
                transition: "0.5s",
                background: "linear-gradient(#A95BF3,#6847F5)",
              },
            }}
          >
            В избранное
          </Link>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ProductCard;
