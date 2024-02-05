import React, { useState } from "react";
import {
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  Modal,
  Backdrop,
  Fade,
  Typography,
  Button,
} from "@mui/material";
import SwipeableViews from "react-swipeable-views";

const images = [
  { src: "./img/image1.jpg", description: "Description 1" },
  { src: "./img/image2.jpg", description: "Description 2" },
  { src: "./img/image2.jpg", description: "Description 3" },
  { src: "./img/image2.jpg", description: "Description 3" },
  { src: "./img/image2.jpg", description: "Description 3" },
  { src: "./img/image2.jpg", description: "Description 3" },
  { src: "./img/image2.jpg", description: "Description 3" },
  // Add more images here
];

const Gallery = () => {
  const [open, setOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const handleOpen = (index) => {
    setSelectedImageIndex(index);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleNext = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleBack = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div
      style={{
        maxWidth: "1320px",
        margin: "0 auto",
        padding: "133px 20px",
        boxSizing: "border-box",
      }}
    >
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        sx={{
          display: "flex",
          gap: "30px",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {images.map((image, index) => (
          <Grid
            item
            key={index}
            sx={{
              maxWidth: "600px",
            }}
          >
            <Card>
              <CardActionArea onClick={() => handleOpen(index)}>
                <CardMedia
                  component="img"
                  sx={{
                    borderRadius: "14px",
                  }}
                  alt={image.description}
                  image={image.src}
                />
              </CardActionArea>
              <Typography
                variant="subtitle1"
                align="center"
                sx={{ padding: "10px 0" }}
              >
                {image.description}
              </Typography>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        sx={{
          overflowY: "scroll",
        }}
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div
            style={{
              position: "relative",
              margin: "50px auto",
              maxWidth: "750px",
              width: "50%",
              padding: "50px",
              backgroundColor: "#fff",
              borderRadius: "14px",
            }}
          >
            <SwipeableViews
              index={selectedImageIndex}
              onChangeIndex={(index) => setSelectedImageIndex(index)}
              enableMouseEvents
              style={{ overflow: "hidden" }}
            >
              {images.map((image, index) => (
                <div key={index} style={{ textAlign: "center" }}>
                  <img
                    src={image.src}
                    alt={image.description}
                    style={{ maxWidth: "100%", maxHeight: "80vh" }}
                  />
                  <Typography variant="h6" style={{ marginTop: "10px" }}>
                    {image.description}
                  </Typography>
                </div>
              ))}
            </SwipeableViews>
            <Button
              onClick={handleBack}
              style={{ position: "absolute", top: "50%", left: "10px" }}
            >
              <img
                src="./icon/navigate_before_black_48dp.svg"
                alt="navigate_before"
              />
            </Button>
            <Button
              onClick={handleNext}
              style={{ position: "absolute", top: "50%", right: "10px" }}
            >
              <img
                src="./icon/navigate_next_black_48dp.svg"
                alt="navigate_next"
              />
            </Button>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default Gallery;
