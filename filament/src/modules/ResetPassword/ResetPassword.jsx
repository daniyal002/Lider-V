import { Alert, Grid } from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useResetPasswordConfirm } from "./hook/useResetPasswordConfirm";

const ResetPassword = () => {
  const { register, handleSubmit } = useForm();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const { mutate, error } = useResetPasswordConfirm();

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

  const resetPassword = (body) => {
    mutate({
      email: data.email,
      password: body.password,
      confirmPassword: body.confirmPassword,
      code:"",
    });
  };
  return (
    <Grid>
      <form onSubmit={handleSubmit(resetPassword)}>
        <Input
          type="password"
          placeholder="Ваш пароль"
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
