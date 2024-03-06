import { Grid, Typography } from "@mui/material";
import React from "react";
import sbpcollage from "../../../../assets/sbpcollage.png";
import linkIcon from "../../../../assets/link_white_36dp.svg";
import QRIcon from "../../../../assets/qr_code_white_36dp.svg";

const PaymentMethodIndividual = () => {
  return (
    <Grid>
      <Grid>
        <Typography>Онлайн-оплата</Typography>
        <Typography>Картами Visa, MasterCard, Мир. Без комиссии</Typography>
      </Grid>
      <Grid>
        <Grid>
          <img src={sbpcollage} alt="СПБ" />
        </Grid>
        <Grid>
          <Grid>
            <Typography>Оплата через СБП</Typography>
            <Typography>
              Платите через QR-код или ссылку. Вводить реквизиты карты не
              понадобится! Нужен только смартфон с приложением банка и
              интернетом
            </Typography>
          </Grid>

          <Grid>
            <Grid>
              <img src={QRIcon} alt="" />
              <Typography>По QR-коду</Typography>
            </Grid>
            <Typography>
              Откройте приложение банка и выберите пункт с оплатой через
              QR-код.C помощью камеры распознайте QR-код и подтвердите оплату
            </Typography>
          </Grid>

          <Grid>
            <Grid>
              <img src={linkIcon} alt="" />
              <Typography>По ссылке</Typography>
            </Grid>
            <Typography>
              Перейдите по ссылке на оплату и выберите приложение вашего банка.
              Затем перейдите в него и подтвердите оплату
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default PaymentMethodIndividual;
