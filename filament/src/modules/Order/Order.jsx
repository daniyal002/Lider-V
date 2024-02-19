import { Grid } from "@mui/material";
import React from "react";
import Buyer from "./components/Buyer/Buyer";
import { useLocation } from "react-router-dom";
import OrderProducts from "./components/OrderProducts/OrderProducts";

const Order = () => {
  const location = useLocation();
  const cartData = location.state?.cartData || [];
  console.log(cartData);
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
      Order
      <Buyer />
      <OrderProducts cartData={cartData} />
    </Grid>
  );
};

export default Order;
