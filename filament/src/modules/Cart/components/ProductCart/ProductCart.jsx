import React, { useState } from "react";
import { useGetProductCart } from "../../hook/useGetProductCart";
import { Button, Grid, Typography } from "@mui/material";
import ProductCard from "../../../../components/ProductCard/ProductCard";

const ProductCart = () => {
  const { data, error, isLoading } = useGetProductCart();
  const [cartData, setCartData] = useState([]); // Состояние корзины

  // Функция для обновления корзины
  const updateCart = (productId, quantity) => {
    // Создаем новый массив корзины, обновляя количество товара для соответствующего продукта
    const updatedCartData = data.map((item) =>
      item.product.id === productId ? { ...item, quantity } : item
    );
    setCartData(updatedCartData);
    console.log(cartData);
  };

  // Функция для расчета общей суммы в корзине
  const calculateTotalPrice = () => {
    return cartData.reduce(
      (total, item) => total + item.product.productPrice * item.quantity,
      0
    );
  };
  return (
    <Grid
      sx={{
        display: "flex",
        flexWrap: "wrap",
        columnGap: "20px",
        justifyContent: "center",
      }}
    >
      <Grid sx={{ display: "flex", flexWrap: "wrap", gap: "30px" }}>
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
              cartId = {productCart.id}
              quantity={productCart.quantity}
              cart
              updateCart={updateCart}
            />
          ))
        )}
      </Grid>
      <Grid
        sx={{
          backgroundColor: "#fff",
          borderRadius: "5px",
          padding: "10px",
        }}
      >
        <Button
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
        <Typography color="#000">Всего товар: {data?.length}</Typography>
        <Typography color="#000">
          Общая сумма: {calculateTotalPrice()}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default ProductCart;
