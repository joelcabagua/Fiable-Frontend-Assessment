import { ArrowUpward } from '@mui/icons-material';
import { DirectionType } from '.';
import { Box } from '@mui/material';

export const Pointer: React.FC<{ direction: DirectionType }> = ({ direction }) => {
  return (
    <Box sx={{ transform: directionToRotation(direction) }}>
      <ArrowUpward sx={{ color: 'primary.dark' }} fontSize="large" />
    </Box>
  );
};

const directionToRotation = (direction: DirectionType) => {
  switch (direction) {
    case 'NORTH':
      return 'rotate(0)';
    case 'EAST':
      return 'rotate(90deg)';
    case 'SOUTH':
      return 'rotate(180deg)';
    case 'WEST':
      return 'rotate(-90deg)';
    default:
      return 'rotate(0)';
  }
};
