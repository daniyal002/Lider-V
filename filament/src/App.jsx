import AboutCompany from "./modules/AboutCompany/AboutCompany";
import HomeScreen from "./modules/HomeScreen/HomeScreen";
import { createTheme, ThemeProvider } from "@mui/material";
import Shares from "./modules/Shares/Shares";
import Сooperation from "./modules/Cooperation/Cooperation";
import Contact from "./modules/Contact/Contact";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LogIn from "./modules/LogIn/LogIn";
import Register from "./modules/Register/Register";
import Products from "./modules/Products/Products";
import AdminPanel from "./modules/AdminPanel/AdminPanel";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Favourites from "./modules/Favourites/Favourites";
import Cart from "./modules/Cart/Cart";
import Categories from "./modules/Categories/Categories";
import { AuthProvider } from "./components/AuthProvider/AuthProvider";
import Order from "./modules/Order/Order";
import Profile from "./modules/Profile/Profile";
import ResetPassword from "./modules/ResetPassword/ResetPassword";
import ForgotYourPassword from "./modules/ForgotYourPassword/ForgotYourPassword";
import PaymentInfo from "./modules/PaymentInfo/PaymentInfo";
import OrderDescription from "./modules/PaymentInfo/components/OrderDescription/OrderDescription";
import ReturnDescription from "./modules/PaymentInfo/components/ReturnDescription/ReturnDescription";

const App = () => {
  const theme = createTheme({
    typography: {
      fontFamily: "Montserrat",
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <AuthProvider>
          <Header />
          <main style={{ flex: 1 }}>
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
              <Route path="/order" element={<Order />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/resetpassword" element={<ResetPassword />} />
              <Route
                path="/forgotyourpassword"
                element={<ForgotYourPassword />}
              />
              <Route path="/paymentinfo/" element={<PaymentInfo />}>
                <Route path="orderdescription" element={<OrderDescription />} />
                <Route
                  path="returndescription"
                  element={<ReturnDescription />}
                />
              </Route>
            </Routes>
          </main>
          <Footer />
        </AuthProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
