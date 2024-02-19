import { Alert, Button, Grid, Input } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useRegister } from "../../hook/useRegister";

const RegisterForm = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const { mutate, error } = useRegister();
  const { register, handleSubmit } = useForm();

  useEffect(() => {
    if (password !== confirmPassword) {
      setPasswordError("Пароли не совпадают");
    } else {
      setPasswordError();
    }
  }, [confirmPassword]);

  const reg = (body) => {
    mutate(body);
  };

  return (
    <Grid>
      <form
        onSubmit={handleSubmit(reg)}
        style={{
          display: "flex",
          flexDirection: "column",
          maxWidth: "864px",
          margin: "0 auto",
          background: "rgba(134, 155, 223, 0.14)",
          borderRadius: "10px",
          padding: "20px",
          rowGap: "40px",
          "@media(max-width:700px)": {
            rowGap: "20px",
          },
        }}
      >
        <Grid
          sx={{
            display: "flex",
            flexDirection: "column",
            rowGap: "20px",
          }}
        >
          <Input
            type="text"
            required
            placeholder="Придумайте логин"
            {...register("registerLogin")}
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
              outlineStyle: "none",
              "&::after": {
                content: "none",
              },
              "&::before": {
                content: "none",
              },
            }}
          />
          <Input
            type="email"
            required
            placeholder="Ваш E-mail"
            {...register("registerEmail")}
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
              outlineStyle: "none",
              "&::after": {
                content: "none",
              },
              "&::before": {
                content: "none",
              },
            }}
          />

          <Input
            type="text"
            required
            placeholder="Ваше имя"
            {...register("registerFirstName")}
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
              outlineStyle: "none",
              "&::after": {
                content: "none",
              },
              "&::before": {
                content: "none",
              },
            }}
          />
          <Input
            type="text"
            required
            placeholder="Ваша фамилия"
            {...register("registerLastName")}
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
              outlineStyle: "none",
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
            placeholder="Ваш пароль"
            required
            {...register("registerPassword")}
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
        </Grid>

        <Grid>
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
            Зарегистрироваться
          </Button>
        </Grid>
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

export default RegisterForm;
