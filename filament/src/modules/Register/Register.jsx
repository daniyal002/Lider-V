import { Grid, Typography } from "@mui/material";
import React from "react";
import RegisterForm from "./components/RegisterForn/RegisterForm";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <Grid
      sx={{
        maxWidth: "1320px",
        padding: "133px 20px",
        margin: "0 auto",
      }}
    >
      <Typography
        sx={{
          fontSize: "55px",
          color: "#fff",
          fontWeight: "900",
          marginBottom: "10px",
          justifyContent: "center",
          textAlign: "center",
          "@media(max-width:425px)": {
            fontSize: "35px",
          },
        }}
      >
        <Link
          to="/login"
          style={{
            textDecoration: "none",
          }}
        >
          Войти
        </Link>
        /Регистрация
      </Typography>

      <RegisterForm />
    </Grid>
  );
};

export default Register;
