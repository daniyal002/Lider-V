import { Button, Grid } from "@mui/material";
import React from "react";
import { useGetCategories } from "../../../../components/ProuductCategories/hook/useGetCategories";

const ProductCategories = () => {
  const { data } = useGetCategories();

  return (
    <Grid
      sx={{
        display: "flex",
        flexWrap: "wrap",
        columnGap: "8px",
        justifyContent: "center",
      }}
    >
      {data?.map((category) => (
        <Button
          key={category.id}
          sx={{ fontSize: "19px", color: "#f0f0f0", textTransform: "none" }}
        >
          {category.categoryName}
        </Button>
      ))}
    </Grid>
  );
};

export default ProductCategories;
