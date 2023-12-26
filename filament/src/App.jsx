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
      <HomeScreen />
    </ThemeProvider>
  );
};

export default App;
