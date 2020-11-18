import { createMuiTheme } from '@material-ui/core';
import { orange } from '@material-ui/core/colors';

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: orange[800],
    },
  },
  overrides: {
    MuiButton: {
      root: {
        height: '100%',
      },
    },
    MuiGrid: {
      root: {
        height: '100%',
        width: '100% !important',
        margin: '0 !important',
      },
    },
  },
});
