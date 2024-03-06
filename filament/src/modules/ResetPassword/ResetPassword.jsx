import { Alert, Button, Grid, Input } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useResetPasswordConfirm } from "./hook/useResetPasswordConfirm";
import { isPasswordValid } from "../../helper/ValidatePassword";
import SuccessIcon from "../../assets/info_white_36dp.svg";
import BasicModal from "../../components/BasicModal/BasicModal";

const ResetPassword = () => {
  const { register, handleSubmit } = useForm();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");

  const [openModalBasic, setOpenModalBasic] = useState(false);
  const handleOpenModalBasic = () => setOpenModalBasic(true);
  const handleCloseModalBasic = () => setOpenModalBasic(false);

  const { mutate, error } = useResetPasswordConfirm(handleOpenModalBasic);

  useEffect(() => {
    if (password !== confirmPassword) {
      setPasswordError("Пароли не совпадают");
    } else {
      setPasswordError();
      if (password) {
        setPasswordError(isPasswordValid(password));
      }
    }
  }, [confirmPassword, password]);

  useEffect(() => {
    // Получаем текущий URL
    const currentUrl = window.location.href;

    // Создаем объект URLSearchParams и передаем текущий URL
    const urlParams = new URLSearchParams(currentUrl);

    // Получаем значение параметра 'code' из URL
    setEmail(urlParams.get("userEmail"));

    setCode(urlParams.get("code"));
  }, []); // Пустой массив зависимостей означает, что эффект выполнится только после монтирования компонента

  const resetPassword = (body) => {
    mutate({
      email: email,
      password: body.password,
      confirmPassword: body.confirmPassword,
      code: code,
    });
  };
  return (
    <Grid sx={{ maxWidth: "900px", margin: "0 auto", padding: "133px 20px" }}>
      <BasicModal
        open={openModalBasic}
        handleClose={handleCloseModalBasic}
        textHeader="Ваш пароль успешно сменен"
        IconModal={SuccessIcon}
      />
      <form
        onSubmit={handleSubmit(resetPassword)}
        style={{ display: "flex", flexDirection: "column", rowGap: "20px" }}
      >
        <Input
          type="password"
          placeholder="Новый пароль"
          required
          {...register("password")}
          onChange={(e) => setPassword(e.target.value)}
          sx={{
            height: "50px",
            padding: "34px 15px",
            color: "#fff",
            border: "2px solid rgba(83, 84, 136, 0.4)",
            outline: "none",
            fontSize: "20px",
            width: "100%",
            borderRadius: "10px",
            background: "rgba(134, 155, 223, 0.14)",

            "&::after": {
              content: "none",
            },
            "&::before": {
              content: "none",
            },
          }}
        />
        <Input
          type="password"
          placeholder="Потвердите пароль"
          required
          {...register("confirmPassword")}
          onChange={(e) => setConfirmPassword(e.target.value)}
          sx={{
            height: "50px",
            padding: "34px 15px",
            color: "#fff",
            border: "2px solid rgba(83, 84, 136, 0.4)",
            outline: "none",
            fontSize: "20px",
            width: "100%",
            borderRadius: "10px",
            background: "rgba(134, 155, 223, 0.14)",

            "&::after": {
              content: "none",
            },
            "&::before": {
              content: "none",
            },
          }}
        />
        <Button
          type="submit"
          disabled={passwordError ? true : false}
          sx={{
            background: "linear-gradient( #6847F5, #A95BF3)",
            color: "#f2f2f2",
            border: "none",
            padding: "17px 50px",
            fontSize: "19px",
            fontWeight: "500",
            transition: "0.5s",
            textDecoration: "none",
            width: "100%",
            "@media(max-width:350px)": {
              fontSize: "17px",
            },
            "&:hover": {
              transition: "0.5s",
              background: "linear-gradient(#A95BF3,#6847F5)",
            },
          }}
        >
          Сбросить пароль
        </Button>
        {passwordError && (
          <Alert
            severity="error"
            sx={{
              backgroundColor: "rgba(134, 155, 223, 0.14)",
              color: "#ff2400",
              border: "1px solid #ff2400",
            }}
          >
            {passwordError}
          </Alert>
        )}
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
      </form>
    </Grid>
  );
};

export default ResetPassword;
