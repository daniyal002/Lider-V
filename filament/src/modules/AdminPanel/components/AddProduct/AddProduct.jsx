import {
  Button,
  FilledInput,
  FormControl,
  Grid,
  Input,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import React from "react";

const AddProduct = () => {
  return (
    <form>
      <Grid
        sx={{
          display: "flex",
          gap: "30px",
          alignItems: "center",
          "@media(max-width:469px)": {
            flexDirection: "column",
            alignItems: "center",
          },
        }}
      >
        <Grid
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <Typography
            sx={{
              color: "#fff",
              fontSize: "22px",
              textAlign: "center",
              "@media(min-width:469px)": {
                display: "none",
              },
            }}
          >
            Информация о товаре
          </Typography>
          <Button variant="contained" component="label">
            Загрузить фото
            <input type="file" hidden />
          </Button>
        </Grid>
        <Grid
          sx={{
            display: "flex",
            flexDirection: "column",
            rowGap: "30px",
            width: "80%",
          }}
        >
          <Typography
            sx={{
              color: "#fff",
              fontSize: "22px",
              textAlign: "center",
              "@media(max-width:469px)": {
                display: "none",
              },
            }}
          >
            Информация о товаре
          </Typography>
          <Grid
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "30px",
              justifyContent: "center",
              alignItems: "strech",
            }}
          >
            <Grid
              sx={{
                display: "flex",
                gap: "30px",
                "@media(max-width:800px)": {
                  flexDirection: "column",
                },
              }}
            >
              <Input
                type="text"
                required
                placeholder="Наименование товара"
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
                type="text"
                required
                placeholder="Размер товара"
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

            <Grid
              sx={{
                display: "flex",
                gap: "30px",
                "@media(max-width:800px)": {
                  flexDirection: "column",
                },
              }}
            >
              <Input
                placeholder="Цена товара"
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
                type="text"
                required
                placeholder="Остаток товара"
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

            <Grid
              sx={{
                display: "flex",
                gap: "30px",
                "@media(max-width:800px)": {
                  flexDirection: "column",
                },
              }}
            >
              <FormControl variant="filled" fullWidth>
                <InputLabel
                  id="demo-simple-select-standard-label"
                  sx={{ color: "#fff" }}
                >
                  Категории
                </InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  label="Категории"
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
                  }}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>

              <textarea
                placeholder="Описание товара"
                style={{
                  width: "95%",
                  outline: "none",
                  border: "2px solid rgba(83, 84, 136, 0.4)",
                  borderRadius: "10px",
                  padding: "10px",
                  fontSize: "20px",
                  background: "rgba(134, 155, 223, 0.14)",
                  color: "#fff",
                }}
              />
            </Grid>
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
              Создать товар
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </form>
  );
};

export default AddProduct;
