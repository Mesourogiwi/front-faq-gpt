import { Box, BoxProps, styled } from '@mui/material';

export const Container = styled(Box)<BoxProps>(() => ({
  display: 'flex',
  paddingTop: '52px',
}));

export const ImageContainer = styled(Box)<BoxProps>(() => ({
  display: 'flex',
  width: '100vw',
  height: 'calc(100vh - 52px)',
  justifyContent: 'center',
  alignItems: 'center',
  paddingBottom: '52px',
}));
