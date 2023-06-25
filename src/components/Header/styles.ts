import { Box, BoxProps, styled } from '@mui/material';
import { PALETTE } from '../../config/palette';

export const HeaderContainer = styled(Box)<BoxProps>(() => ({
  alignItems: 'center',
  color: 'white',
  backgroundColor: PALETTE.primary,
  display: 'flex',
  fontWeight: 700,
  justifyContent: 'space-between',
  padding: '8px 32px',
  zIndex: 9999,
  position: 'fixed',
  width: '100%',
}));

export const LoggedUser = styled(Box)<BoxProps>(() => ({
  alignItems: 'baseline',
  display: 'flex',
  gap: '16px',
  marginBottom: '6px',
}));
