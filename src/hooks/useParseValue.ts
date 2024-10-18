import { useEffect, useState } from 'react';
import { DirectionType } from '../components/GridComponent';

export const useParseValue = (value: string) => {
  const [x, setX] = useState<number | undefined>();
  const [y, setY] = useState<number | undefined>();
  const [direction, setDirection] = useState<DirectionType | undefined>();

  const [error, setError] = useState<string | undefined>();

  useEffect(() => {
    if (value.length < 1) {
      setError('');
      return;
    }

    const trimmedValue = value.trim();
    const [coordinateString, direction] = trimmedValue.split(' ');
    const [xString, yString] = coordinateString.split(',');

    const parsedX = parseInt(xString);
    const parsedY = parseInt(yString);

    if (
      (isNaN(parsedX) || isNaN(parsedY) || parsedY < 0 || parsedY > 5 || parsedX < 0 || parsedX > 5) &&
      value.length > 0
    ) {
      setError('Invalid coordinates.');
      return;
    }

    if (!direction) {
      setError('Add direction');
      return;
    }

    switch (direction.toLocaleLowerCase()) {
      case 'north':
        setDirection('NORTH');
        break;
      case 'south':
        setDirection('SOUTH');
        break;
      case 'west':
        setDirection('WEST');
        break;
      case 'east':
        setDirection('EAST');
        break;
      default:
        setError('Invalid direction');
        return;
    }

    setError('');

    setX(parsedX);
    setY(parsedY);
  }, [value]);

  return !!error ? { x: undefined, y: undefined, direction: undefined, error } : { x, y, direction, error };
};
