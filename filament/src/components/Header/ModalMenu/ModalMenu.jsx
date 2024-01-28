import { Box, Button, Grid, Modal } from "@mui/material";
import React from "react";
import { Link, useLocation } from "react-router-dom";

const ModalMenu = ({ open, handleClose, pages }) => {
  const location = useLocation();

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          padding: "38px 24px",
          backgroundColor: "rgba(169, 91, 243, 0.60)",
          maxWidth: "300px",
          height: "100%",
          rowGap: "20px",
          overflowY: "scroll",
        }}
      >
        <Grid
          sx={{ width: "100%", display: "flex", justifyContent: "flex-end" }}
        >
          <Button onClick={handleClose}>
            <img src="./icon/close_black.svg" alt="close" />
          </Button>
        </Grid>
        <Grid>
          <nav>
            <ul
              style={{
                display: "flex",
                flexDirection: "column",
                rowGap: "15px",
                justifyContent: "center",
                flexWrap: "wrap",
                listStyle: "none",
              }}
            >
              {pages.map((page) => (
                <li>
                  <Link
                    to={page.link}
                    style={{
                      color: "#fff",
                      textDecoration: "none",
                      fontSize: "19px",
                    }}
                  >
                    {page.text}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </Grid>

        <Grid
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            columnGap: "20px",
          }}
        >
          <Button
            sx={{
              fontSize: "19px",
            }}
          >
            <Link
              to="/favorites"
              style={{
                display: "flex",
                alignItems: "center",
                columnGap: "5px",

                color: "#fff",
                fontSize: "19px",
                textDecoration: "none",
                textTransform: "none",
              }}
            >
              Избранное
              {location.pathname == "/favorites" ? (
                <img
                  src="./icon/favorite_black_24dp.svg"
                  alt="favorite"
                  width="50"
                  style={{
                    cursor: "pointer",
                  }}
                />
              ) : (
                <img
                  src="./icon/favorite_border_black_24dp.svg"
                  alt="favorite"
                  width="50"
                  style={{
                    cursor: "pointer",
                  }}
                />
              )}
            </Link>
          </Button>

          <Button sx={{}}>
            <Link
              to="/cart"
              style={{
                display: "flex",
                alignItems: "center",
                columnGap: "30px",
                color: "#fff",
                fontSize: "19px",
                textDecoration: "none",
                textTransform: "none",
              }}
            >
              Корзина
              {location.pathname == "/favorites" ? (
                <img
                  src="./icon/shopping_cart_white_24dp.svg"
                  alt="favorite"
                  width="50"
                  style={{
                    cursor: "pointer",
                  }}
                />
              ) : (
                <img
                  src="./icon/shopping_cart_border_white_24dp.svg"
                  alt="favorite"
                  width="50"
                  style={{
                    cursor: "pointer",
                  }}
                />
              )}
            </Link>
          </Button>
        </Grid>

        <Grid
          sx={{
            display: "flex",
            flexDirection: "column",
            rowGap: "10px",
          }}
        >
          <Link
            to="/login"
            style={{
              background: "linear-gradient( #6847F5, #A95BF3)",
              color: "#f2f2f2",
              border: "none",
              padding: "10px 30px",
              fontSize: "19px",
              fontWeight: "500",
              transition: "0.5s",
              borderRadius: "5px",
              textDecoration: "none",
            }}
          >
            Вход
          </Link>
          <Link
            to="/register"
            style={{
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
            Регистрация
          </Link>
        </Grid>

        
      </Box>
    </Modal>
  );
};

export default ModalMenu;
