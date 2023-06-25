import { Box, BoxProps, styled } from '@mui/material';

export const Container = styled(Box)<BoxProps>(() => ({
  display: 'flex',
  paddingTop: '66px',
}));

export const RightContainer = styled(Box)<BoxProps>(() => ({
  display: 'flex',
  padding: '16px',
}));

export const SessionList = styled(Box)<BoxProps>(() => ({
  display: 'flex',
  padding: '16px',
  width: '100%',
}));
