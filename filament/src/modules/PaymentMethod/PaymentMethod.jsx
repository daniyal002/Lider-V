import { Button, Grid } from "@mui/material";
import React from "react";
import { Link, Outlet } from "react-router-dom";

const PaymentMethod = () => {
  return (
    <Grid
      sx={{
        maxWidth: "1320px",
        margin: "0 auto",
        padding: "100px 20px",
        "@media(max-width:768px)": {
          padding: "50px 20px",
        },
      }}
    >
      <Grid
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          marginBottom: "30px",
        }}
      >
        <Button sx={styles.linkButton}>
          <Link style={styles.link} to="individual">
            Для физических лиц Прозрачные и удобные платежи
          </Link>
        </Button>

        <Button sx={styles.linkButton}>
          <Link style={styles.link} to="business">
            Для юридических лиц Безопасность и особые условия
          </Link>
        </Button>
      </Grid>

      <Grid>
        <Outlet />
      </Grid>
    </Grid>
  );
};

const styles = {
  linkButton: {
    border: "1px solid #A95BF3",
    padding: "10px",
    borderRadius: "10px",
    color: "#fff",
    "&:hover": {
      color: "#A95BF3",
      boxShadow: "0px 2px 5px 0px #A95BF3",
    },
  },
  link: {
    color: "#fff",
    lineStyle: "none",
    textDecoration: "none",
  },
};
export default PaymentMethod;
