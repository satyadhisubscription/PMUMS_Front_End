import { createTheme } from '@mui/material/styles';

// Create Material-UI theme with Royal Dark Blue PMUMS branding
export const theme = createTheme({
  palette: {
    primary: {
      main: '#1a237e', // Royal Dark Blue
      light: '#534bae', // Medium Royal Blue
      dark: '#000051', // Deep Navy Royal Blue
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#ffffff', // Pure White
      light: '#f8f9ff', // Very light blue-white
      dark: '#e8eaf6', // Light Royal Blue tint
      contrastText: '#1a237e',
    },
    success: {
      main: '#283593', // Royal Blue success
      light: '#5f5fc4',
      dark: '#1a237e',
      contrastText: '#ffffff',
    },
    warning: {
      main: '#303f9f', // Royal Blue warning
      light: '#666ad1',
      dark: '#1a237e',
      contrastText: '#ffffff',
    },
    error: {
      main: '#3949ab', // Royal Blue error (softer)
      light: '#6f74dd',
      dark: '#1a237e',
      contrastText: '#ffffff',
    },
    background: {
      default: '#ffffff', // Pure white background
      paper: '#ffffff', // Pure white paper
    },
    text: {
      primary: '#1a237e', // Royal Dark Blue text
      secondary: '#283593', // Medium Royal Blue for secondary text
    },
    divider: '#e8eaf6', // Light royal blue divider
    action: {
      hover: '#e8eaf6', // Light royal blue hover
      selected: '#c5cae9', // Royal blue selection
    },
  },
  typography: {
    fontFamily: [
      'Inter',
      'Noto Sans Devanagari',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      'sans-serif',
    ].join(','),
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
      lineHeight: 1.2,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 600,
      lineHeight: 1.3,
    },
    h3: {
      fontSize: '1.5rem',
      fontWeight: 600,
      lineHeight: 1.4,
    },
    h4: {
      fontSize: '1.25rem',
      fontWeight: 600,
      lineHeight: 1.4,
    },
    h5: {
      fontSize: '1.125rem',
      fontWeight: 600,
      lineHeight: 1.5,
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 600,
      lineHeight: 1.5,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.5,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 8,
          fontSize: '1rem',
          padding: '10px 28px',
          fontWeight: 600,
          boxShadow: 'none',
        },
        containedPrimary: {
          backgroundColor: '#1565c0',
          color: '#ffffff',
          '&:hover': {
            backgroundColor: '#1976d2',
            boxShadow: '0 4px 12px rgba(21, 101, 192, 0.3)',
          },
        },
        outlinedPrimary: {
          borderColor: '#1565c0',
          color: '#1565c0',
          backgroundColor: '#ffffff',
          '&:hover': {
            backgroundColor: '#e3f2fd',
            borderColor: '#1976d2',
          },
        },
        containedSecondary: {
          backgroundColor: '#ffffff',
          color: '#1565c0',
          border: '2px solid #1565c0',
          '&:hover': {
            backgroundColor: '#f5f5f5',
            borderColor: '#1976d2',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          backgroundColor: '#ffffff',
          border: '1px solid #e3f2fd',
          boxShadow: '0 2px 8px rgba(21, 101, 192, 0.08)',
          '&:hover': {
            boxShadow: '0 4px 16px rgba(21, 101, 192, 0.12)',
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 8,
            backgroundColor: '#ffffff',
            '& fieldset': {
              borderColor: '#e3f2fd',
            },
            '&:hover fieldset': {
              borderColor: '#1565c0',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#1565c0',
            },
          },
          '& .MuiInputLabel-root': {
            color: '#1976d2',
            '&.Mui-focused': {
              color: '#1565c0',
            },
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#ffffff',
          color: '#1565c0',
          borderBottom: '2px solid #1565c0',
          boxShadow: '0 2px 8px rgba(21, 101, 192, 0.1)',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: '#ffffff',
          border: '1px solid #e3f2fd',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          '&.MuiChip-colorPrimary': {
            backgroundColor: '#1565c0',
            color: '#ffffff',
          },
          '&.MuiChip-colorSecondary': {
            backgroundColor: '#ffffff',
            color: '#1565c0',
            border: '1px solid #1565c0',
          },
        },
      },
    },
  },
});

export default theme;