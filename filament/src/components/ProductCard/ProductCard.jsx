import { Button, Grid, Link, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useProductFavoriteToggle } from "./hook/useProductFavoriteToggle";
import ModalChangeProductCard from "./components/ModalChangeProductCard/ModalChangeProductCard";
import ModalProductCardMore from "./components/ModalProductCardMore/ModalProductCardMore";
import { useGetProductFavorite } from "../../hook/useGetProductFavorite";

const ProductCard = ({
  id,
  productName,
  productPrice,
  productSize,
  productImage,
  productQuantity,
  productDescription,
  admin,
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
  console.log(data);
  const [favorite, setFavorite] = useState(null);
  const { mutate: ProductFavoriteToggle, error } = useProductFavoriteToggle();

  useEffect(() => {
    console.log(id);
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
          src="./img/collection-item2.jpg"
          alt=""
          width="406"
          style={{
            borderRadius: "10px",
            maxWidth: "406px",
            width: "100%",
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
          width: "90%",
          maxWidth: "370px",
          padding: "20px",
          borderRadius: "20px",
          display: "flex",
          flexDirection: "column",
          rowGap: "20px",
          transform: "translateY(-50%)",
          transition: "0.5s",
          "&:hover": {
            transform: "translateY(-60%)",
          },
          "@media(max-width:432px)": {
            transform: "translateY(-30%)",
          },
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
                href="#"
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
              <Link
                href="#"
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
                В корзину
              </Link>
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
          )}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ProductCard;
