import { Button, Grid, Input } from "@mui/material";
import React from "react";

const ProductSearch = () => {
  return (
    <Grid
      sx={{
        display: "flex",
        justifyContent: "center",
        maxWidth: "648px",
        margin: "0 auto",
        width: "100%",
      }}
    >
      <Grid
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          background: "rgba(134, 155, 223, 0.14)",
          border: "2px solid rgba(83, 84, 136, 0.4)",
          borderRadius: "800px",
          padding: "8px 16px",
          justifyContent: "space-between",
        }}
      >
        <Input
          placeholder="Найдите свои товары здесь..."
          sx={{
            width: "80%",
            height: "50px",
            padding: "6px 15px",
            color: "#fff",
            outline: "none",
            fontSize: "20px",
            borderRadius: "800px",
            "&::after": {
              content: "none",
            },
            "&::before": {
              content: "none",
            },
          }}
        />
        <Button>
          <img src="./icon/search.svg" alt="search" width="35" />
        </Button>
      </Grid>
    </Grid>
  );
};

export default ProductSearch;
