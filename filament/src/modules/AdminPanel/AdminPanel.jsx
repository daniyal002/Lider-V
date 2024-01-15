import React from "react";
import AddProduct from "./components/AddProduct/AddProduct";
import { Grid } from "@mui/material";

const AdminPanel = () => {
  return (
    <Grid sx={{ maxWidth: "1320px", margin: "0 auto", padding: "133px 20px" }}>
      <AddProduct />
    </Grid>
  );
};

export default AdminPanel;
