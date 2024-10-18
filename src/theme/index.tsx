import { createTheme } from '@mui/material';
import { green } from '@mui/material/colors';

export const theme = createTheme({
  colorSchemes: {
    dark: false
  },
  palette: {
    primary: {
      main: green[300]
    },
    tonalOffset: {
      light: 0.1,
      dark: 0.9
    }
  }
});
