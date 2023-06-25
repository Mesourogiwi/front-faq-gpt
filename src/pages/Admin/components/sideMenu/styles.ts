import { Box, BoxProps, styled } from '@mui/material';

export const Container = styled(Box)<BoxProps>(() => ({
  display: 'flex',
  borderRight: '2px solid #000',
  width: '256px',
  flexDirection: 'column',
  height: 'calc(100vh - 70px)',
  alignContent: 'center',
  marginBottom: '36px',
}));

export const Menu = styled(Box)<BoxProps>(() => ({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  marginTop: '4px',
}));

export interface OptionProps extends BoxProps {
  selected?: boolean;
}

export const Option = styled(Box)<OptionProps>(({ selected }) => ({
  display: 'flex',
  backgroundColor: selected ? '#000' : '',
  borderRadius: selected ? '16px' : '',
  color: selected ? '#fff' : '#000',
  width: '224px',
  marginLeft: '16px',
  marginRight: '16px',
  padding: '16px 0px 16px 16px',
  flexDirection: 'column',

  '&:hover': {
    backgroundColor: selected ? '#000' : '#dedede',
    borderRadius: '16px',
    cursor: 'pointer',
  },

  '&:first-child': {
    marginTop: '8px',
  },
}));
