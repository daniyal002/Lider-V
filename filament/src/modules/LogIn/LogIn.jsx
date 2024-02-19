import { Grid, Typography } from "@mui/material";
import React from "react";
import LogInForm from "./components/LogInForm/LogInForm";
import { Link } from "react-router-dom";

const LogIn = () => {
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
        Войти/
        <Link
          to="/register"
          style={{
            textDecoration: "none",
          }}
        >
          Регистрация
        </Link>
      </Typography>

      <LogInForm />
    </Grid>
  );
};

export default LogIn;
