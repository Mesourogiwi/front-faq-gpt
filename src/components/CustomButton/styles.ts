import { Button as MUIButton, ButtonProps, styled } from '@mui/material';

export const Button = styled(MUIButton)<ButtonProps>({
  marginTop: '8px',
  padding: '8px',
  textTransform: 'none',
  borderRadius: '16px',
});
