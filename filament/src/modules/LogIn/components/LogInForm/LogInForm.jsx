import { Button, Checkbox, Grid, Input, Link, Typography } from "@mui/material";
import React from "react";

const LogInForm = () => {
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
            type="email"
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
        </Grid>
        <Grid
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            columnGap: "25px",
          }}
        >
          <Grid sx={{ display: "flex", alignItems: "center" }}>
            <Checkbox
              required
              sx={{
                color: "#A95BF3",
              }}
            />
            <Typography
              sx={{
                color: "#fff",
                "@media(max-width:425px)": {
                  fontSize: "14px",
                },
                "@media(max-width:393px)": {
                  fontSize: "12px",
                },
              }}
            >
              Запомнить меня
            </Typography>
          </Grid>
          <Grid>
            <Link
              sx={{
                color: "#6847F5",
                textDecoration: "none",
                "@media(max-width:425px)": {
                  fontSize: "14px",
                },
                "@media(max-width:393px)": {
                  fontSize: "12px",
                },
              }}
            >
              Забыли пароль ?
            </Link>
          </Grid>
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
            Войти
          </Button>
        </Grid>
      </form>
    </Grid>
  );
};

export default LogInForm;
