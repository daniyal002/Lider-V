import { Box, Button, Modal, Typography } from "@mui/material";
import React from "react";

const ModalProductCardMore = ({ open, handleClose, productDescription }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{
        maxWidth: "406px",
        margin: "133px auto",
        maxHeight: "400px",
        overflowY: "scroll",
        padding: "10px",
        width: "80%",
        borderRadius: "10px",
        backgroundColor: "#A95BF3",
        "&::-webkit-scrollbar": { display: "none" },
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", rowGap: "40px" }}>
        <Typography
          sx={{
            color: "#fff",
            fontSize: "22px",
            fontWeight: "700",
            "@media(max-width:387px)": {
              fontSize: "18px",
            },
          }}
        >
          Описание: <br />
          {productDescription}
        </Typography>
        <Button
          onClick={handleClose}
          sx={{
            background: "linear-gradient( #6847F5, #A95BF3)",
            color: "#f2f2f2",
            border: "none",
            padding: "10px 30px",
            fontSize: "19px",
            fontWeight: "500",
            transition: "0.5s",
            borderRadius: "5px",
            textDecoration: "none",
            "&:hover": {
              transition: "0.5s",
              background: "linear-gradient(#A95BF3,#6847F5)",
            },
          }}
        >
          Закрыть
        </Button>
      </Box>
    </Modal>
  );
};

export default ModalProductCardMore;
