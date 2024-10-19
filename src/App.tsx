import React, { useState } from 'react';
import './App.css';
import { Box, Card, CardContent, CssBaseline, TextField, ThemeProvider } from '@mui/material';
import { GridComponent } from './components/GridComponent';
import { useParseValue } from './hooks/useParseValue';
import { theme } from './theme';
import useDebounce from './hooks/useDebounce';

function App() {
  const [inputValue, setInputValue] = useState('');
  const debouncedValue = useDebounce(inputValue);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', p: 3 }}>
        <Card sx={{ maxWidth: 600, width: '100%', borderRadius: 4 }}>
          <CardContent>
            <TextField
              label="x,y direction"
              fullWidth
              sx={{ pb: 4 }}
              id="outlined-basic"
              variant="outlined"
              size="small"
              value={inputValue}
              onChange={({ currentTarget }) => {
                setInputValue(currentTarget.value);
              }}
            />
            <GridComponent inputValue={inputValue} />
          </CardContent>
        </Card>
      </Box>
    </ThemeProvider>
  );
}

export default App;
