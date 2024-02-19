import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";

const OrderProducts = ({ cartData }) => {
  return (
    <TableContainer
      component={Paper}
      sx={{
        backgroundColor: "rgba(134, 155, 223, 0.14)",
        borderRadius: "10px",
        padding: "20px",
      }}
    >
      <Typography
        variant="h5"
        color="#fff"
        sx={{
          paddingLeft: "10px",
          marginBottom: "30px",
          textAlign: "center",
        }}
      >
        Товары в заказе
      </Typography>

      <Table
        sx={{
          minWidth: 650,
          backgroundColor: "rgba(134, 155, 223, 0.14)",
          borderRadius: "10px",
        }}
      >
        <TableHead>
          <TableRow>
            <TableCell sx={{ color: "#fff" }}>Наименование</TableCell>
            <TableCell align="right" sx={{ color: "#fff" }}>
              Цена
            </TableCell>
            <TableCell align="right" sx={{ color: "#fff" }}>
              Количество
            </TableCell>
            <TableCell align="right" sx={{ color: "#fff" }}>
              Сумма
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cartData.map((product, index) => (
            <TableRow key={index}>
              <TableCell
                component="th"
                scope="row"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  fontSize: "19px",
                  color: "#fff",
                }}
              >
                <img
                  src={
                    import.meta.env.VITE_BASE_URL_FROM_IMAGE +
                    product.productImage
                  }
                  alt="productImage"
                  width="100"
                />
                {product.productName}
              </TableCell>
              <TableCell align="right" sx={{ color: "#fff" }}>
                {product.productPrice}
              </TableCell>
              <TableCell align="right" sx={{ color: "#fff" }}>
                {product.countProduct}
              </TableCell>
              <TableCell align="right" sx={{ color: "#fff" }}>
                {product.productPrice * product.countProduct}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default OrderProducts;
