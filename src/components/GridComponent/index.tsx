import React, { useMemo, useRef } from 'react';
import { Container, Row } from './styled';
import { Grid } from '@mui/system';
import { alpha } from '@mui/material';
import { theme } from '../../theme';
import { Pointer } from './Pointer';

export type DirectionType = 'NORTH' | 'SOUTH' | 'EAST' | 'WEST';

interface Props {
  x: number | null | undefined;
  y: number | null | undefined;
  direction: DirectionType | null | undefined;
}

/**
 * [0,4]   [1,4]   [2,4]   [3,4]   [4,4]
 * [0,3]   [1,3]   [2,3]   [3,3]   [4,4]
 * [0,2]   [1,3]   [2,3]   [3,3]   [4,4]
 * [0,1]   [1,1]   [2,1]   [3,1]   [4,1]
 * [0,0]   [1,0]   [2,0]   [3,0]   [4,0]
 */

export const GridComponent: React.FC<Props> = ({ x, y, direction }) => {
  const length = useRef(5);

  console.log(x, y, direction);

  const grid = useMemo(() => {
    return Array.from(Array(length.current).keys())
      .reverse()
      .map((row) => (
        <Row container columns={10} size={1} key={row} spacing={1} justifyContent="center">
          {Array.from(Array(length.current).keys()).map((col) => (
            <DataContainer col={col} direction={direction} row={row} x={x} y={y} />
          ))}
        </Row>
      ));
  }, [x, y, direction]);

  return (
    <Container container columns={1} spacing={1}>
      {grid}
    </Container>
  );
};

interface DataProps extends Props {
  row: number;
  col: number;
}

const DataContainer: React.FC<DataProps> = ({ col, direction, row, x, y }) => {
  const isSelectedData = typeof y === 'number' && typeof x === 'number' && y === row && x === col;

  // const isNotValidDirectio = direction === null || direction === undefined;

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
