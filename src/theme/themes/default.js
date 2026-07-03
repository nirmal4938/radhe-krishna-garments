export default {
  name: "default",
  palette: {
    primary: { main: "#1976d2" },
    secondary: { main: "#607d8b" },
    background: { default: "#fafafa" },
    text: { primary: "#212121" },
  },
  typography: {
    fontFamily: "Roboto, Arial, sans-serif",
  },
  shape: {
    borderRadius: 0,
  },
  spacing: 8,
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: "none",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          background: "transparent",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: "#1976d2",
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 2,
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          borderRadius: 2,
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        maxWidth: "none",
      },
    },
  },
  custom: {},
};
