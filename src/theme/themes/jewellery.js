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
    h1: { fontSize: "5rem", fontWeight: 800, color: "#b8860b" },
    h2: { fontSize: "3rem", fontWeight: 800, color: "#b8860b" },
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
  custom: {
    hero: {
      imageRadius: 4,
      imageElevation: 14,
      floatingCardRadius: 3,
      primaryButtonVariant: "contained",
      secondaryButtonVariant: "outlined",
      layout: "split",
      showStats: true,
      showOfferCard: true,
      showVerifiedCard: true,
    },
    trust: { cardRadius: 3, cardElevation: 1, hoverShadow: 10 },
    products: {
      cardRadius: 3,
      imageRadius: 2,
      cardElevation: 1,
      hoverShadow: 12,
      showWishlist: true,
      cardStyle: "atelier",
    },
    collections: {
      cardRadius: 3,
      cardElevation: 1,
      hoverShadow: 12,
      featureFirst: true,
    },
    offers: { cardRadius: 4, cardElevation: 0, variant: "gradient" },
    reviews: { cardRadius: 3, cardElevation: 2, hoverShadow: 10 },
    newsletter: { radius: 4, elevation: 0, variant: "dark", inputRadius: 2 },
    footerCta: { buttonVariant: "contained" },
    loading: { indicatorSize: 56 },
    error: { radius: 3, elevation: 6 },
  },
};
