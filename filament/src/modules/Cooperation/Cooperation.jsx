import { Grid } from "@mui/material";
import React from "react";
import FirstСooperationScreen from "./components/FirstСooperationScreen/FirstСooperationScreen";
import FormСooperation from "./components/FormСooperation/FormСooperation";

const Сooperation = () => {
  return (
    <Grid
      sx={{
        maxWidth: "1320px",
        margin: "0 auto",
        padding: "133px 20px ",
        display: "flex",
        flexDirection: "column",
        rowGap: "50px",
      }}
    >
      <FirstСooperationScreen />
      <FormСooperation />
    </Grid>
  );
};

export default Сooperation;
