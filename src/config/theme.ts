import { createTheme } from '@mui/material/styles';

import { PALETTE } from './palette';

export const theme = createTheme({
  palette: {
    primary: {
      main: PALETTE.primary,
    },
    secondary: {
      main: PALETTE.secondary,
    },
    info: {
      main: '#FFF',
    },
  },
  typography: {
    fontFamily: ['Ubuntu', 'sans-serif'].join(','),
  },
});
