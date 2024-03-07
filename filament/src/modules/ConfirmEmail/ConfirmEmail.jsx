import { Alert, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import SuccessIcon from "../../assets/info_white_36dp.svg";
import BasicModal from "../../components/BasicModal/BasicModal";
import { useConfirmEmail } from "./hook/useConfirmEmail";

const ConfirmEmail = () => {
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");

  const [openModalBasic, setOpenModalBasic] = useState(false);
  const handleOpenModalBasic = () => setOpenModalBasic(true);
  const handleCloseModalBasic = () => setOpenModalBasic(false);

  const { mutate, error } = useConfirmEmail(handleOpenModalBasic);

  useEffect(() => {
    // Получаем текущий URL
    const currentUrl = window.location.href;

    // Создаем объект URLSearchParams и передаем текущий URL
    const urlParams = new URLSearchParams(currentUrl);

    // Получаем значение параметра 'code' из URL
    setEmail(urlParams.get("userEmail"));

    setCode(urlParams.get("code"));

    if (email !== "" && code !== "") {
      mutate({
        email: email,
        code: code,
      });
    }
  }, [email, code]);

  return (
    <Grid sx={{ maxWidth: "900px", margin: "0 auto", padding: "133px 20px" }}>
      <BasicModal
        open={openModalBasic}
        handleClose={handleCloseModalBasic}
        textHeader="Ваша почта успешно изменена"
        IconModal={SuccessIcon}
      />
      <Typography variant="h1" color="#fff">
        Страница потверждения пароля, подождите пожалуйста пока вас не перекинет
        на страницу профиля
      </Typography>
      {error && (
        <Alert
          severity="error"
          sx={{
            backgroundColor: "rgba(134, 155, 223, 0.14)",
            color: "#ff2400",
            border: "1px solid #ff2400",
          }}
        >
          {error.response.data.result}
        </Alert>
      )}
    </Grid>
  );
};

export default ConfirmEmail;
