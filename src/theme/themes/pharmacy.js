export default {
  name: "pharmacy",
  palette: {
    primary: { main: "#4caf50" },
    secondary: { main: "#9e9e9e" },
    background: { default: "#f5f5f5" },
    text: { primary: "#212121" },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
    h1: { fontSize: "2rem", fontWeight: 600 },
    h2: { fontSize: "1.5rem", fontWeight: 500 },
  },
  shape: {
    borderRadius: 4,
  },
  spacing: 6,
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: 4,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          background: "#ffffff",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: "#4caf50",
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
