import { Button, Grid } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import ModalMenu from './ModalMenu/ModalMenu';
import { useState } from 'react';
import { useAuth } from '../AuthProvider/AuthProvider';

const Header = () => {
  const location = useLocation();
  const pages = [
    { link: '/', text: 'Главная' },
    { link: '/products', text: 'Продукты' },
    { link: '/categories', text: 'Категории' },
    { link: '/shares', text: 'Акции' },
    { link: '/aboutcompany', text: 'О компании' },
    { link: '/contact', text: 'Сотрудничество' },
    { link: '/gallery', text: 'Фотогаллерея' },
  ];
  const { isLoggedIn, logout } = useAuth();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <Grid
      sx={{
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        columnGap: '20px',
        padding: '38px 24px',
      }}
    >
      <ModalMenu open={open} handleClose={handleClose} pages={pages} />
      <Grid
        sx={{
          maxWidth: '208px',
          width: '100%',
        }}
      >
        <img
          src="./icon/logo.svg"
          alt="Logo"
          style={{
            width: '100%',
          }}
        />
      </Grid>

      <Grid
        sx={{
          '@media(max-width:1200px)': {
            display: 'none',
          },
        }}
      >
        <nav>
          <ul
            style={{
              marginTop: '20px',
              display: 'flex',
              columnGap: '30px',
              rowGap: '15px',
              justifyContent: 'center',
              flexWrap: 'wrap',
              listStyle: 'none',
            }}
          >
            {pages.map((page, index) => (
              <li key={index}>
                <Link
                  to={page.link}
                  style={{
                    color: '#fff',
                    textDecoration: 'none',
                    fontSize: '19px',
                  }}
                >
                  {page.text}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Grid>
      <Grid
        sx={{
          display: 'flex',
          columnGap: '20px',
          rowGap: '20px',
          flexDirection: 'column',
          '@media(max-width:1200px)': {
            display: 'none',
          },
        }}
      >
        <Grid sx={{ display: 'flex', columnGap: '20px' }}>
          {isLoggedIn ? (
            <>
              <Button
                onClick={logout}
                sx={{
                  background: 'linear-gradient( #6847F5, #A95BF3)',
                  padding: '0',
                  fontSize: '19px',
                  fontWeight: '500',
                  transition: '0.5s',
                  border: '1px solid #04040c',

                  '&:hover': {
                    border: '1px solid #A95BF3',

                    background: '#04040c',
                  },
                }}
              >
                <Link
                  to="/login"
                  style={{
                    textDecoration: 'none',
                    padding: '17px 50px',
                    color: '#f2f2f2',
                  }}
                >
                  Выход
                </Link>
              </Button>
            </>
          ) : (
            <>
              <Button
                sx={{
                  background: 'linear-gradient( #6847F5, #A95BF3)',
                  padding: '0',
                  fontSize: '19px',
                  fontWeight: '500',
                  transition: '0.5s',
                  border: '1px solid #04040c',

                  '&:hover': {
                    border: '1px solid #A95BF3',

                    background: '#04040c',
                  },
                }}
              >
                <Link
                  to="/login"
                  style={{
                    textDecoration: 'none',
                    padding: '17px 50px',
                    color: '#f2f2f2',
                  }}
                >
                  Вход
                </Link>
              </Button>

              <Button
                sx={{
                  border: '1px solid #A95BF3',
                  fontSize: '19px',
                  fontWeight: '500',
                  transition: '0.5s',
                  padding: '0',

                  '&:hover': {
                    background: '#A95BF3',
                  },
                }}
              >
                <Link
                  to="/register"
                  style={{
                    padding: '17px 50px',
                    color: '#f2f2f2',
                    textDecoration: 'none',
                  }}
                >
                  Регистрация
                </Link>
              </Button>
            </>
          )}
        </Grid>

        <Grid
          sx={{
            display: 'flex',
            columnGap: '20px',
            justifyContent: 'flex-end',
          }}
        >
          <Button sx={{}}>
            <Link
              to="/favorites"
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                color: '#FFF',
                fontSize: '19px',
                textDecoration: 'none',
                textTransform: 'none',
              }}
            >
              {location.pathname == '/favorites' ? (
                <img
                  src="./icon/favorite_black_24dp.svg"
                  alt="favorite"
                  width="50"
                  style={{
                    cursor: 'pointer',
                  }}
                />
              ) : (
                <img
                  src="./icon/favorite_border_black_24dp.svg"
                  alt="favorite"
                  width="50"
                  style={{
                    cursor: 'pointer',
                  }}
                />
              )}
              Избранное
            </Link>
          </Button>

          <Button sx={{}}>
            <Link
              to="/cart"
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                color: '#FFF',
                fontSize: '19px',
                textDecoration: 'none',
                textTransform: 'none',
              }}
            >
              {location.pathname == '/cart' ? (
                <img
                  src="./icon/shopping_cart_white_24dp.svg"
                  alt="favorite"
                  width="50"
                  style={{
                    cursor: 'pointer',
                  }}
                />
              ) : (
                <img
                  src="./icon/shopping_cart_border_white_24dp.svg"
                  alt="favorite"
                  width="50"
                  style={{
                    cursor: 'pointer',
                  }}
                />
              )}
              Корзина
            </Link>
          </Button>
        </Grid>
      </Grid>
      <Grid
        sx={{
          '@media(min-width:1200px)': {
            display: 'none',
          },
        }}
      >
        <Button onClick={handleOpen}>
          <img src="./icon/menu_white.svg" alt="" />
        </Button>
      </Grid>
    </Grid>
  );
};

export default Header;
