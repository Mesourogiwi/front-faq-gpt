import { Box, BoxProps, styled } from '@mui/material';

const MessageBox = styled(Box)<BoxProps>(() => ({
  padding: '10px 10px 10px 16px',
  fontWeight: 700,
  fontSize: '12px',
}));

export const AutomaticMessage = styled(MessageBox)(() => ({
  backgroundColor: 'rgba(0, 0, 0, 0.15)',
  borderRadius: '30px 30px 30px 0px',
  alignSelf: 'flex-start',
}));

export const UserMessage = styled(MessageBox)(() => ({
  backgroundColor: 'rgba(147, 147, 147, 0.2)',
  borderRadius: '41.1161px 41.1161px 0px 41.12px',
  alignSelf: 'flex-end',
}));
