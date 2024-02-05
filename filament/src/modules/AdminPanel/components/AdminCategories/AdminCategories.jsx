import React from "react";
import ProuductCategories from "../../../../components/ProuductCategories/ProuductCategories";
import { useGetCategories } from "../../../../components/ProuductCategories/hook/useGetCategories";
import { Grid } from "@mui/material";

const AdminCategories = () => {
  const { data } = useGetCategories();
  return (
    <Grid sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
      {data.map((categories) => (
        <ProuductCategories
          text={categories.categoryName}
          admin
          id={categories.id}
          key={categories.id}
        />
      ))}
      
    </Grid>
  );
};

export default AdminCategories;
