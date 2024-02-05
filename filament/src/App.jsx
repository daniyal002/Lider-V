import AboutCompany from './modules/AboutCompany/AboutCompany';
import HomeScreen from './modules/HomeScreen/HomeScreen';
import { createTheme, ThemeProvider } from '@mui/material';
import Shares from './modules/Shares/Shares';
import Сooperation from './modules/Сooperation/Сooperation';
import Contact from './modules/Contact/Contact';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LogIn from './modules/LogIn/LogIn';
import Register from './modules/Register/Register';
import Products from './modules/Products/Products';
import AdminPanel from './modules/AdminPanel/AdminPanel';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Favourites from './modules/Favourites/Favourites';
import Cart from './modules/Cart/Cart';
import Gallery from './modules/Gallery/Gallery';
import Categories from './modules/Categories/Categories';

const App = () => {
  const theme = createTheme({
    typography: {
      fontFamily: 'Montserrat',
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/categories" element={<Categories />} />

          <Route path="/products" element={<Products />} />
          <Route path="/aboutcompany" element={<AboutCompany />} />
          <Route path="/shares" element={<Shares />} />
          <Route path="/cooperation" element={<Сooperation />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/register" element={<Register />} />
          <Route path="/admin" element={<AdminPanel />} />
          <Route path="/favorites" element={<Favourites />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
