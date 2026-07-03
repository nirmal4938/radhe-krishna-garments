export default {
  name: "restaurant",
  palette: {
    primary: { main: "#ff9800" },
    secondary: { main: "#757575" },
    background: { default: "#fff8f0" },
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
          background: "#fff8f0",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: "#ff9800",
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
  custom: {
    // Add restaurant-specific overrides if needed
  },
};
