import {
  Button,
  Checkbox,
  Grid,
  Input,
  Link,
  TextField,
  TextareaAutosize,
  Typography,
} from "@mui/material";
import React from "react";

const FormСooperation = () => {
  return (
    <Grid sx={{ display: "flex", flexDirection: "column", rowGap: "50px" }}>
      <Grid sx={{ display: "flex", flexDirection: "column", rowGap: "20px" }}>
        <Typography
          sx={{
            fontSize: "20px",
            color: "#A95BF3",
            fontWeight: "600",
            justifyContent: "center",
            "@media(max-width:702px)": {
              fontSize: "18px",
            },
          }}
        >
          Для получения прайс-листа и дополнительной информации, заполните форму
          обратной связи:
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

      <Grid
        sx={{
          display: "flex",
          flexDirection: "column",
          rowGap: "15px",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            fontSize: "25px",
            color: "#fff",
            fontWeight: "600",
            justifyContent: "center",
            textAlign: "center",
            "@media(max-width:932px)": {
              fontSize: "20px",
            },
            "@media(max-width:754px)": {
              maxWidth: "638px",
            },
            "@media(max-width:515px)": {
              maxWidth: "382px",
              fontSize: "18px",

            },
          }}
        >
          Или получите больше информации по всем вопросам и оптовому прайс-листу
          у наших менеджеров по телефону{" "}
          <Link
            href="tel:89178321942"
            sx={{ color: "#A95BF3", textDecoration: "none" }}
          >
            8-917-832-19-42
          </Link>
        </Typography>
        <Button
          sx={{
            background: "linear-gradient( #6847F5, #A95BF3)",
            color: "#f2f2f2",
            border: "none",
            padding: "17px 50px",
            fontSize: "19px",
            fontWeight: "500",
            transition: "0.5s",
            textDecoration: "none",
            "&:hover": {
              transition: "0.5s",
              background: "linear-gradient(#A95BF3,#6847F5)",
            },
          }}
        >
          Скачать прайс-лист
        </Button>
      </Grid>
    </Grid>
  );
};

export default FormСooperation;
