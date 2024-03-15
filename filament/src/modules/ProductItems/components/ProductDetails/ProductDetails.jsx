import { useParams } from "react-router-dom";
import { Typography, Grid, Card, CardMedia, Button } from "@mui/material";
import { useGetProductId } from "../../../../components/ProductCard/hook/useGetProductId";
import { useAddProductCart } from "../../../../components/ProductCard/hook/useAddProductCart";

const ProductDetails = () => {
  const { id } = useParams();
  const { mutate: AddProductCart } = useAddProductCart();
  const { data: product } = useGetProductId(id);

  const AddCart = () => {
    AddProductCart({
      productId: id,
      quantity: 1,
    });
  };
  return (
    <Grid
      sx={{
        padding: "10px",
        background: "rgba(134, 155, 223, 0.14)",
        border: "2px solid rgba(83, 84, 136, 0.4)",
        borderRadius: "10px",
      }}
    >
      {product && (
        <Grid
          container
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            rowGap: "10px",
          }}
        >
          <Grid sx={{ width: "100%" }}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image={
                  import.meta.env.VITE_BASE_URL_FROM_IMAGE +
                  product.productImage
                }
                alt={product.productName}
              />
            </Card>
          </Grid>
          <Grid sx={{ width: "100%" }}>
            <Typography variant="h4" sx={{ color: "#A95BF3" }}>
              {product.productName}
            </Typography>
            <Typography variant="h6" sx={{ color: "#A95BF3" }}>
              <span style={{ color: "#fff" }}>Цена: </span>
              {product.productPrice} ₽
            </Typography>
            <Typography sx={{ color: "#A95BF3" }}>
              <span style={{ color: "#fff" }}>Описание: </span>
              {product.productDescription}
            </Typography>
            <Typography sx={{ color: "#A95BF3" }}>
              <span style={{ color: "#fff" }}>Размер: </span>
              {product.productSize}
            </Typography>
            <Typography sx={{ color: "#A95BF3" }}>
              <span style={{ color: "#fff" }}>Остаток: </span>
              {product.productQuantity}
            </Typography>
          </Grid>
          <Button
            onClick={AddCart}
            sx={{
              background: "linear-gradient( #6847F5, #A95BF3)",
              color: "#f2f2f2",
              border: "none",
              padding: "10px 15px",
              fontSize: "17px",
              fontWeight: "500",
              transition: "0.5s",
              borderRadius: "5px",
              textDecoration: "none",
              width: "100%",
              "&:hover": {
                transition: "0.5s",
                background: "linear-gradient(#A95BF3,#6847F5)",
              },
            }}
          >
            В корзину
          </Button>
        </Grid>
      )}
    </Grid>
  );
};

export default ProductDetails;
