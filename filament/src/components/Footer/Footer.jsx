import { Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";

const Footer = () => {
  return (
    <Grid
      sx={{
        maxWidth: "1320px",
        margin: "0 auto",
        padding: "133px 20px 0 20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: "80px",
        "@media(max-width:448px)": {
          justifyContent: "flex-start",
        },
      }}
    >
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
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          columnGap: "100px",
          rowGap: "50px",
          flexWrap: "wrap",
          "@media(max-width:448px)": {
            justifyContent: "flex-start",
          },
        }}
      >
        <Grid sx={{ display: "flex", flexDirection: "column", rowGap: "5px" }}>
          <Typography
            sx={{ fontSize: "25px", color: "#fff", marginBottom: "3px" }}
          >
            Маркейтплейс
          </Typography>

          <Typography
            sx={{
              "&:hover": {
                color: "#A95BF3", // Измените стиль hover по вашему выбору
              },
            }}
          >
            <Link
              to="/products"
              style={{
                color: "#fff",
                textDecoration: "none",
                fontSize: "19px",
                "&:hover": {
                  color: "#A95BF3", // Измените стиль hover по вашему выбору
                },
              }}
            >
              Продукты
            </Link>
          </Typography>

          <Typography>
            <Link
              to="/"
              style={{
                color: "#fff",
                textDecoration: "none",
                fontSize: "19px",
              }}
            >
              Категории
            </Link>
          </Typography>
        </Grid>

        <Grid sx={{ display: "flex", flexDirection: "column", rowGap: "5px" }}>
          <Typography
            sx={{ fontSize: "25px", color: "#fff", marginBottom: "3px" }}
          >
            Информация
          </Typography>

          <Typography>
            <Link
              to="/shares"
              style={{
                color: "#fff",
                textDecoration: "none",
                fontSize: "19px",
              }}
            >
              Акции
            </Link>
          </Typography>

          <Typography>
            <Link
              to="/cooperation"
              style={{
                color: "#fff",
                textDecoration: "none",
                fontSize: "19px",
              }}
            >
              Сотрудничество
            </Link>
          </Typography>

          <Typography>
            <Link
              to="/paymentinfo"
              style={{
                color: "#fff",
                textDecoration: "none",
                fontSize: "19px",
              }}
            >
              Информация об оплате
            </Link>
          </Typography>
          <Typography>
            <Link
              to="/paymentmethod"
              style={{
                color: "#fff",
                textDecoration: "none",
                fontSize: "19px",
              }}
            >
              Методы оплаты
            </Link>
          </Typography>
        </Grid>

        <Grid sx={{ display: "flex", flexDirection: "column", rowGap: "5px" }}>
          <Typography
            sx={{ fontSize: "25px", color: "#fff", marginBottom: "3px" }}
          >
            Компания
          </Typography>

          <Typography>
            <Link
              to="/aboutcompany"
              style={{
                color: "#fff",
                textDecoration: "none",
                fontSize: "19px",
              }}
            >
              О компании
            </Link>
          </Typography>

          <Typography>
            <Link
              to="/contact"
              style={{
                color: "#fff",
                textDecoration: "none",
                fontSize: "19px",
              }}
            >
              Контакты
            </Link>
          </Typography>
        </Grid>
      </Grid>

      <Grid sx={{ width: "100%", borderTop: "1px solid #A95BF3" }}>
        <Typography
          sx={{
            fontSize: "19px",
            color: "#fff",
            textAlign: "center",
            marginTop: "16px",
            paddingBottom: "5px",
          }}
        >
          © 2024 Copyright Лидер-В
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;
