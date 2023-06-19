import { Box, BoxProps, styled } from '@mui/material';

export const Container = styled(Box)<BoxProps>(() => ({
  display: 'flex',
  borderRight: '2px solid #000',
  width: '256px',
  height: 'calc(100vh - 52px)',
}));
