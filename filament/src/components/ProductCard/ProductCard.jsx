import { Grid, Link, Typography } from "@mui/material";
import React, { useState } from "react";
import { useProductFavoriteToggle } from "./hook/useProductFavoriteToggle";

const ProductCard = ({
  id,
  productName,
  productPrice,
  productSize,
  productImage,
  admin,
}) => {
  const [favorite, setFavorite] = useState(false);
  const { mutate, error } = useProductFavoriteToggle();

  const FavoriteToggle = (id, favorite) => {
    setFavorite(favorite);

    mutate(id);
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
      <Grid sx={{ position: "relative" }}>
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
          <Grid sx={{ position: "absolute", top: "10px", right: "10px" }}>
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
          <Grid sx={{ position: "absolute", top: "10px", right: "10px" }}>
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
        <Grid
          sx={{
            display: "flex",
            flexDirection: "column",
            rowGap: "10px",
          }}
        >
          {admin ? (
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
                Изменить
              </Link>
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
                Удалить
              </Link>
            </>
          ) : (
            <>
              {" "}
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
                В избранное
              </Link>
            </>
          )}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ProductCard;
