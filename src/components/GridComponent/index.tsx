import React, { useMemo, useRef, useState } from 'react';
import { Container, Row } from './styled';
import { Grid } from '@mui/system';
import { alpha, TextField } from '@mui/material';
import { theme } from '../../theme';
import { Pointer } from './Pointer';
import { useParseValue } from '../../hooks/useParseValue';
import useDebounce from '../../hooks/useDebounce';

export type DirectionType = 'NORTH' | 'SOUTH' | 'EAST' | 'WEST';

/**
 * [0,4]   [1,4]   [2,4]   [3,4]   [4,4]
 * [0,3]   [1,3]   [2,3]   [3,3]   [4,4]
 * [0,2]   [1,3]   [2,3]   [3,3]   [4,4]
 * [0,1]   [1,1]   [2,1]   [3,1]   [4,1]
 * [0,0]   [1,0]   [2,0]   [3,0]   [4,0]
 */

interface Props {
  value?: string;
}

export const GridComponent: React.FC<Props> = ({ value }) => {
  const [inputValue, setInputValue] = useState(value ?? '');
  const debouncedValue = useDebounce(inputValue);

  const { direction, x, y, error } = useParseValue(debouncedValue);

  const grid = useMemo(() => {
    return Array.from(Array(5).keys())
      .reverse()
      .map((row) => (
        <Row container columns={10} size={1} key={row} spacing={1} justifyContent="center">
          {Array.from(Array(5).keys()).map((col) => (
            <DataContainer key={col} col={col} direction={direction} row={row} x={x} y={y} />
          ))}
        </Row>
      ));
  }, [x, y, direction]);

  return (
    <>
      <TextField
        label="x,y direction"
        fullWidth
        sx={{ pb: 4 }}
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
      <Container container columns={1} spacing={1}>
        {grid}
      </Container>
    </>
  );
};

interface DataProps {
  row: number;
  col: number;
  x: number | null | undefined;
  y: number | null | undefined;
  direction: DirectionType | null | undefined;
}

const DataContainer: React.FC<DataProps> = ({ col, direction, row, x, y }) => {
  const isSelectedData = typeof y === 'number' && typeof x === 'number' && y === row && x === col;

  const isValidDirection = direction !== null && direction !== undefined;

  return (
    <Grid
      sx={{
        bgcolor: isSelectedData ? alpha(theme.palette.primary.light, 0.4) : 'transparent',
        transition: 'background-color 0.3s',
        height: 100,
        boxShadow: 'none',
        border: `1px solid ${isSelectedData ? theme.palette.primary.light : theme.palette.grey[400]}`,
        borderRadius: '4px'
      }}
      size={2}
      key={col}
      alignContent="center"
      textAlign="center"
    >
      {isValidDirection && isSelectedData ? <Pointer direction={direction} /> : ''}
    </Grid>
  );
};
