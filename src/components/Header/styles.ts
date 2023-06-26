import { Box, BoxProps, Typography, TypographyProps, styled } from '@mui/material';
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

export const CurrentWidget = styled(Typography)<TypographyProps>(() => ({
  color: 'black',
  fontWeight: 700,
  //mesmo font size do <p>
  fontSize: '16px',
  textTransform: 'capitalize',
}));

export const CurrentWidgetContainer = styled(Box)<BoxProps>(() => ({
  //background color branca, com padding no eixo x de 8 px e border radius de 16px
  backgroundColor: 'white',
  borderRadius: '16px',
  padding: '0 8px',
}));
