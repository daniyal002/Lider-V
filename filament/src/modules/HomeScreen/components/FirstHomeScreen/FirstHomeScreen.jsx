import React from "react";
import { Grid, Link, Typography } from "@mui/material";

const FirstHomeScreen = () => {
  return (
    <Grid
      sx={{
        display: "flex",
        flexDirection: "row",
        padding: "133px 20px",
        maxWidth: "1320px",
        margin: "0 auto",
      }}
    >
      <Grid
        sx={{
          display: "flex",
          flexDirection: "column",
          rowGap: "20px",
        }}
      >
        <Typography
          sx={{
            fontSize: " 65px",
            background: "linear-gradient(297deg, #9CD0FF, #A95BF3, #9CD0FF)",
            fontWeight: "900",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            "@media(max-width:1200px)": {
              fontSize: "40px",
            },
            "@media(max-width:416px)": {
              fontSize: "28px",
            },
          }}
        >
          ООО «Лидер-В» - производитель филамента для 3D печати
        </Typography>
        <Typography
          sx={{
            width: "85%",
            fontSize: "19px",
            lineHeight: "2",
            color: "#F2F2F2",
            marginBottom: "16px",
          }}
        >
          ООО «Лидер-В» - это:
          <br /> -Современное оборудование и передовые технологии
          <br />
          -Производственные мощности, позволяющие выпускать до 10тонн готовой
          продукции в месяц. <br />
          -Сертификаты соответствия -Двойной контроль, гарантирующий высокое
          качество нити.
          <br /> -Большой ассортимент выпускаемой продукции
          <br /> -Лучшие цены за нить высокого качества.
        </Typography>
        <Grid
          sx={{
            display: "flex",
            flexDirection: "row",
            columnGap: "20px",
            "@media(max-width:600px)": {
              flexDirection: "column",
              rowGap: "20px",
              textAlign: "center",
            },
          }}
        >
          <Link
            href="#"
            sx={{
              background: "linear-gradient( #6847F5, #A95BF3)",
              color: "#f2f2f2",
              border: "none",
              padding: "17px 50px",
              fontSize: "19px",
              fontWeight: "500",
              transition: "0.5s",
              textDecoration: "none",
              "&:hover": {
                transition: "0.5s",
                background: "linear-gradient(#A95BF3,#6847F5)",
              },
            }}
          >
            Get Started
          </Link>
          <Link
            href="#"
            sx={{
              color: "#f2f2f2",
              padding: "17px 50px",
              fontSize: "19px",
              fontWeight: "500",
              transition: "all 0.3s ease-in",
              textDecoration: "none",
              border: "2px solid white",
              borderWidth: "2px",
              borderImage: "linear-gradient(to bottom, #6847F5, #A95BF3) 1",
            }}
          >
            Create NTFs
          </Link>
        </Grid>
      </Grid>

      <Grid
        sx={{
          "@media(max-width:1200px)": {
            display: "none",
          },
        }}
      >
        <img src="./img/banner-image.png" alt="" width="526" />
      </Grid>
    </Grid>
  );
};

export default FirstHomeScreen;
