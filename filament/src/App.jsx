import AboutCompany from './modules/AboutCompany/AboutCompany';
import HomeScreen from './modules/HomeScreen/HomeScreen';
import { createTheme, ThemeProvider } from '@mui/material';

const App = () => {
  const theme = createTheme({
    typography: {
      fontFamily: 'Montserrat',
    },
  });
  return (
    <ThemeProvider theme={theme}>
      {/* <HomeScreen /> */}
      <AboutCompany/>
    </ThemeProvider>
  );
};

export default App;
