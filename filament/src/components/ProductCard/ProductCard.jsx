import { Button, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useProductFavoriteToggle } from "./hook/useProductFavoriteToggle";
import ModalChangeProductCard from "./components/ModalChangeProductCard/ModalChangeProductCard";
import ModalProductCardMore from "./components/ModalProductCardMore/ModalProductCardMore";
import { useGetProductFavorite } from "../../hook/useGetProductFavorite";
import { useAddProductCart } from "./hook/useAddProductCart";
import { useDeleteProduct } from "../../modules/AdminPanel/hook/useDeleteProduct";
import { useDeleteProductCart } from "./hook/useDeleteProductCart";
import { Link } from "react-router-dom";

const ProductCard = ({
  id,
  productName,
  productPrice,
  productSize,
  productImage,
  productQuantity,
  productDescription,
  admin,
  cart,
  quantity,
  cartId,
  setCartData,
  cartData,
}) => {
  // Modal change
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // Modal More
  const [openMore, setOpenMore] = React.useState(false);
  const handleOpenMore = () => setOpenMore(true);
  const handleCloseMore = () => setOpenMore(false);

  const { data } = useGetProductFavorite();
  const [favorite, setFavorite] = useState(null);
  const { mutate: ProductFavoriteToggle, error } = useProductFavoriteToggle();

  useEffect(() => {
    const hasId = data?.some((obj) => obj.id === id);
    if (hasId) {
      setFavorite(true);
    } else {
      setFavorite(false); // Обработка случая, когда id не найден в data
    }
  }, [data, id]);

  const FavoriteToggle = (id, favorite) => {
    setFavorite(favorite);
    ProductFavoriteToggle(id);
  };

  const [countProduct, setCountProduct] = useState(quantity || 1);
  const { mutate: AddProductCart } = useAddProductCart();

  const handleCountProduct = (e) => {
    if (Number(e.target.value) < 10000) {
      setCountProduct(Number(e.target.value));
    }
  };

  const handleDecrement = () => {
    if (countProduct > 1) {
      setCountProduct((prev) => prev - 1);
    }
  };

  const handleIncrement = () => {
    if (countProduct < 10000) {
      setCountProduct((prev) => prev + 1);
    }
  };

  const AddCart = () => {
    AddProductCart({
      productId: id,
      quantity: countProduct,
    });
  };
  const [total, setTotal] = useState(quantity * productPrice);

  if (cart) {
    useEffect(() => {
      console.log("countProduct:", countProduct);
      console.log("total:", total);

      // Вычисляем новое значение total
      // Обновляем total
      setTotal((prevTotal) => (prevTotal = countProduct * productPrice));

      const newCartItem = {
        cartId,
        total: total,
        countProduct,
        productPrice,
        productName,
        productImage,
      };

      // Создаем новый объект cartData с обновленным значением для productId
      setCartData((prevCartData) => {
        // Проверяем, существует ли элемент с таким cartId
        const existingCartItem = prevCartData.find(
          (item) => item.cartId === cartId
        );

        if (existingCartItem) {
          // Обновляем существующий элемент в массиве
          return prevCartData.map((item) => {
            if (item.cartId === cartId) {
              return newCartItem; // Обновляем элемент с новыми данными
            }
            return item; // Оставляем все остальные элементы без изменений
          });
        } else {
          // Добавляем новый элемент в массив
          return [...prevCartData, newCartItem];
        }
      });
    }, [countProduct, total]);
  }

  const { mutate: DeleteProduct } = useDeleteProduct();
  const { mutate: DeleteProductCart } = useDeleteProductCart();
  const FunDeleteProductCart = (id) => {
    const updatedCartData = cartData.filter((item) => item.cartId !== id);
    setCartData(updatedCartData);
    DeleteProductCart(id);
  };

  return (
    <Grid
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        maxWidth: "406px",
        width: "100%",
      }}
    >
      <ModalChangeProductCard open={open} handleClose={handleClose} id={id} />
      <ModalProductCardMore
        open={openMore}
        handleClose={handleCloseMore}
        productDescription={productDescription}
      />
      <Grid
        sx={{
          position: "relative",
        }}
      >
        <img
          src={
            // "./img/collection-item2.jpg"
            import.meta.env.VITE_BASE_URL_FROM_IMAGE + productImage
          }
          alt=""
          style={{
            borderRadius: "20px 20px 0px 0px",
            maxWidth: "560px",
            maxHeight: "700px",
            width: "100%",
            height: "100%",
          }}
        />
        {favorite ? (
          <Grid
            sx={{
              position: "absolute",
              top: "10px",
              right: "10px",
            }}
          >
            <img
              src="./icon/favorite_black_24dp.svg"
              width="50"
              style={{
                cursor: "pointer",
              }}
              onClick={() => FavoriteToggle(id, false)}
            />
          </Grid>
        ) : (
          <Grid
            sx={{
              position: "absolute",
              top: "10px",
              right: "10px",
            }}
          >
            <img
              src="./icon/favorite_border_black_24dp.svg"
              width="50"
              style={{
                cursor: "pointer",
              }}
              onClick={() => FavoriteToggle(id, true)}
            />
          </Grid>
        )}
      </Grid>

      <Grid
        sx={{
          backgroundColor: "#fff",
          width: "100%",
          padding: "20px",
          borderRadius: "0px 0px 20px 20px",
          display: "flex",
          flexDirection: "column",
          rowGap: "20px",
        }}
      >
        <Grid
          sx={{
            display: "flex",
            justifyContent: "space-between",
            columnGap: "20px",
            "@media (max-width:400px)": {
              flexWrap: "wrap",
              rowGap: "20px",
            },
          }}
        >
          <Typography
            sx={{
              maxWidth: "250px",
              color: "#000",
              fontSize: "22px",
              fontWeight: "700",
              "@media(max-width:387px)": {
                fontSize: "18px",
              },
            }}
          >
            {productName}
          </Typography>
          <Typography
            sx={{
              color: "#000",
              fontSize: "22px",
              fontWeight: "700",
              "@media(max-width:387px)": {
                fontSize: "18px",
              },
            }}
          >
            {productPrice} ₽
          </Typography>
        </Grid>
        <Typography
          sx={{
            color: "#000",
            fontSize: "22px",
            fontWeight: "700",
            "@media(max-width:387px)": {
              fontSize: "18px",
            },
          }}
        >
          {productSize}
        </Typography>
        {admin && (
          <Typography
            sx={{
              color: "#000",
              fontSize: "22px",
              fontWeight: "700",
              "@media(max-width:387px)": {
                fontSize: "18px",
              },
            }}
          >
            Остаток: {productQuantity}
          </Typography>
        )}

        <Grid
          sx={{
            display: "flex",
            flexDirection: "column",
            rowGap: "10px",
          }}
        >
          {admin ? (
            <>
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
                onClick={handleOpen}
              >
                Изменить
              </Button>
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
                onClick={() => DeleteProduct(id)}
              >
                Удалить
              </Button>
              <Button
                onClick={handleOpenMore}
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
                Подробнее
              </Button>
            </>
          ) : (
            <>
              <Grid
                sx={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "row-reverse",
                  justifyContent: "space-between",
                  "@media(max-width:442px)": {
                    flexDirection: "column-reverse",
                    alignItems: "stretch",
                    rowGap: "10px",
                  },
                }}
              >
                {!cart && (
                  <Button
                    onClick={AddCart}
                    sx={{
                      background: "linear-gradient( #6847F5, #A95BF3)",
                      color: "#f2f2f2",
                      border: "none",
                      padding: "10px 15px",
                      fontSize: "17px",
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
                    В корзину
                  </Button>
                )}

                <Grid
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Button onClick={handleIncrement}>
                    <img
                      src="./icon/add_circle_black_36dp.svg"
                      alt=""
                      width="50"
                    />
                  </Button>
                  <input
                    id="outlined-number"
                    type="number"
                    max="9999"
                    min="1"
                    onChange={handleCountProduct}
                    value={countProduct}
                    style={{
                      width: "40px",
                      padding: "20px 5px",
                      fontSize: "16px",
                      border: "1px solid #A95BF3",
                      borderRadius: "10px",
                    }}
                  />

                  <Button onClick={handleDecrement}>
                    <img
                      src="./icon/remove_circle_black_36dp.svg"
                      alt=""
                      width="50"
                    />
                  </Button>
                </Grid>
              </Grid>
              {cart ? (
                <Button
                  onClick={() => FunDeleteProductCart(cartId)}
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
                  Удалить из корзины
                </Button>
              ) : (
                <Button
                  sx={{
                    background: "linear-gradient( #6847F5, #A95BF3)",

                    transition: "0.5s",
                    borderRadius: "5px",
                    padding: "0",
                    "&:hover": {
                      transition: "0.5s",
                      background: "linear-gradient(#A95BF3,#6847F5)",
                    },
                  }}
                >
                  <Link
                    to={`/product/${id}`}
                    style={{
                      color: "#f2f2f2",
                      border: "none",
                      fontSize: "19px",
                      fontWeight: "500",
                      width: "100%",
                      listStyle: "none",
                      padding: "10px 30px",
                      textDecoration: "none",
                    }}
                  >
                    Подробнее
                  </Link>
                </Button>
              )}
            </>
          )}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ProductCard;
