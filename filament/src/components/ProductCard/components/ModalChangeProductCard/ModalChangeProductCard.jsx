import {
  Alert,
  Button,
  FormControl,
  Grid,
  Input,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  Typography,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useGetCategories } from "../../../ProuductCategories/hook/useGetCategories";
import { useChangeProduct } from "../../../../modules/AdminPanel/hook/useChangeProduct";
import { useGetProductId } from "../../hook/useGetProductId";

const ModalChangeProductCard = ({ open, handleClose, id }) => {
  const { register, handleSubmit } = useForm();
  const { data: categoryes } = useGetCategories();

  const { data: product } = useGetProductId(id);
  console.log(product);
  const { mutate } = useChangeProduct();

  const [uploadedFile, setUploadedFile] = useState(null);
  const [uploadedFileName, setUploadedFileName] = useState(null);

  const handleFileChange = async (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      // Здесь вы можете выполнить необходимые действия с выбранным файлом, например, сохранить его в состоянии
      setUploadedFileName(selectedFile.name);
      try {
        const base64String = await fileToBase64(selectedFile);
        setUploadedFile(base64String);
        const cleanBase64String = base64String.replace(
          /^data:image\/\w+;base64,/,
          ""
        );
        // setUploadedFile(cleanBase64String);
      } catch (error) {
        alert("Ошибка при чтении файла:", error);
      }
    }
  };

  const handleAddProduct = (body) => {
    mutate({
      id: id,
      categoryId: Number(body.categoryId),
      productDescription: body.productDescription,
      productName: body.productName,
      productPrice: Number(body.productPrice),
      productQuantity: Number(body.productQuantity),
      productSize: body.productSize,
      productImage: uploadedFile,
    });
  };
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{
        maxWidth: "1320px",
        margin: "0 auto",
        padding: "133px 0",
        overflowY: "scroll",
        "&::-webkit-scrollbar": { display: "none" },
      }}
    >
      <form onSubmit={handleSubmit(handleAddProduct)}>
        <Grid
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "30px",
            alignItems: "center",
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
                  {...register("productName")}
                  defaultValue={product?.productName}
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
                  {...register("productSize")}
                  defaultValue={product?.productSize}
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
                  {...register("productPrice")}
                  defaultValue={product?.productPrice}
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
                  {...register("productQuantity")}
                  defaultValue={product?.productQuantity}
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
                    defaultValue={product?.categoryId}
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
                    {categoryes?.map((category) => (
                      <MenuItem key={category.id} value={category.id}>
                        {category.categoryName}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>

                <textarea
                  placeholder="Описание товара"
                  {...register("productDescription")}
                  defaultValue={product?.ProductDescription}
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
                Изменить товар
              </Button>
            </Grid>
            {/* {error && (
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
            )} */}
          </Grid>
        </Grid>
      </form>
    </Modal>
  );
};

export default ModalChangeProductCard;
