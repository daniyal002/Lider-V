import { Grid, Typography } from "@mui/material";
import React from "react";
import ProuductCategories from "../../../../components/ProuductCategories/ProuductCategories";
import { useGetCategories } from "../../../../components/ProuductCategories/hook/useGetCategories";
import { Link } from "react-router-dom";

const ThirdHomeScreen = () => {
  const {data, isLoading} = useGetCategories()
  return (
    <Grid
      sx={{
        display: "flex",
        flexDirection: "column",
        rowGap: "30px",
        alignItems: "center",
        maxWidth: "1320px",
        margin: "0 auto",
        padding: "133px 20px ",
      }}
    >
      <Typography
        sx={{
          fontSize: "55px",
          color: "#fff",
          fontWeight: "900",
          textAlign: "center",
          "@media(max-width:425px)": {
            fontSize: "35px",
          },
        }}
      >
        Популярные категории
      </Typography>

      <Link
        to="/categories"
        style={{
          background: "linear-gradient( #6847F5, #A95BF3)",
          color: "#f2f2f2",
          border: "none",
          padding: "17px 50px",
          fontSize: "19px",
          fontWeight: "500",
          transition: "0.5s",
          textDecoration: "none",
          textAlign: " center",
         
        }}
      >
        Показать все категории
      </Link>
      <Grid
        sx={{
          display: "flex",
          justifyContent: "center",
          columnGap: " 30px",
          flexWrap: " wrap",
          "@media(max-width:851px)": {
            justifyContent: "center",
          },
        }}
      >
        {data.map((categories) => (
        <ProuductCategories
          text={categories.categoryName}
          id={categories.id}
          key={categories.id}
          categoryImage={categories.categoryImage}
        />
      ))}
      </Grid>
    </Grid>
  );
};

export default ThirdHomeScreen;
