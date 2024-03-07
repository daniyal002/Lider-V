import { Grid, Typography } from "@mui/material";
import React from "react";
import SBP from "../../../../assets/SBP.svg";
import linkIcon from "../../../../assets/link_white_36dp.svg";
import QRIcon from "../../../../assets/qr_code_white_36dp.svg";

const PaymentMethodIndividual = () => {
  return (
    <Grid sx={{ display: "flex", flexDirection: "column", rowGap: "50px" }}>
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
          Онлайн-оплата
        </Typography>
        <Typography
          variant="h3"
          sx={{
            fontSize: "16px",
            color: "#bfbfbf",
          }}
        >
          Картами Visa, MasterCard, Мир. Без комиссии
        </Typography>
      </Grid>

      <Grid
        sx={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          "@media(max-width:600px)": {
            flexDirection: "column",
            rowGap: "20px",
          },
        }}
      >
        <Grid
          sx={{
            width: "50%",
            "@media(max-width:600px)": {
              width: "100%",
            },
          }}
        >
          <img
            src={SBP}
            alt="СПБ"
            style={{
              width: "90%",
            }}
          />
        </Grid>
        <Grid
          sx={{
            display: "flex",
            flexDirection: "column",
            rowGap: "20px",
            width: "50%",
            "@media(max-width:600px)": {
              width: "100%",
            },
          }}
        >
          <Grid
            sx={{ display: "flex", flexDirection: "column", rowGap: "5px" }}
          >
            <Typography variant="h3" sx={styles.paymentMethodTypographyHeader}>
              Оплата через СБП
            </Typography>
            <Typography variant="p" sx={styles.paymentMethodTypography}>
              Платите через QR-код или ссылку. Вводить реквизиты карты не
              понадобится! Нужен только смартфон с приложением банка и
              интернетом
            </Typography>
          </Grid>

          <Grid>
            <Grid sx={styles.paymentMethodGrid}>
              <img src={QRIcon} alt="QRIcon" />
              <Typography variant="p" sx={styles.paymentMethodTypographyHeader}>
                По QR-коду
              </Typography>
            </Grid>
            <Typography variant="p" sx={styles.paymentMethodTypography}>
              Откройте приложение банка и выберите пункт с оплатой через
              QR-код.C помощью камеры распознайте QR-код и подтвердите оплату
            </Typography>
          </Grid>

          <Grid>
            <Grid sx={styles.paymentMethodGrid}>
              <img src={linkIcon} alt="linkIcon" />
              <Typography variant="p" sx={styles.paymentMethodTypographyHeader}>
                По ссылке
              </Typography>
            </Grid>
            <Typography variant="p" sx={styles.paymentMethodTypography}>
              Перейдите по ссылке на оплату и выберите приложение вашего банка.
              Затем перейдите в него и подтвердите оплату
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

const styles = {
  paymentMethodGrid: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
  },
  paymentMethodTypography: {
    fontSize: "16px",
    color: "#fff",
  },

  paymentMethodTypographyHeader: {
    fontSize: "19px",
    color: "#fff",
    fontWeight: "bold",
  },
};
export default PaymentMethodIndividual;
