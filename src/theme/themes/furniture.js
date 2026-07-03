export default {
  name: "furniture",
  palette: {
    primary: { main: "#5d4037" },
    secondary: { main: "#8d6e63" },
    background: { default: "#fafafa" },
    text: { primary: "#3e2723" },
  },
  typography: {
    fontFamily: '"Merriweather", Georgia, serif',
    h1: { fontSize: "2.5rem", fontWeight: 700 },
    h2: { fontSize: "1.75rem", fontWeight: 600 },
  },
  shape: {
    borderRadius: 4,
  },
  spacing: 8,
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
          boxShadow: "0 4px 12px rgba(93, 64, 55, 0.15)",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          background: "#fafafa",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: "#5d4037",
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
