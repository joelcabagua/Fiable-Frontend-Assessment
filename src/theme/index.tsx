import { createTheme } from '@mui/material';
import { green } from '@mui/material/colors';

export const theme = createTheme({
  colorSchemes: {
    dark: false
  },
  palette: {
    primary: green,
    tonalOffset: {
      light: 0.1,
      dark: 0.9
    }
  }
});
