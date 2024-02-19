import { Button, Checkbox, Grid, Input, Link, Typography } from "@mui/material";
import React from "react";

const ContactForm = () => {
  return (
    <Grid sx={{ display: "flex", flexDirection: "column", rowGap: "50px" }}>
      <Grid sx={{ display: "flex", flexDirection: "column", rowGap: "20px" }}>
        <Typography
          sx={{
            fontSize: "20px",
            color: "#fff",
            fontWeight: "600",
            justifyContent: "center",
            "@media(max-width:702px)": {
              fontSize: "18px",
            },
          }}
        >
          Обратная связь
        </Typography>

        <form
          style={{
            display: "flex",
            flexDirection: "column",
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
              alignItems: "center",
              justifyContent: "space-between",
              "@media(max-width:700px)": {
                flexDirection: "column",
                rowGap: "20px",
              },
            }}
          >
            <Grid
              sx={{
                display: "flex",
                flexDirection: "column",
                rowGap: "20px",
                width: "40%",
                "@media(max-width:700px)": {
                  width: "100%",
                },
              }}
            >
              <Input
                type="text"
                required
                placeholder="Ваше имя"
                sx={{
                  height: "50px",
                  padding: "34px 15px",
                  color: "#fff",
                  border: "2px solid #A95BF3",
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
                type="number"
                required
                placeholder="Ваш телефон"
                sx={{
                  height: "50px",
                  padding: "34px 15px",
                  color: "#fff",
                  border: "2px solid #A95BF3",
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
                type="email"
                placeholder="Ваш E-mail"
                sx={{
                  height: "50px",
                  padding: "34px 15px",
                  color: "#fff",
                  border: "2px solid #A95BF3",
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
            <Grid
              sx={{
                width: "50%",
                "@media(max-width:700px)": {
                  width: "100%",
                },
              }}
            >
              <textarea
                rows={10}
                placeholder="Ваше сообщение"
                style={{
                  width: "95%",
                  outline: "none",
                  border: "2px solid #A95BF3",
                  borderRadius: "10px",
                  padding: "10px",
                  fontSize: "20px",
                  background: "rgba(134, 155, 223, 0.14)",
                  color: "#fff",
                }}
              />
            </Grid>
          </Grid>
          <Grid
            sx={{
              display: "flex",
              justifyContent: "space-between",
              "@media(max-width:700px)": {
                flexDirection: "column",
                alignItems: "center",
                rowGap: "10px",
              },
            }}
          >
            <Grid sx={{ display: "flex", alignItems: "center" }}>
              <Checkbox
                required
                sx={{
                  color: "#A95BF3",
                }}
              />
              <Typography
                sx={{
                  color: "#fff",
                  "@media(max-width:700px)": {
                    textAlign: "center",
                  },
                  "@media(max-width:544px)": {
                    fontSize: "14px",
                  },
                }}
              >
                Я согласен(а) на обработку персональных данных
              </Typography>
            </Grid>
            <Grid
              sx={{
                "@media(max-width:700px)": {
                  width: "100%",
                },
              }}
            >
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
                  "&:hover": {
                    transition: "0.5s",
                    background: "linear-gradient(#A95BF3,#6847F5)",
                  },
                }}
              >
                Отправить
              </Button>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
};

export default ContactForm;
