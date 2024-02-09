import { Alert, Button, Grid, Input, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import React, { useState } from "react";
import { useAddCategories } from "../../hook/useAddCategories";

const AddCategories = () => {
  const { register, handleSubmit } = useForm();
  const { mutate, error } = useAddCategories();

  const [uploadedFile, setUploadedFile] = useState("");
  const [uploadedFileName, setUploadedFileName] = useState(null);

  const handleFileChange = async (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      // Здесь вы можете выполнить необходимые действия с выбранным файлом, например, сохранить его в состоянии
      setUploadedFileName(selectedFile.name);
      setUploadedFile(selectedFile);
    }
  };

  const handleAddProduct = (body) => {
    mutate({ categoryName: body.categoryName, categoryImage: uploadedFile });
  };
  return (
    <form onSubmit={handleSubmit(handleAddProduct)}>
      <Grid
        sx={{
          display: "flex",
          gap: "30px",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
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
          Добавить категорию
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
          <Input
            type="text"
            required
            placeholder="Наименование категории"
            {...register("categoryName")}
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
            Создать категорию
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
            {error.response.data.displayMessage}
          </Alert>
        )}
      </Grid>
    </form>
  );
};

export default AddCategories;
