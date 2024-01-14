import { Grid, Typography } from "@mui/material";
import React from "react";
import RequisitesPromotioTable from "./RequisitesPromotioTable/RequisitesPromotioTable";

const RequisitesPromotio = () => {
  const listPaymentToIndividuals = [
    {
      description: "Полное наименование организации",
      text: "Индивидуальный Предприниматель Прикащиков Алексей Анатольевич",
    },
    {
      description: "ИНН",
      text: "344199282349",
    },
    {
      description: "ОГРН",
      text: "309345927800088",
    },
    {
      description: "Фактический адрес",
      text: "400127, г. Волгоград, ул. Студеная 11, стр 1",
    },
    {
      description: "Юридический адрес",
      text: "г. Волгоград, ул. Ополченская 46-44",
    },
    {
      description: "Наименование банка",
      text: "Филиал Южный ПАО Банка «ФК Открытие» г. Волгоград",
    },
    {
      description: "БИК",
      text: "046015061",
    },
    {
      description: "Расчетный счёт",
      text: "40802810617250001646",
    },
    {
      description: "Кор. счёт",
      text: "30101810560150000061",
    },
  ];

  const listPaymentToLegalEntities = [
    {
      description: "Полное наименование организации",
      text: "Общество с ограниченной ответственностью 'ПК 'НИТ' ",
    },
    {
      description: "ИНН",
      text: "3459072358",
    },
    {
      description: "КПП",
      text: "345901001",
    },
    {
      description: "ОГРН",
      text: "1173443004701",
    },
    {
      description: "Фактический адрес",
      text: "Волгоград, Университетский проспект, Волгоград, ул. Новороссийская, д.5, кв.254",
    },
    {
      description: "Юридический адрес",
      text: "400127, Россия, Волгоградская область, г. Волгоград, ул. Студеная, дом 11, офис 1",
    },
    {
      description: "Наименование банка",
      text: "ФИЛИАЛ ТОЧКА БАНК КИВИ БАНК (АО)",
    },
    {
      description: "БИК",
      text: "044525797",
    },
    {
      description: "Расчетный счёт",
      text: "40702810610050008030",
    },
    {
      description: "Кор. счёт",
      text: "30101810445250000797",
    },
  ];

  return (
    <Grid>
      <Typography
        sx={{
          display: "flex",
          flex: "1",
          fontSize: "55px",
          color: "#fff",
          fontWeight: "900",
          marginBottom: "30px",
          "@media(max-width:425px)": {
            fontSize: "35px",
          },
        }}
      >
        Реквизиты
      </Typography>
      <Grid sx={{ display: "flex", flexDirection: "column", rowGap: "50px" }}>
        <RequisitesPromotioTable
          list={listPaymentToIndividuals}
          text="Оплата физическим лицам"
        />
        <RequisitesPromotioTable
          list={listPaymentToLegalEntities}
          text="Оплата юридическим лицам"
        />
      </Grid>
    </Grid>
  );
};

export default RequisitesPromotio;
