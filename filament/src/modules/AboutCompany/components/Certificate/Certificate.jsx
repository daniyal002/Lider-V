import {
  Grid,
  ImageList,
  ImageListItem,
  ImageListItemBar,
} from "@mui/material";
import React from "react";

const Certificate = () => {
  const itemData = [
    {
      img: "./img/certificate1.jpg",
      title:
        "Сертификат соответствия филаментов для аддитивных технологий ООО ПК НИТ ",
    },
    {
      img: "./img/certificate1.jpg",
      title:
        "Сертификат соответствия филаментов для аддитивных технологий ООО ПК НИТ ",
    },
    {
      img: "./img/certificate1.jpg",
      title:
        "Сертификат соответствия филаментов для аддитивных технологий ООО ПК НИТ ",
    },
    {
      img: "./img/certificate1.jpg",
      title:
        "Сертификат соответствия филаментов для аддитивных технологий ООО ПК НИТ ",
    },
    {
      img: "./img/certificate1.jpg",
      title:
        "Сертификат соответствия филаментов для аддитивных технологий ООО ПК НИТ ",
    },
  ];

  return (
    <Grid
      sx={{
        alignItems: "center",
        maxWidth: "1320px",
        margin: "0 auto",
        padding: "133px 20px ",
      }}
    >
      <ImageList>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              srcSet={`${item.img}`}
              src={`${item.img}`}
              alt={item.title}
              loading="lazy"
              style={{
                maxWidth: "250px",
                width: "100%",
              }}
            />
            <ImageListItemBar title={item.title} position="below" />
          </ImageListItem>
        ))}
      </ImageList>
    </Grid>
  );
};

export default Certificate;
