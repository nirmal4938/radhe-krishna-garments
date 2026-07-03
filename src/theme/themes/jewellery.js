export default {
  name: "jewellery",
  palette: {
    primary: { main: "#ffd700" },
    secondary: { main: "#b8860b" },
    background: { default: "#fffaf0" },
    text: { primary: "#2f4f4f" },
  },
  typography: {
    fontFamily: '"Playfair Display", Georgia, serif',
    h1: { fontSize: "2.5rem", fontWeight: 700, color: "#b8860b" },
    h2: { fontSize: "1.75rem", fontWeight: 600, color: "#daa520" },
  },
  shape: {
    borderRadius: 8,
  },
  spacing: 8,
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: 8,
          background: "linear-gradient(135deg, #ffd700, #ffb300)",
          color: "#2f4f4f",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: "0 8px 32px rgba(255, 215, 0, 0.2)",
          border: "1px solid rgba(255, 215, 0, 0.3)",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          background: "linear-gradient(135deg, #fffaf0, #fff8dc)",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: "linear-gradient(135deg, #ffd700, #ffb300)",
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          background: "rgba(255, 215, 0, 0.1)",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          borderRadius: 4,
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
