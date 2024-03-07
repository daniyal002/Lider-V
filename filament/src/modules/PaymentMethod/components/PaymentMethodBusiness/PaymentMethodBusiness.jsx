import { Grid, Typography } from "@mui/material";
import React from "react";

const PaymentMethodBusiness = () => {
  return (
    <Grid
      sx={{
        display: "flex",
        flexDirection: "column",
        rowGap: "10px",
        backgroundColor: "rgba(134, 155, 223, 0.14)",
        border: "2px solid rgba(83, 84, 136, 0.4)",
        padding: "10px",
        borderRadius: "14px",
        maxWidth: "450px",
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontSize: "30px",
          color: "#fff",
          fontWeight: "bold",
        }}
      >
        Оплата счета
      </Typography>
      <Typography
        variant="h3"
        sx={{
          fontSize: "16px",
          color: "#bfbfbf",
        }}
      >
        Срок оплаты выставленного менеджером счета – до 3 дней. В некоторых
        случаях по согласованию с менеджером его можно продлить. Мы отгрузим
        товар в течение суток после поступления денежных средств на наш счет.
      </Typography>
    </Grid>
  );
};

export default PaymentMethodBusiness;
