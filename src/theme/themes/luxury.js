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
    h1: { fontSize: "5rem", fontWeight: 800, letterSpacing: 0 },
    h2: { fontSize: "3rem", fontWeight: 800, letterSpacing: 0 },
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
          letterSpacing: 0,
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
  custom: {
    hero: {
      imageRadius: 0,
      imageElevation: 16,
      floatingCardRadius: 0,
      primaryButtonVariant: "contained",
      secondaryButtonVariant: "outlined",
      layout: "split",
      showStats: true,
      showOfferCard: true,
      showVerifiedCard: true,
    },
    trust: { cardRadius: 0, cardElevation: 0, hoverShadow: 12 },
    products: {
      cardRadius: 0,
      imageRadius: 0,
      cardElevation: 0,
      hoverShadow: 14,
      showWishlist: true,
      cardStyle: "luxury",
    },
    collections: {
      cardRadius: 0,
      cardElevation: 0,
      hoverShadow: 14,
      featureFirst: true,
    },
    offers: { cardRadius: 0, cardElevation: 0, variant: "gradient" },
    reviews: { cardRadius: 0, cardElevation: 2, hoverShadow: 12 },
    newsletter: { radius: 0, elevation: 0, variant: "dark", inputRadius: 0 },
    footerCta: { buttonVariant: "contained" },
    loading: { indicatorSize: 56 },
    error: { radius: 0, elevation: 6 },
  },
};
