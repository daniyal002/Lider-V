import React from "react";
import { useForm, Controller } from "react-hook-form";
import {
  TextField,
  Button,
  createTheme,
  ThemeProvider,
  Typography,
} from "@mui/material";

const Buyer = () => {
  const { control, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Можно добавить здесь отправку данных на сервер или другую логику
  };

  return (
    <ThemeProvider theme={theme}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        style={{
          display: "flex",
          flexDirection: "column",
          rowGap: "30px",
          alignItems: "center",
          padding: "20px 0",
          backgroundColor: "rgba(134, 155, 223,0.14)",
          borderRadius: "10px",
        }}
      >
        <Typography variant="h5" color="#fff">
          Покупатель
        </Typography>
        <Controller
          name="fullName"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              {...field}
              label="ФИО"
              variant="filled"
              fullWidth
              sx={styles.textField}
            />
          )}
        />
        <Controller
          name="email"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              {...field}
              label="Email"
              variant="filled"
              fullWidth
              sx={styles.textField}
            />
          )}
        />
        <Controller
          name="phone"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              {...field}
              label="Телефон"
              variant="filled"
              fullWidth
              sx={styles.textField}
            />
          )}
        />
        <Controller
          name="street"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              {...field}
              label="Улица"
              variant="filled"
              fullWidth
              sx={styles.textField}
            />
          )}
        />
        <Controller
          name="house"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              {...field}
              label="Дом"
              variant="filled"
              fullWidth
              sx={styles.textField}
            />
          )}
        />
        <Controller
          name="apartment"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              {...field}
              label="Квартира"
              variant="filled"
              fullWidth
              sx={styles.textField}
            />
          )}
        />
        <Controller
          name="addres"
          control={control}
          defaultValue={[]}
          render={({ field }) => (
            <TextField
              {...field}
              label="Адрес пункта самовывоза (заполняется автоматически)"
              variant="filled"
              fullWidth
              multiline
              sx={styles.textField}
            />
          )}
        />

        <Controller
          name="comments"
          control={control}
          defaultValue={[]}
          render={({ field }) => (
            <TextField
              {...field}
              label="Комментарии к заказу"
              variant="filled"
              fullWidth
              multiline
              sx={styles.textField}
            />
          )}
        />
        <Button type="submit" variant="contained" color="primary">
          Отправить
        </Button>
      </form>
    </ThemeProvider>
  );
};

const theme = createTheme({
  components: {
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: "#fff", // Цвет текста label
        },
      },
    },
  },
});

const styles = {
  textField: {
    height: "50px",
    padding: "34px 15px",
    color: "#fff",
    border: "2px solid rgba(83, 84, 136, 0.4)",
    outline: "none",
    fontSize: "20px",
    width: "90%",
    borderRadius: "10px",
    background: "rgba(134, 155, 223, 0.14)",
  },
};

export default Buyer;
