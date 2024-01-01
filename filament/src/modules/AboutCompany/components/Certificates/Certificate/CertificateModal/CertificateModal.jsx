import { Fade, Grid, Modal } from '@mui/material';
import React from 'react';

const CertificateModal = ({ open, handleClose, imgSrc }) => {
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
      >
        <Fade in={open}>
          <Grid
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: '80%',
              margin: '0 auto',
            }}
          >
            <img
              src={imgSrc}
              alt="Certificate"
              style={{
                width: '40%',
              }}
            />
          </Grid>
        </Fade>
      </Modal>
    </div>
  );
};

export default CertificateModal;
