import styled from '@emotion/styled';
import { Grid2 as Grid } from '@mui/material';

export const Row = styled(Grid)(({ theme }) => ({
  margin: 'auto'
}));

export const Column = styled(Grid)(({ theme }) => ({
  height: 100,
  boxShadow: 'none',
  border: '1px solid gray',
  borderRadius: '4px'
}));

export const Container = styled(Grid)(() => ({}));
