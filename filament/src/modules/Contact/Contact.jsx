import { Grid, Typography } from "@mui/material";
import React from "react";
import ContactBlock from "./components/ContactBlock/ContactBlock";
import ContactForm from "./components/ContactForm/ContactForm";
import PhoneIcon from "../../assets/phone.svg";
import EmailIcon from "../../assets/email_white_36dp.svg";
import AdressIcon from "../../assets/home_white_36dp.svg";

const Contact = () => {
  return (
    <Grid
      sx={{
        maxWidth: "1320px",
        margin: "0 auto",
        padding: "133px 20px",
        display: "flex",
        flexDirection: "column",
        rowGap: "100px",
      }}
    >
      <Grid>
        <Typography
          sx={{
            fontSize: "55px",
            color: "#fff",
            fontWeight: "900",
            marginBottom: "10px",
            justifyContent: "center",
            "@media(max-width:425px)": {
              fontSize: "35px",
            },
          }}
        >
          Контакты
        </Typography>
        <Grid
          sx={{
            display: "flex",
            gap: "30px",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <ContactBlock
            img={PhoneIcon}
            headerText="Телефон для звонков"
            text="+7 (964) 004-48-53"
          />
          <ContactBlock
            img={EmailIcon}
            headerText="Почта для связи"
            text="vagid08@mail.ru"
          />
          <ContactBlock
            img={AdressIcon}
            headerText="Адрес"
            text="Город Махачкала, пр-кт Насрутдинова 107А"
          />
        </Grid>
      </Grid>

      <Grid>
        <ContactForm />
      </Grid>
    </Grid>
  );
};

export default Contact;
