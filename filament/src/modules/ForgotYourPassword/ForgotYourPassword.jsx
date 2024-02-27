import { Alert, Button, Grid, Input, Typography } from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useResetPassword } from "../Profile/hook/useResetPassword";

const ForgotYourPassword = () => {
  const { register, handleSubmit } = useForm();
  const [email, setEmail] = useState("");

  const { mutate, error } = useResetPassword();

  const forgotPassword = (body) => {
    mutate({ email: body.email });
  };
  return (
    <Grid sx={{ maxWidth: "600px", margin: "0 auto", padding: "133px 20px" }}>
      <Typography color="#fff">
        Ваша почта, которому привязан аккаунт{" "}
      </Typography>
      <form
        onSubmit={handleSubmit(forgotPassword)}
        style={{ display: "flex", flexDirection: "column", rowGap: "20px" }}
      >
        <Input
          type="email"
          placeholder="E-mail"
          required
          {...register("email")}
          onChange={(e) => setEmail(e.target.value)}
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

export default ForgotYourPassword;
