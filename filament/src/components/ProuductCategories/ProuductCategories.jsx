import { Button, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import ModalChangeProuductCategories from './components/ModalChangeProuductCategories/ModalChangeProuductCategories';
import { useDeleteCategory } from '../../modules/AdminPanel/hook/useDeleteCategory';
import { Link } from 'react-router-dom';

const ProuductCategories = ({ text, admin, id }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { mutate: DeleteCategory } = useDeleteCategory();
  return (
    <Grid
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '0 12px',
      }}
    >
      <ModalChangeProuductCategories
        open={open}
        handleClose={handleClose}
        id={id}
      />
      <Grid
        sx={{
          background: 'rgba(134, 155, 223, 0.14)',
          display: 'flex',
          flexDirection: 'column',
          width: '306px',
          padding: '50px 0',
          border: '2px solid rgba(83, 84, 136, 0.4)',
          borderRadius: '14px',
          alignItems: 'center',
        }}
      >
        <img
          src="./img/clients-item-lg1.jpg"
          alt=""
          width="140"
          style={{
            borderRadius: '50%',
          }}
        />
        <Typography
          sx={{
            fontSize: '22px',
            color: '#fff',
          }}
        >
          {text}
        </Typography>
      </Grid>
      {admin ? (
        <>
          <Button
            onClick={handleOpen}
            sx={{
              background: 'linear-gradient( #6847F5, #A95BF3)',
              color: '#f2f2f2',
              border: 'none',
              padding: '17px 50px',
              fontSize: '19px',
              fontWeight: '500',
              transition: '0.5s',
              textDecoration: 'none',
              transform: 'translateY(-50%)',
              '&:hover': {
                transform: 'translateY(-60%)',
                background: 'linear-gradient(#A95BF3,#6847F5)',
              },
            }}
          >
            Изменить
          </Button>
          <Button
            onClick={() => DeleteCategory(id)}
            sx={{
              background: 'linear-gradient( #6847F5, #A95BF3)',
              color: '#f2f2f2',
              border: 'none',
              padding: '17px 50px',
              fontSize: '19px',
              fontWeight: '500',
              transition: '0.5s',
              textDecoration: 'none',
              transform: 'translateY(-50%)',
              '&:hover': {
                transform: 'translateY(-60%)',
                background: 'linear-gradient(#A95BF3,#6847F5)',
              },
            }}
          >
            Удалить
          </Button>
        </>
      ) : (
        <Link
          to={`/products?category=${id}`}
          style={{
            background: 'linear-gradient( #6847F5, #A95BF3)',
            color: '#f2f2f2',
            border: 'none',
            padding: '17px 50px',
            fontSize: '19px',
            fontWeight: '500',
            textDecoration: 'none',
            transform: 'translateY(-50%)',
          }}
        >
          Перейти
        </Link>
      )}
    </Grid>
  );
};

export default ProuductCategories;
