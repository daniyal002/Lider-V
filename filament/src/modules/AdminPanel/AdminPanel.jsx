import React, { useState } from "react";
import AddProduct from "./components/AddProduct/AddProduct";
import { Button, Grid } from "@mui/material";
import AddCategories from "./components/AddCategories/AddCategories";
import AdminProduct from "./components/AdminProduct/AdminProduct";
import AdminCategories from "./components/AdminCategories/AdminCategories";

const AdminPanel = () => {
  const [product, setProduct] = useState(true);
  const [category, setCategory] = useState(false);
  const [user, setUser] = useState(false);

  return (
    <Grid
      sx={{
        maxWidth: "1320px",
        margin: "0 auto",
        padding: "133px 20px",
        display: "flex",
        flexDirection: "column",
        rowGap: "50px",
      }}
    >
      <Grid
        sx={{ display: "flex", justifyContent: "center", columnGap: "20px" }}
      >
        <Button
          variant={product ? "contained" : "outlined"}
          onClick={() => {
            setProduct(true);
            setCategory(false);
            setUser(false);
          }}
        >
          Продукты
        </Button>
        <Button
          variant={category ? "contained" : "outlined"}
          onClick={() => {
            setProduct(false);
            setCategory(true);
            setUser(false);
          }}
        >
          Категории
        </Button>
        <Button
          variant={user ? "contained" : "outlined"}
          onClick={() => {
            setProduct(false);
            setCategory(false);
            setUser(true);
          }}
        >
          Пользователи
        </Button>
      </Grid>
      {product && (
        <>
          <AddProduct />
          <AdminProduct />
        </>
      )}
      {category && (
        <>
          <AddCategories />
          <AdminCategories />
        </>
      )}
    </Grid>
  );
};

export default AdminPanel;
