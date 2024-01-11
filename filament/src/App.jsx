import AboutCompany from "./modules/AboutCompany/AboutCompany";
import HomeScreen from "./modules/HomeScreen/HomeScreen";
import { createTheme, ThemeProvider } from "@mui/material";
import Shares from "./modules/Shares/Shares";
import Сooperation from "./modules/Сooperation/Сooperation";
import Contact from "./modules/Contact/Contact";

const App = () => {
  const theme = createTheme({
    typography: {
      fontFamily: "Montserrat",
    },
  });
  return (
    <ThemeProvider theme={theme}>
      {/* <HomeScreen /> */}
      {/* <AboutCompany /> */}
      {/* <Shares /> */}
      {/* <Сooperation /> */}
      <Contact />
    </ThemeProvider>
  );
};

export default App;
