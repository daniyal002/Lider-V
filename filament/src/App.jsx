import AboutCompany from "./modules/AboutCompany/AboutCompany";
import HomeScreen from "./modules/HomeScreen/HomeScreen";
import { createTheme, ThemeProvider } from "@mui/material";
import Shares from "./modules/Shares/Shares";
import Сooperation from "./modules/Сooperation/Сooperation";
import Contact from "./modules/Contact/Contact";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LogIn from "./modules/LogIn/LogIn";
import Register from "./modules/Register/Register";
import Products from "./modules/Products/Products";
import AdminPanel from "./modules/AdminPanel/AdminPanel";

const App = () => {
  const theme = createTheme({
    typography: {
      fontFamily: "Montserrat",
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/products" element={<Products />} />
          <Route path="/aboutcompany" element={<AboutCompany />} />
          <Route path="/shares" element={<Shares />} />
          <Route path="/cooperation" element={<Сooperation />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/register" element={<Register />} />
          <Route path="/admin" element={<AdminPanel />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
