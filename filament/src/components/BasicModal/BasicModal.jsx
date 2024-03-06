import { Box, Button, Modal, Typography } from "@mui/material";
import React from "react";

const BasicModal = ({ open, handleClose, textHeader, IconModal }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography
          id="modal-modal-title"
          variant="h6"
          component="h2"
          sx={{
            display: "flex",
            alignItems: "center",
            columnGap: "15px",
            lineHeight: "25px",
            "@media(max-width:400px)": {
              fontSize: "14px",
            },
            fontWeight: "bold",
          }}
        >
          <img src={IconModal} alt="" width="200" />
          {textHeader}
        </Typography>
        <Button
          onClick={handleClose}
          sx={{
            border: "1px solid #A95BF3",
            fontSize: "19px",
            color: "#A95BF3",
          }}
        >
          ОК
        </Button>
      </Box>
    </Modal>
  );
};

const style = {
  display: "flex",
  flexDirection: "column",
  rowGap: "20px",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: "400px",
  width: "60%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
};

export default BasicModal;
