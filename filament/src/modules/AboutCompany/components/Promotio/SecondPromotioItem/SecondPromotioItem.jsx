import { Grid, Typography } from "@mui/material";
import React from "react";

const SecondPromotioItem = () => {
  return (
    <Grid
      sx={{
        display: "flex",
        flexDirection: "column",
        flex: "1",
        justifyContent: "flex-start",
        alignItems: "flex-start",
      }}
    >
      <Typography
        sx={{
          fontSize: "55px",
          color: "#fff",
          fontWeight: "900",
          marginBottom: "8px",
          "@media(max-width:425px)": {
            fontSize: "35px",
          },
        }}
      >
        ООО «Лидер-В» - это:
      </Typography>
      <Typography
        sx={{
          fontSize: "19px",
          fontWeight: "300",
          color: "#F0F0F0",
          lineHeight: "2",
          marginBottom: "8px",
          "@media(max-width:650px)": {
            fontSize: "16px",
          },
        }}
      >
        Производственные мощности, позволяющие выпускать до 10тонн готовой
        продукции в месяц
      </Typography>
      <ul>
        <li>
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
            <span style={{ color: "#A95BF3" }}>✓ </span>Современное оборудование
            и передовые технологии
          </Typography>
        </li>
        <li>
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
            <span style={{ color: "#A95BF3" }}>✓ </span>Сертификаты соответствия
          </Typography>
        </li>
        <li>
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
            <span style={{ color: "#A95BF3" }}>✓ </span>Большой ассортимент
            выпускаемой продукции
          </Typography>
        </li>
        <li>
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
            <span style={{ color: "#A95BF3" }}>✓ </span>Лучшие цены за нить
            высокого качества
          </Typography>
        </li>
      </ul>
    </Grid>
  );
};

export default SecondPromotioItem;
