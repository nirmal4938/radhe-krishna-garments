export default {
  name: "luxury",
  palette: {
    primary: { main: "#000000" },
    secondary: { main: "#ffd700" },
    background: { default: "#ffffff" },
    text: { primary: "#000000" },
  },
  typography: {
    fontFamily: '"Playfair Display", Georgia, serif',
    h1: { fontSize: "3rem", fontWeight: 700, letterSpacing: "0.05em" },
    h2: { fontSize: "2rem", fontWeight: 600, letterSpacing: "0.02em" },
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
          background: "linear-gradient(135deg, #000000, #ffd700)",
          color: "#ffffff",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
          border: "1px solid #ffd700",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          background: "linear-gradient(135deg, #ffffff, #f8f8f8)",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: "linear-gradient(135deg, #000000, #333333)",
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          background: "rgba(255, 215, 0, 0.1)",
          border: "1px solid #ffd700",
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
