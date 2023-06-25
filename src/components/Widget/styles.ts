import { Box, Button, styled } from '@mui/material';
import { PALETTE } from '../../config/palette';

export const WidgetIconBox = styled(Box)(() => ({
  position: 'fixed',
  bottom: 50,
  right: 10,
}));

export const ChatBox = styled(Box)(() => ({
  borderRadius: '24px',
  width: '300px',
  height: '70vh',
  position: 'fixed',
  bottom: 120,
  right: 10,
  display: 'flex',
  flexDirection: 'column',
  boxShadow: '0 4px 4px rgba(37, 37, 37, 0.5)',
  zIndex: 10,
}));

export const ChatHeader = styled(Box)(() => ({
  backgroundColor: PALETTE.primary,
  borderTopLeftRadius: '24px',
  borderTopRightRadius: '24px',
  padding: '8px 16px',
  fontWeight: 700,
  color: 'white',
}));

export const ChatContent = styled(Box)(() => ({
  backgroundColor: 'white',
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  padding: '10px',
  overflowY: 'auto',
}));

export const ChatFooter = styled(Box)(() => ({
  backgroundColor: PALETTE.primary,
  borderBottomLeftRadius: '24px',
  borderBottomRightRadius: '24px',
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  padding: '8px 16px',
  fontWeight: 700,
  color: 'white',
}));

export const FooterBox = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '10px',
  fontSize: '10px',
  fontWeight: 500,
}));

export const SendButton = styled(Button)(() => ({
  minWidth: 0,
  padding: '10px',
  paddingLeft: 0,
}));
