import { Button, Grid } from "@mui/material";
import React from "react";

const ProductCategories = () => {
  const categoryList = [
    "category1",
    "category2",
    "category3",
    "category4",
    "category5",
    "category6",
  ];
  return (
    <Grid
      sx={{
        display: "flex",
        flexWrap: "wrap",
        columnGap: "8px",
        justifyContent: "center",
      }}
    >
      {categoryList.map((item) => (
        <Button
          sx={{ fontSize: "19px", color: "#f0f0f0", textTransform: "none" }}
        >
          {item}
        </Button>
      ))}
    </Grid>
  );
};

export default ProductCategories;
