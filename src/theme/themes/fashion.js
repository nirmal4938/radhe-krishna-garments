export default {
  name: "fashion",
  palette: {
    primary: { main: "#212121" },
    secondary: { main: "#757575" },
    background: { default: "#ffffff" },
    text: { primary: "#212121" },
  },
  typography: {
    fontFamily: '"Playfair Display", Georgia, serif',
    h1: { fontSize: "2.5rem", fontWeight: 700, letterSpacing: "-0.02em" },
    h2: { fontSize: "1.75rem", fontWeight: 600, letterSpacing: "-0.01em" },
  },
  shape: {
    borderRadius: 0,
  },
  spacing: 8,
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "uppercase",
          letterSpacing: "0.1em",
          borderRadius: 0,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: "none",
          border: "1px solid #e0e0e0",
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
          background: "#212121",
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 0,
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          borderRadius: 0,
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
