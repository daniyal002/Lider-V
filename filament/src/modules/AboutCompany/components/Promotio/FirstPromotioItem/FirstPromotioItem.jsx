import { Grid, Link, Typography } from "@mui/material";
import React from "react";

const FirstPromotioItem = () => {
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
        Почему стоит доверять Нам
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
        Для изготовления промышленных композитов — мы используем собственную
        методику получения полимерных композиций с регулируемым уровнем
        показателей для 3Д печати FDM.
      </Typography>
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
        Сертификаты
      </Link>
    </Grid>
  );
};

export default FirstPromotioItem;
