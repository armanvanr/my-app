import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1565C0',
      dark: '#0D47A1',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#6A1B9A',
      dark: '#4A148C',
      contrastText: '#ffffff',
    },
    info: {
      main: '#00838F',
      dark: '#006064',
      contrastText: '#ffffff',
    },
    success: {
      main: '#2E7D32',
      dark: '#1B5E20',
      contrastText: '#ffffff',
    },
    warning: {
      main: '#EF6C00',
      dark: '#E65100',
      contrastText: '#ffffff',
    },
  },
  components: {
    MuiSvgIcon: {
      styleOverrides: {
        fontSizeSmall: {
          fontSize: '16px !important',
        },
        fontSizeMedium: {
          fontSize: '20px !important',
        },
        fontSizeLarge: {
          fontSize: '24px !important',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none', // optional: disable uppercase
          borderRadius: '12px',  // optional: custom roundness
        },
        sizeSmall: {
          fontSize: '12px !important',
          padding: '4px 10px !important',
          minHeight: '32px !important',
          minWidth: '90px !important',
          height: '32px !important',
          width: 'auto !important',
        },
        sizeMedium: {
          fontSize: '14px !important',
          padding: '8px 16px !important',
          minHeight: '40px !important',
          minWidth: '100px !important',
          height: '40px !important',
          width: 'auto !important',
        },
        sizeLarge: {
          fontSize: '16px !important',
          padding: '12px 22px !important',
          minHeight: '48px !important',
          minWidth: '120px !important',
          height: '48px !important',
          width: 'auto !important',
        },
      },
    },
  },
});

export default theme;
