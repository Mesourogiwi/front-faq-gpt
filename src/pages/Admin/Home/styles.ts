import {
  Box,
  BoxProps,
  Button,
  ButtonProps,
  Input,
  InputProps,
  Typography,
  styled,
} from '@mui/material';

export const Container = styled(Box)<BoxProps>(() => ({
  display: 'flex',
  paddingTop: '66px',
}));

export const RightContainer = styled(Box)<BoxProps>(() => ({
  display: 'flex',
  padding: '16px',
  flexDirection: 'column',
  paddingBottom: '100px',
  width: '100%',
}));

export const WidgetContainer = styled(Box)<BoxProps>(() => ({
  display: 'flex',
  height: '100%',
  marginTop: '16px',
  width: '100%',
  gap: '16px',
}));

export const WidgetsListContainer = styled(Box)<BoxProps>(() => ({
  display: 'flex',
  flexWrap: 'wrap',
  columnGap: '16px',
  rowGap: '16px',
  justifyContent: 'start',
  alignContent: 'start',
  border: '2px solid #000',
  borderRadius: '32px',
  padding: '16px',
}));

export const ActionContainer = styled(Box)<BoxProps>(() => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  maxWidth: '600px',
  gap: '16px',
}));

export const InfosContainer = styled(Box)<BoxProps>(() => ({
  display: 'flex',
  flexDirection: 'column',
  border: '2px solid #000',
  borderRadius: '32px',
  width: '100%',
  maxWidth: '600px',
  padding: '16px',
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

export interface WidgetItemProps extends BoxProps {
  selected?: boolean;
}

export const WidgetItem = styled(Box)<WidgetItemProps>(({ selected }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  border: '2px solid #000',
  borderRadius: '32px',
  width: '150px',
  height: '150px',
  cursor: 'pointer',
  padding: '0px 8px',
  backgroundColor: selected ? '#000' : '',
  color: selected ? '#fff' : '#000',
}));

export const WidgetId = styled(Typography)<BoxProps>(() => ({
  fontSize: '48px',
  fontWeight: 700,
}));

export const WidgetName = styled(Typography)<BoxProps>(() => ({
  fontSize: '18px',
  fontWeight: 500,
  textAlign: 'center',
  wordWrap: 'break-word',
}));

export const WidgetButton = styled(Button)<ButtonProps>({
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
