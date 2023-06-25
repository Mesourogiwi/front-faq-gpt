import { Box, BoxProps, styled } from '@mui/material';

export const Container = styled(Box)<BoxProps>(() => ({
  display: 'flex',
  paddingTop: '52px',
}));

export const RightContainer = styled(Box)<BoxProps>(() => ({
  display: 'flex',
  padding: '16px',
}));