import { Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import CertificateModal from './CertificateModal/CertificateModal';

const Certificate = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <CertificateModal
        open={open}
        handleClose={handleClose}
        imgSrc={'./img/Certificates.jpg'}
      />
      <Grid
        sx={{
          display: 'flex',
          flexDirection: 'column',
          rowGap: '15px',
          maxWidth: '200px',
        }}
      >
        <img
          src="./img/Certificates.jpg"
          alt="Certificates"
          width="200"
          onClick={handleOpen}
        />
        <Typography
          sx={{
            fontSize: '16px',
            textAlign: 'center',
            color: 'white',
          }}
        >
          Сертификат соответствия филаментов для аддитивных технологий ООО ПК
          НИТ
        </Typography>
      </Grid>
    </>
  );
};

export default Certificate;
