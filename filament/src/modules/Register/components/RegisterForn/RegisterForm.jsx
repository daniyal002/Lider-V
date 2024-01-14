import { Button, Checkbox, Grid, Input, Link, Typography } from "@mui/material";
import React from "react";

const RegisterForm = () => {
  return (
    <Grid>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          maxWidth: "864px",
          margin: "0 auto",
          background: "rgba(134, 155, 223, 0.14)",
          borderRadius: "10px",
          padding: "20px",
          rowGap: "40px",
          "@media(max-width:700px)": {
            rowGap: "20px",
          },
        }}
      >
        <Grid
          sx={{
            display: "flex",
            flexDirection: "column",
            rowGap: "20px",
          }}
        >
          <Input
            type="text"
            name="name"
            required
            placeholder="Ваше имя"
            sx={{
              height: "50px",
              padding: "34px 15px",
              color: "#fff",
              border: "2px solid rgba(83, 84, 136, 0.4)",
              outline: "none",
              fontSize: "20px",
              width: "100%",
              borderRadius: "10px",
              background: "rgba(134, 155, 223, 0.14)",
              outlineStyle: "none",
              "&::after": {
                content: "none",
              },
              "&::before": {
                content: "none",
              },
            }}
          />
          <Input
            type="email"
            name="email"
            required
            placeholder="Ваш E-mail"
            sx={{
              height: "50px",
              padding: "34px 15px",
              color: "#fff",
              border: "2px solid rgba(83, 84, 136, 0.4)",
              outline: "none",
              fontSize: "20px",
              width: "100%",
              borderRadius: "10px",
              background: "rgba(134, 155, 223, 0.14)",
              outlineStyle: "none",
              "&::after": {
                content: "none",
              },
              "&::before": {
                content: "none",
              },
            }}
          />

          <Input
            type="password"
            id="new-password"
            placeholder="Ваш пароль"
            sx={{
              height: "50px",
              padding: "34px 15px",
              color: "#fff",
              border: "2px solid rgba(83, 84, 136, 0.4)",
              outline: "none",
              fontSize: "20px",
              width: "100%",
              borderRadius: "10px",
              background: "rgba(134, 155, 223, 0.14)",

              "&::after": {
                content: "none",
              },
              "&::before": {
                content: "none",
              },
            }}
          />

          <Input
            type="password"
            name="passwordConfirm"
            placeholder="Потвердите пароль"
            sx={{
              height: "50px",
              padding: "34px 15px",
              color: "#fff",
              border: "2px solid rgba(83, 84, 136, 0.4)",
              outline: "none",
              fontSize: "20px",
              width: "100%",
              borderRadius: "10px",
              background: "rgba(134, 155, 223, 0.14)",

              "&::after": {
                content: "none",
              },
              "&::before": {
                content: "none",
              },
            }}
          />
        </Grid>

        <Grid>
          <Button
            type="submit"
            sx={{
              background: "linear-gradient( #6847F5, #A95BF3)",
              color: "#f2f2f2",
              border: "none",
              padding: "17px 50px",
              fontSize: "19px",
              fontWeight: "500",
              transition: "0.5s",
              textDecoration: "none",
              width: "100%",
              "@media(max-width:350px)": {
                fontSize: "17px",
              },
              "&:hover": {
                transition: "0.5s",
                background: "linear-gradient(#A95BF3,#6847F5)",
              },
            }}
          >
            Зарегистрироваться
          </Button>
        </Grid>
      </form>
    </Grid>
  );
};

export default RegisterForm;
