import { Input as MUIInput, InputProps, styled } from '@mui/material';

export const Input = styled(MUIInput)<InputProps>(() => ({
  width: '100%',
  border: '2px solid #000',
  borderRadius: '16px',
  padding: '8px',
}));
