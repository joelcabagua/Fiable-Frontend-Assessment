import React, { useMemo, useRef } from 'react';
import { Column, Container, Row } from './styled';
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

  const grid = useMemo(() => {
    return Array.from(Array(length.current).keys())
      .reverse()
      .map((row) => (
        <Row container columns={10} size={1} key={row} spacing={1} justifyContent="center">
          {Array.from(Array(length.current).keys()).map((col) => (
            <Column size={2} key={col} alignContent="center" textAlign="center">
              {direction !== null &&
              direction !== undefined &&
              isValidAndAbsoluteEqual(y, row) &&
              isValidAndAbsoluteEqual(x, col) ? (
                <Pointer direction={direction} />
              ) : (
                ''
              )}
            </Column>
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

const isValidAndAbsoluteEqual = (axis: number | null | undefined, colOrRow: number) => {
  if (!axis && typeof axis != 'number') return false;

  return axis === colOrRow;
};
