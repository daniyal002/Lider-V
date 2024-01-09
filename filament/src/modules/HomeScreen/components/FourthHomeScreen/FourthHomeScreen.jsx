import { Button, Grid, Input, Typography } from "@mui/material";
import React from "react";

const FourthHomeScreen = () => {
  return (
    <Grid
      sx={{
        display: "flex",
        maxWidth: "1320px",
        margin: "0 auto",
        padding: "0 20px",
        flexWrap: "wrap",
        justifyContent: "space-between",
      }}
    >
      <Grid
        sx={{
          width: "50%",
          "@media(max-width:900px)": {
            display: "none",
          },
        }}
      >
        <img src="./img/single-image.jpg" alt="" style={{ width: "80%" }} />
      </Grid>

      <Grid
        sx={{
          display: "flex",
          flexDirection: "column",
          rowGap: "15px",
          width: "50%",
          "@media(max-width:900px)": {
            width: "100%",
          },
        }}
      >
        <Typography
          sx={{
            fontSize: "55px",
            fontWeight: "900",
            color: "#f2f2f2",
            "@media(max-width:650px)": {
              fontSize: "40px",
            },
            "@media(max-width:425px)": {
              fontSize: "30px",
            },
          }}
        >
          Подпишитесь и получайте свежие новости о нитях для 3D принтеров.
        </Typography>
        <Typography
          sx={{
            fontSize: "19px",
            fontWeight: "300",
            color: "#F0F0F0",
            lineHeight: "2",
            "@media(max-width:650px)": {
              fontSize: "16px",
            },
          }}
        >
          Приобретайте высококачественные нити прямо сейчас. Наши нити
          обеспечивают надежную подачу материала и идеальное качество печати. В
          нашем ассортименте вы найдете разнообразие цветов и типов нитей, чтобы
          воплотить в жизнь все ваши творческие идеи.
        </Typography>
        <form
          style={{
            display: "flex",
            padding: "10px",
            justifyContent: "space-between",
            background: "rgba(134, 155, 223, 0.14)",
            border: "2px solid rgba(83, 84, 136, 0.4)",
            borderRadius: "8px",
            margin: "70px 0 32px 0 ",
          }}
        >
          <Input
            placeholder="Введите Е-mail"
            sx={{
              height: "50px",
              padding: "34px 15px",
              color: "rgba(240, 240, 240, 0.7);",
              border: "none",
              outline: "none",
              fontSize: "20px",
              width: "65%",
              "@media(max-width:470px)": {
                padding: "17px 20px",
                fontSize: "14px",
              },
              "@media(max-width:350px)": {
                padding: "17px 20px",
                fontSize: "12px",
              },

            }}
          />
          <Button
            sx={{
              background: "linear-gradient( #6847F5, #A95BF3)",
              color: "#f2f2f2",
              border: "none",
              padding: "17px 50px",
              fontSize: "19px",
              fontWeight: "500",
              transition: "0.5s",
              textDecoration: "none",
              "@media(max-width:470px)": {
                padding: "17px 20px",
                fontSize: "14px",
              },
              "&:hover": {
                transition: "0.5s",
                background: "linear-gradient(#A95BF3,#6847F5)",
              },
            }}
          >
            Подписаться
          </Button>
        </form>
      </Grid>
    </Grid>
  );
};

export default FourthHomeScreen;
