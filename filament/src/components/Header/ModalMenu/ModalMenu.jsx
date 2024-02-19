import { Box, Button, Grid, Modal } from "@mui/material";
import React from "react";
import { Link, useLocation } from "react-router-dom";

const ModalMenu = ({ open, handleClose, pages, logout, isLoggedIn }) => {
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
          backgroundColor: "#04040c",
          maxWidth: "300px",
          height: "100%",
          rowGap: "20px",
          overflowY: "scroll",
          "&::-webkit-scrollbar": {
            width: "0px", // Скрыть ширину скроллбара
            background: "transparent", // Сделать скроллбар прозрачным
          },
          "&::-webkit-scrollbar-thumb": {
            background: "transparent", // Сделать панель скроллбара прозрачной
          },
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
              {pages.map((page, index) => (
                <li key={index}>
                  <Link
                    to={page.link}
                    onClick={handleClose}
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
              onClick={handleClose}
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
              onClick={handleClose}
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
          {isLoggedIn ? (
            <Link
              onClick={() => {
                logout();
                handleClose();
              }}
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
              Выход
            </Link>
          ) : (
            <>
              <Link
                to="/login"
                onClick={handleClose}
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
                onClick={handleClose}
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
            </>
          )}
        </Grid>
      </Box>
    </Modal>
  );
};

export default ModalMenu;