import React, { useState } from 'react';
import './App.css';
import { Box, Card, CardContent, CssBaseline, TextField } from '@mui/material';
import { GridComponent } from './components/GridComponent';
import { useParseValue } from './hooks/useParseValue';

function App() {
  const [inputValue, setInputValue] = useState('');
  const { direction, x, y, error } = useParseValue(inputValue);

  return (
    <>
      <CssBaseline />
      <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', p: 3 }}>
        <Card sx={{ maxWidth: 600, width: '100%', borderRadius: 4 }}>
          <CardContent>
            <TextField
              label="x,y direction"
              fullWidth
              sx={{ mb: 2 }}
              error={!!error}
              helperText={error}
              id="outlined-basic"
              variant="outlined"
              size="small"
              value={inputValue}
              onChange={({ currentTarget }) => {
                setInputValue(currentTarget.value);
              }}
            />

            <GridComponent x={x} y={y} direction={direction} />
          </CardContent>
        </Card>
      </Box>
    </>
  );
}

export default App;
