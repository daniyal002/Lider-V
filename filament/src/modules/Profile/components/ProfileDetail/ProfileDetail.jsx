import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import { useResetPassword } from "../../hook/useResetPassword";

const ProfileDetail = ({ userFirstName, userLastName, email, userName }) => {
  const { mutate } = useResetPassword();

  const resetPassword = () =>{
    mutate({ email: email })
  }

  return (
    <Grid
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Grid sx={{ maxWidth: "140px" }}>
        <img
          src="./img/clients-item-lg1.jpg"
          alt="Фото профиля"
          style={{
            width: "100%",
            borderRadius: "50%",
            boxShadow: "0px 4px 44px 0px rgba(255, 255, 255, 0.08)",
          }}
        />
      </Grid>
      <Typography
        variant="h3"
        sx={{
          color: "#fff",
          fontSize: "22px",
        }}
      >
        {userFirstName} {userLastName}
      </Typography>
      <Typography
        variant="h4"
        sx={{
          color: "#fff",
          fontSize: "15px",
          fontWeight: "300",
          margin: "10px 0",
        }}
      >
        {email}
      </Typography>
      <Typography
        variant="h4"
        sx={{
          color: "#fff",
          fontSize: "15px",
          fontWeight: "300",
        }}
      >
        {userName}
      </Typography>
      <Grid
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          marginTop: "50px",
          justifyContent: "center",
        }}
      >
        <Grid
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            rowGap: "10px",
          }}
        >
          <Button
            data-name="Редактировать"
            sx={{
              background: "rgba(134, 155, 223, 0.14) !important",
              border: "2px solid rgba(83, 84, 136, 0.4)",
              borderRadius: "50%",
              transition: "0.5s",
              "&:hover": {
                boxShadow: "0px 4px 30px 0px rgba(255, 255, 255, 0.08)",
              },
            }}
          >
            <img
              src="./icon/edit_white_36dp.svg"
              alt="edit"
              title="Редактировать"
              width="50"
            />
          </Button>
          <Typography
            sx={{
              color: "#fff",
              fontSize: "14px",
            }}
          >
            Редактировать
          </Typography>
        </Grid>
        <Grid
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            rowGap: "10px",
          }}
        >
          <Button
            onClick={resetPassword}
            sx={{
              background: "rgba(134, 155, 223, 0.14) !important",
              border: "2px solid rgba(83, 84, 136, 0.4)",
              borderRadius: "50%",
              transition: "0.5s",
              "&:hover": {
                boxShadow: "0px 4px 30px 0px rgba(255, 255, 255, 0.08)",
              },
            }}
          >
            <img
              src="./icon/lock_reset_white_36dp.svg"
              alt="edit"
              title="Сбросить пароль"
              width="50"
            />
          </Button>
          <Typography
            sx={{
              color: "#fff",
              fontSize: "14px",
            }}
          >
            Сбросить пароль
          </Typography>
        </Grid>
        <Grid
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            rowGap: "10px",
          }}
        >
          <Button
            sx={{
              background: "rgba(134, 155, 223, 0.14) !important",
              border: "2px solid rgba(83, 84, 136, 0.4)",
              borderRadius: "50%",
              transition: "0.5s",
              "&:hover": {
                boxShadow: "0px 4px 30px 0px rgba(255, 255, 255, 0.08)",
              },
            }}
          >
            <img
              src="./icon/alternate_email_white_36dp.svg"
              alt="edit"
              title="Поменять почту"
              width="50"
            />
          </Button>
          <Typography
            sx={{
              color: "#fff",
              fontSize: "14px",
            }}
          >
            Поменять почту
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ProfileDetail;
