import React, { useEffect, useState } from "react";
import { useGetProductCart } from "../../hook/useGetProductCart";
import { Button, Grid, Typography } from "@mui/material";
import ProductCard from "../../../../components/ProductCard/ProductCard";
import { useNavigate } from "react-router-dom";

const ProductCart = () => {
  const { data, error, isLoading } = useGetProductCart();
  const navigate = useNavigate();
  const [cartData, setCartData] = useState([]);

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const total = cartData.reduce((accumulator, currentItem) => {
      return accumulator + currentItem.total;
    }, 0);

    setTotalPrice(total);
  }, [cartData]);

  return (
    <Grid
      sx={{
        display: "flex",
        flexDirection: "column",
        flexWrap: "wrap",
        columnGap: "20px",
        justifyContent: "center",
        alignContent: "center",
        gap: "50px",
      }}
    >
      <Grid
        sx={{
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#fff",
          borderRadius: "10px",
          padding: "15px",
          rowGap: "10px",
  
        }}
      >
        <Typography color="#000" variant="h5">
          Всего товар: {data?.length}
        </Typography>
        <Typography color="#000" variant="h5">
          Общая сумма: {totalPrice} ₽
        </Typography>
        <Button
          onClick={() => {
            navigate("/order", { state: { cartData, totalPrice } });
          }}
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
          Перейти к оплате
        </Button>
      </Grid>
      <Grid
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: "30px",
          justifyContent: "center",
        }}
      >
        {isLoading ? (
          <Grid
            sx={{
              animation: "spin 2s linear infinite",
              "@keyframes spin": {
                "0%": {
                  transform: "rotate(360deg)",
                },
                "100%": {
                  transform: "rotate(0deg)",
                },
              },
            }}
          >
            <img src="./icon/loop_black_48dp.svg" alt="" />
          </Grid>
        ) : (
          data?.map((productCart) => (
            <ProductCard
              {...productCart.product}
              key={productCart.product.id}
              cartId={productCart.id}
              quantity={productCart.quantity}
              cart
              cartData={cartData}
              setCartData={(newCartData) => setCartData(newCartData)}
            />
          ))
        )}
      </Grid>
    </Grid>
  );
};

export default ProductCart;
