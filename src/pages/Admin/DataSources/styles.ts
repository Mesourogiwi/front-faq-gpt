import { Box, BoxProps, Button, ButtonProps, Input, InputProps, styled } from '@mui/material';

export const Container = styled(Box)<BoxProps>(() => ({
  display: 'flex',
  paddingTop: '66px',
}));

export const RightContainer = styled(Box)<BoxProps>(() => ({
  display: 'flex',
  padding: '16px',
}));

export const SourceButton = styled(Button)<ButtonProps>({
  marginTop: '8px',
  padding: '8px',
  border: '2px solid #000',
  textTransform: 'none',
  borderRadius: '16px',
  ':hover': {
    backgroundColor: '#dedede',
  },
});

export const InputText = styled(Input)<InputProps>(() => ({
  width: '100%',
  border: '2px solid #000',
  borderRadius: '16px',
  padding: '8px',
}));

export const ActionContainer = styled(Box)<BoxProps>(() => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  maxWidth: '600px',
  gap: '16px',
}));

export const CreateContainer = styled(Box)<BoxProps>(() => ({
  display: 'flex',
  flexDirection: 'column',
  border: '2px solid #000',
  borderRadius: '32px',
  width: '100%',
  maxWidth: '600px',
  padding: '16px',
}));

export const ResponseStatusContainer = styled(Box)<BoxProps>(() => ({
  display: 'flex',
  width: '100%',
  maxWidth: '600px',
  padding: '16px',
}));
