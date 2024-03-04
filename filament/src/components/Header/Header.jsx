import { Button, Grid } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import ModalMenu from "./ModalMenu/ModalMenu";
import { useEffect, useState } from "react";
import { useAuth } from "../AuthProvider/AuthProvider";
import logo from "../../assets/logo.svg";
import favoriteBorderIcon from "../../assets/favorite_border_black_24dp.svg";
import favoriteIcon from "../../assets/favorite_black_24dp.svg";
import shoppingCartIcon from "../../assets/shopping_cart_white_24dp.svg";
import shoppingCartBorderIcon from "../../assets/shopping_cart_border_white_24dp.svg";
import menuIcon from "../../assets/menu_white.svg";

const Header = () => {
  const location = useLocation();
  const pages = [
    { link: "/", text: "Главная" },
    { link: "/aboutcompany", text: "О компании" },
    { link: "/products", text: "Продукты" },
    { link: "/categories", text: "Категории" },
    { link: "/shares", text: "Акции" },
    { link: "/cooperation", text: "Сотрудничество" },
    { link: "/contact", text: "Контакты" },

    // { link: "/gallery", text: "Фотогаллерея" },
  ];
  const { isLoggedIn, logout } = useAuth();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [showModalMenu, setShowModalMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 500) {
        setShowModalMenu(true);
      } else if (offset < 50) {
        setShowModalMenu(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header>
      <ModalMenu
        open={open}
        handleClose={handleClose}
        pages={pages}
        logout={logout}
        isLoggedIn={isLoggedIn}

      />
      {showModalMenu && (
        <Grid sx={showModalMenu ? styles.sticky : {}}>
          <Grid
            sx={{
              maxWidth: "208px",
              width: "100%",
              transition: "0.5s", // Добавляем плавный переход
              overflow: showModalMenu ? "hidden" : "auto", // Скрываем содержимое, если показывается модальное меню
              maxHeight: showModalMenu ? "0" : "100%", // Устанавливаем максимальную высоту в 0, чтобы скрыть содержимое
            }}
          >
            <img
              src={logo}
              alt="Logo"
              style={{
                width: "100%",
              }}
            />
          </Grid>

          <Grid>
            <Button
              onClick={handleOpen}
              sx={{
                transition: "max-height 0.5s", // Добавляем плавный переход
                overflow: showModalMenu ? "hidden" : "auto", // Скрываем содержимое, если показывается модальное меню
                maxHeight: showModalMenu ? "0" : "100%", // Устанавливаем максимальную высоту в 0, чтобы скрыть содержимое
              }}
            >
              <img src={menuIcon} alt="" />
            </Button>
          </Grid>
        </Grid>
      )}
      <Grid sx={styles.header}>
        <Grid
          sx={{
            maxWidth: "208px",
            width: "100%",
          }}
        >
          <img
            src={logo}
            alt="Logo"
            style={{
              width: "100%",
            }}
          />
        </Grid>

        <Grid
          sx={{
            "@media(max-width:1200px)": {
              display: "none",
            },
          }}
        >
          <nav>
            <ul
              style={{
                marginTop: "20px",
                display: "flex",
                columnGap: "30px",
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
                    style={{
                      color:
                        location.pathname === page.link ? "#A95BF3" : "#fff", // Устанавливаем красный цвет для активной ссылки
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
            columnGap: "20px",
            rowGap: "20px",
            flexDirection: "column",
            "@media(max-width:1200px)": {
              display: "none",
            },
          }}
        >
          <Grid sx={{ display: "flex", columnGap: "20px" }}>
            {isLoggedIn ? (
              <>
                <Button
                  onClick={logout}
                  sx={{
                    background: "linear-gradient( #6847F5, #A95BF3)",
                    padding: "0",
                    fontSize: "19px",
                    fontWeight: "500",
                    transition: "0.5s",
                    border: "1px solid #04040c",

                    "&:hover": {
                      border: "1px solid #A95BF3",

                      background: "#04040c",
                    },
                  }}
                >
                  <Link
                    to="/login"
                    style={{
                      textDecoration: "none",
                      padding: "17px 50px",
                      color: "#f2f2f2",
                    }}
                  >
                    Выход
                  </Link>
                </Button>

                <Button
                  sx={{
                    background: "linear-gradient( #6847F5, #A95BF3)",
                    padding: "0",
                    fontSize: "19px",
                    fontWeight: "500",
                    transition: "0.5s",
                    border: "1px solid #04040c",

                    "&:hover": {
                      border: "1px solid #A95BF3",

                      background: "#04040c",
                    },
                  }}
                >
                  <Link
                    to="/profile"
                    style={{
                      textDecoration: "none",
                      padding: "17px 50px",
                      color: "#f2f2f2",
                    }}
                  >
                    Профиль
                  </Link>
                </Button>
              </>
            ) : (
              <>
                <Button
                  sx={{
                    background: "linear-gradient( #6847F5, #A95BF3)",
                    padding: "0",
                    fontSize: "19px",
                    fontWeight: "500",
                    transition: "0.5s",
                    border: "1px solid #04040c",

                    "&:hover": {
                      border: "1px solid #A95BF3",

                      background: "#04040c",
                    },
                  }}
                >
                  <Link
                    to="/login"
                    style={{
                      textDecoration: "none",
                      padding: "17px 50px",
                      color: "#f2f2f2",
                    }}
                  >
                    Вход
                  </Link>
                </Button>

                <Button
                  sx={{
                    border: "1px solid #A95BF3",
                    fontSize: "19px",
                    fontWeight: "500",
                    transition: "0.5s",
                    padding: "0",

                    "&:hover": {
                      background: "#A95BF3",
                    },
                  }}
                >
                  <Link
                    to="/register"
                    style={{
                      padding: "17px 50px",
                      color: "#f2f2f2",
                      textDecoration: "none",
                    }}
                  >
                    Регистрация
                  </Link>
                </Button>
              </>
            )}
          </Grid>

          <Grid
            sx={{
              display: "flex",
              columnGap: "20px",
              justifyContent: "flex-end",
            }}
          >
            <Button sx={{}}>
              <Link
                to="/favorites"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  color: "#FFF",
                  fontSize: "19px",
                  textDecoration: "none",
                  textTransform: "none",
                }}
              >
                {location.pathname == "/favorites" ? (
                  <img
                    src={favoriteIcon}
                    alt="favorite"
                    width="50"
                    style={{
                      cursor: "pointer",
                    }}
                  />
                ) : (
                  <img
                    src={favoriteBorderIcon}
                    alt="favorite"
                    width="50"
                    style={{
                      cursor: "pointer",
                    }}
                  />
                )}
                Избранное
              </Link>
            </Button>

            <Button sx={{}}>
              <Link
                to="/cart"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  color: "#FFF",
                  fontSize: "19px",
                  textDecoration: "none",
                  textTransform: "none",
                }}
              >
                {location.pathname == "/cart" ? (
                  <img
                    src={shoppingCartIcon}
                    alt="favorite"
                    width="50"
                    style={{
                      cursor: "pointer",
                    }}
                  />
                ) : (
                  <img
                    src={shoppingCartBorderIcon}
                    alt="favorite"
                    width="50"
                    style={{
                      cursor: "pointer",
                    }}
                  />
                )}
                Корзина
              </Link>
            </Button>
          </Grid>
        </Grid>
        <Grid
          sx={{
            "@media(min-width:1200px)": {
              display: "none",
            },
          }}
        >
          <Button onClick={handleOpen}>
            <img src={menuIcon} alt="" />
          </Button>
        </Grid>
      </Grid>
    </header>
  );
};

const styles = {
  sticky: {
    position: "fixed",
    top: "0",
    left: "0",
    zIndex: "1000",
    background: "#04040c",
    width: "100%",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    columnGap: "20px",
    padding: "18px 24px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    transition: "background-color 0.5s ease-out",
  },
  header: {
    width: "100%",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    columnGap: "20px",
    padding: "38px 24px",
  },
};

export default Header;
