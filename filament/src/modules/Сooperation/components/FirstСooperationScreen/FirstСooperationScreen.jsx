import { Grid, Typography } from "@mui/material";
import React from "react";

const FirstСooperationScreen = () => {
  return (
    <Grid
      sx={{
        display: "flex",
        flexDirection: "column",
        rowGap: "10px",
      }}
    >
      <Typography
        sx={{
          fontSize: "55px",
          color: "#fff",
          fontWeight: "900",
          justifyContent: "center",
          "@media(max-width:580px)": {
            fontSize: "35px",
          },
          "@media(max-width:400px)": {
            fontSize: "30px",
          },
        }}
      >
        Сотрудничество
      </Typography>
      <Typography
        sx={{
          fontSize: "20px",
          color: "#A95BF3",
          fontWeight: "600",
          justifyContent: "center",
        }}
      >
        Оптовикам
      </Typography>

      <Typography
        sx={{
          fontSize: "16px",
          color: "#fff",
          justifyContent: "center",
        }}
      >
        В нашем интернет-магазине, Вы можете купить пластик оптом от
        производителя по выгодной цене. Наш оптовый отдел рад предложить Вам
        крупный и мелкий опт, товары по максимально низким оптовым ценам.
        Приобрести оптом можно все виды пластиков, размещенные в прайс листе.
        Так же мы отправляем пластик оптом в другие страны.
      </Typography>
    </Grid>
  );
};

export default FirstСooperationScreen;
