import {
  Alert,
  Button,
  FormControl,
  Grid,
  Input,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { useGetCategories } from "../../../../components/ProuductCategories/hook/useGetCategories";
import { useAddProduct } from "../../hook/useAddProduct";
import { useState } from "react";

const AddProduct = () => {
  const { register, handleSubmit } = useForm();
  const { data } = useGetCategories();
  const { mutate, error } = useAddProduct();

  const imageUpload = () => {};

  const [uploadedFile, setUploadedFile] = useState(null);
  const [uploadedFileName, setUploadedFileName] = useState(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      // Здесь вы можете выполнить необходимые действия с выбранным файлом, например, сохранить его в состоянии
      setUploadedFile(selectedFile);
      setUploadedFileName(selectedFile.name);
      console.log(uploadedFileName);
    }
  };

  const handleAddProduct = (body) => {
    let base64String = "";
    let reader = new FileReader();

    reader.onload = function () {
      base64String = reader.result.replace("data:", "").replace(/^.+,/, "");
      mutate({ ...body, productImage: base64String });
    };

    if (uploadedFile) {
      reader.readAsDataURL(uploadedFile);
    }
  };
  return (
    <form onSubmit={handleSubmit(handleAddProduct)}>
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
            <input type="file" hidden onChange={handleFileChange} />
          </Button>
          {uploadedFileName && (
            <Typography
              sx={{
                color: "#fff",
                fontSize: "16px",
                maxWidth: "250px",
              }}
            >
              Выбрана фотография: {uploadedFileName}
            </Typography>
          )}
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
                {...register("ProductName")}
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
                {...register("ProductSize")}
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
                required
                placeholder="Цена товара"
                {...register("ProductPrice")}
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
                {...register("ProductQuantity")}
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
                  {...register("categoryId")}
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
                  {data?.map((category) => (
                    <MenuItem key={category.id} value={category.id}>
                      {category.categoryName}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <textarea
                placeholder="Описание товара"
                {...register("ProductDescription")}
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
      </Grid>
    </form>
  );
};

export default AddProduct;
