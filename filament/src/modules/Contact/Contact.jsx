import { Grid, Typography } from "@mui/material";
import React from "react";
import ContactBlock from "./components/ContactBlock/ContactBlock";
import ContactForm from "./components/ContactForm/ContactForm";

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
          <ContactBlock />
          <ContactBlock />
          <ContactBlock />
        </Grid>
      </Grid>

      <Grid>
        <ContactForm />
      </Grid>
    </Grid>
  );
};

export default Contact;
