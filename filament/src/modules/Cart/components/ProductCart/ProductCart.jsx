import React, { useState } from "react";
import { useGetProductCart } from "../../hook/useGetProductCart";
import { Grid, Typography } from "@mui/material";
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
    console.log(cartData)
  };

  // Функция для расчета общей суммы в корзине
  const calculateTotalPrice = () => {
    return cartData.reduce(
      (total, item) => total + item.productPrice * item.quantity,
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
            quantity={productCart.quantity}
            cart
            updateCart={updateCart}
          />
        ))
      )}
      <Typography color="#fff">Общая сумма: {calculateTotalPrice()}</Typography>
    </Grid>
  );
};

export default ProductCart;
